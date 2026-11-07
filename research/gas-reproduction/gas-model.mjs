// AI-assisted follow-up reproduction, 2026-11-07. Not the original Forage submission.
const DAY=86_400_000;
export function dateValue(value){
  if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))throw Error('invalid_date');
  const ms=Date.parse(`${value}T00:00:00Z`);
  if(!Number.isFinite(ms)||new Date(ms).toISOString().slice(0,10)!==value)throw Error('invalid_date');
  return ms;
}
export function monthEnd(year,month){return new Date(Date.UTC(year,month+1,0)).toISOString().slice(0,10);}
function calendarShift(value,months){
  const d=new Date(dateValue(value));const year=d.getUTCFullYear();const month=d.getUTCMonth()+months;
  const last=new Date(Date.UTC(year,month+1,0)).getUTCDate();
  return new Date(Date.UTC(year,month,Math.min(d.getUTCDate(),last))).toISOString().slice(0,10);
}
export function validateSeries(series){
  if(!Array.isArray(series)||series.length<24)throw Error('short_series');
  const rows=series.map(row=>({date:row.date,price:row.price,ms:dateValue(row.date)})).sort((a,b)=>a.ms-b.ms);
  rows.forEach((row,i)=>{
    if(!Number.isFinite(row.price))throw Error('invalid_price');
    const d=new Date(row.ms);if(row.date!==monthEnd(d.getUTCFullYear(),d.getUTCMonth()))throw Error('not_month_end');
    if(i){const previous=new Date(rows[i-1].ms);const gap=(d.getUTCFullYear()-previous.getUTCFullYear())*12+d.getUTCMonth()-previous.getUTCMonth();if(gap!==1)throw Error('nonconsecutive_months');}
  });return rows;
}
function features(ms,origin){const years=(ms-origin)/DAY/365.25;return [1,years,Math.sin(2*Math.PI*years),Math.cos(2*Math.PI*years)];}
function solve(matrix,vector){
  const a=matrix.map((row,i)=>[...row,vector[i]]);const n=vector.length;
  for(let col=0;col<n;col++){
    let pivot=col;for(let row=col+1;row<n;row++)if(Math.abs(a[row][col])>Math.abs(a[pivot][col]))pivot=row;
    [a[col],a[pivot]]=[a[pivot],a[col]];
    if(Math.abs(a[col][col])<1e-10)throw Error('singular_model');
    const divisor=a[col][col];for(let j=col;j<=n;j++)a[col][j]/=divisor;
    for(let row=0;row<n;row++)if(row!==col){const factor=a[row][col];for(let j=col;j<=n;j++)a[row][j]-=factor*a[col][j];}
  }return a.map(row=>row[n]);
}
export function fitSeasonalTrend(series){
  const rows=validateSeries(series);const origin=rows[0].ms;
  const matrix=Array.from({length:4},()=>Array(4).fill(0));const vector=Array(4).fill(0);
  for(const row of rows){const x=features(row.ms,origin);for(let i=0;i<4;i++){vector[i]+=x[i]*row.price;for(let j=0;j<4;j++)matrix[i][j]+=x[i]*x[j];}}
  return {coefficients:solve(matrix,vector),origin,first:rows[0].date,last:rows.at(-1).date,maxDate:calendarShift(rows.at(-1).date,12)};
}
export function estimatePrice(model,date){
  const ms=dateValue(date);if(ms<dateValue(model.first)||ms>dateValue(model.maxDate))throw Error('outside_model_range');
  const x=features(ms,model.origin);const value=x.reduce((sum,v,i)=>sum+v*model.coefficients[i],0);
  if(!Number.isFinite(value))throw Error('invalid_estimate');return value;
}
export function syntheticSeries(){
  // Fully specified demonstration generator; no uploaded price rows are embedded here.
  const dates=Array.from({length:48},(_,i)=>monthEnd(2020,9+i));const origin=dateValue(dates[0]);
  return dates.map((date,i)=>{const x=features(dateValue(date),origin);return {date,price:10+.4*x[1]+.55*x[2]+.8*x[3]+.08*Math.sin(i*1.7)};});
}
export function billedMonths(start,end){
  const a=new Date(dateValue(start));const b=new Date(dateValue(end));if(b<a)throw Error('invalid_schedule');
  let months=(b.getUTCFullYear()-a.getUTCFullYear())*12+b.getUTCMonth()-a.getUTCMonth();
  if(dateValue(end)>dateValue(calendarShift(start,months)))months++;
  return months;
}
function positive(value,name,zero=false){if(!Number.isFinite(value)||(zero?value<0:value<=0))throw Error(name);}
export function priceStorageContract({injections,withdrawals,priceAt,capacity,maxInjection,maxWithdrawal,monthlyFee,injectionFee,withdrawalFee,transportFee=0}){
  positive(capacity,'invalid_capacity');positive(maxInjection,'invalid_rate');positive(maxWithdrawal,'invalid_rate');
  for(const value of [monthlyFee,injectionFee,withdrawalFee,transportFee])positive(value,'invalid_fee',true);
  if(!Array.isArray(injections)||!Array.isArray(withdrawals)||!injections.length||!withdrawals.length||typeof priceAt!=='function')throw Error('invalid_schedule');
  const events=new Map();
  function add(rows,key){for(const event of rows){dateValue(event.date);positive(event.volume,'invalid_volume');const day=events.get(event.date)||{date:event.date,injection:0,withdrawal:0};day[key]+=event.volume;if(!Number.isFinite(day[key]))throw Error('invalid_volume');events.set(event.date,day);}}
  add(injections,'injection');add(withdrawals,'withdrawal');
  const days=[...events.values()].sort((a,b)=>a.date.localeCompare(b.date));
  const tolerance=Number.EPSILON*64*Math.max(1,capacity,...days.map(d=>d.injection+d.withdrawal));
  let inventory=0,purchaseCost=0,saleProceeds=0,injectionCost=0,withdrawalCost=0,transportCost=0;
  const schedule=[];
  for(const day of days){
    if(day.injection>maxInjection+tolerance||day.withdrawal>maxWithdrawal+tolerance)throw Error('rate_limit');
    // Explicit same-day policy: inject first, check capacity, then withdraw.
    if(inventory+day.injection>capacity+tolerance)throw Error('capacity_limit');inventory+=day.injection;
    if(day.withdrawal>inventory+tolerance)throw Error('insufficient_inventory');inventory-=day.withdrawal;
    const price=priceAt(day.date);if(!Number.isFinite(price))throw Error('invalid_price');
    purchaseCost+=price*day.injection;saleProceeds+=price*day.withdrawal;
    injectionCost+=injectionFee*day.injection;withdrawalCost+=withdrawalFee*day.withdrawal;
    transportCost+=transportFee*((day.injection>0?1:0)+(day.withdrawal>0?1:0));
    schedule.push({...day,price,inventory:Math.abs(inventory)<tolerance?0:inventory});
  }
  if(Math.abs(inventory)>tolerance)throw Error('unclosed_inventory');
  const months=billedMonths(days[0].date,days.at(-1).date);const storageCost=months*monthlyFee;
  const netValue=saleProceeds-purchaseCost-injectionCost-withdrawalCost-storageCost-transportCost;
  if(!Number.isFinite(netValue))throw Error('invalid_estimate');
  return {purchaseCost,saleProceeds,injectionCost,withdrawalCost,storageCost,transportCost,months,netValue,schedule};
}
