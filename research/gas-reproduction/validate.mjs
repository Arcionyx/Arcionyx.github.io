import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fitSeasonalTrend,estimatePrice,validateSeries} from './gas-model.mjs';
export function parsePriceCsv(text){
  const lines=text.replace(/^\uFEFF/,'').trim().split(/\r?\n/);if(lines.shift()?.trim()!=='Dates,Prices')throw Error('Expected Dates,Prices CSV');
  return lines.map(line=>{
    const parts=line.split(',').map(v=>v.trim().replace(/^"|"$/g,''));if(parts.length!==2)throw Error('Expected two fields');
    let date=parts[0];const match=date.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2}|\d{4})$/);
    if(match){const year=match[3].length===2?2000+Number(match[3]):Number(match[3]);date=`${year}-${match[1].padStart(2,'0')}-${match[2].padStart(2,'0')}`;}
    if(parts[1]==='')throw Error('Missing price');return {date,price:Number(parts[1])};
  });
}
export function score(actual,predicted){
  if(!actual.length||actual.length!==predicted.length)throw Error('Invalid score inputs');
  const errors=actual.map((v,i)=>predicted[i]-v);return {mae:errors.reduce((s,e)=>s+Math.abs(e),0)/errors.length,rmse:Math.sqrt(errors.reduce((s,e)=>s+e*e,0)/errors.length)};
}
export function validateFile(csvPath,outputPath,privatePath){
  const raw=readFileSync(csvPath);const rows=validateSeries(parsePriceCsv(raw.toString())).map(({date,price})=>({date,price}));
  if(rows.length!==48)throw Error('This fixed review protocol expects 48 monthly observations');
  const train=rows.slice(0,36),test=rows.slice(36);const model=fitSeasonalTrend(train);
  const predicted=test.map(row=>estimatePrice(model,row.date));const baseline=rows.slice(24,36).map(row=>row.price);
  const rolling=[];for(let i=24;i<rows.length;i++)rolling.push({date:rows[i].date,actual:rows[i].price,model:estimatePrice(fitSeasonalTrend(rows.slice(0,i)),rows[i].date),baseline:rows[i-12].price});
  const result={schemaVersion:1,evaluationDate:'2026-11-07',attribution:'New AI-assisted follow-up reproduction; not the original Forage submission or historical performance.',data:{rowCount:48,start:rows[0].date,end:rows.at(-1).date,sha256:createHash('sha256').update(raw).digest('hex'),publicRowsIncluded:false,units:'price units from the supplied CSV'},method:'Joint least-squares intercept, linear time trend, annual sine and cosine; fixed before evaluation. No tuning on test values.',holdout:{trainStart:train[0].date,trainEnd:train.at(-1).date,trainN:36,testStart:test[0].date,testEnd:test.at(-1).date,testN:12,horizon:'One fixed 12-month forecast; the model is not refitted inside the test period.',model:score(test.map(r=>r.price),predicted),seasonalNaive:score(test.map(r=>r.price),baseline)},rolling:{initialTrainN:24,testN:24,horizon:'Expanding-window one-month forecasts, refit using only earlier observations.',model:score(rolling.map(r=>r.actual),rolling.map(r=>r.model)),seasonalNaive:score(rolling.map(r=>r.actual),rolling.map(r=>r.baseline))},limitations:['One small historical educational series; this is not evidence of live-market forecasting performance.','Original price records remain private; the public demo uses separately generated synthetic inputs.','No prediction interval or trading return is estimated.']};
  writeFileSync(outputPath,JSON.stringify(result,null,2)+'\n');
  if(privatePath)writeFileSync(privatePath,JSON.stringify({holdout:test.map((r,i)=>({...r,predicted:predicted[i],baseline:baseline[i]})),rolling},null,2));
  return result;
}
if(process.argv[1]&&import.meta.url===new URL(`file://${process.argv[1]}`).href){
  const [csv,out,privateOut]=process.argv.slice(2);if(!csv||!out)throw Error('Usage: node validate.mjs input.csv aggregate-results.json [private-predictions.json]');
  const result=validateFile(csv,out,privateOut);console.log(JSON.stringify({holdout:result.holdout,rolling:result.rolling},null,2));
}
