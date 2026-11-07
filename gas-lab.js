import { syntheticSeries, fitSeasonalTrend, estimatePrice, priceStorageContract, dateValue, monthEnd } from './research/gas-reproduction/gas-model.mjs';

// Public demo = generated prices only. Uploaded rows never enter this module.
const gasCopy={
  en:{
    kicker:'FEATURED FOLLOW-UP / 2026-11-07',title:'From a price curve\nto a storage decision.',
    intro:'Estimate a date-based price, compare forecasting errors, and explore a simple storage contract.',
    attribution:'New AI-assisted reproduction · November 7, 2026. Separate from my original Forage submission.',
    step1:'01 / ESTIMATE PRICES',step2:'02 / TEST OUT OF TIME',step3:'03 / VALUE CASH FLOWS',
    synthetic:'Interactive demo: generated synthetic prices, not the uploaded dataset. All contract amounts are illustrative.',
    curveTitle:'The price curve',curveUnit:'ILLUSTRATIVE USD / UNIT',generated:'Generated monthly points',fitted:'Fitted curve',forecast:'12-month extension',buyMarker:'Buy date',sellMarker:'Sell date',
    chartNote:'48 synthetic month-end prices, Oct 2020–Sep 2024. Trend + annual seasonality; extension through Sep 2025. Historical scenario, point estimates only; no prediction interval.',
    chartTitle:'Synthetic natural-gas price scenario',chartDescription:'Generated monthly prices, a fitted trend and seasonal curve, and a dashed 12-month extension. Selected buy and sell dates are marked. Data and estimates are available in the table below.',
    dataTable:'Inspect generated data & estimates',dataCaption:'Generated monthly prices and estimates from the demonstration model',date:'Date',generatedPrice:'Generated price',modelPrice:'Model estimate',
    contractTitle:'Explore a storage contract',injectDate:'Buy / inject',withdrawDate:'Sell / withdraw',volume:'Volume (units)',monthlyFee:'Storage (USD / month)',calculate:'Calculate scenario',
    assumptionsTitle:'Assumptions & calculation rules',
    assumptions:'One buy and one sell in this demo. Capacity: 10,000 units; daily injection/withdrawal caps: 5,000 each; injection and withdrawal fees: USD 0.02/unit each; transport: 0; discount rate: 0. No transit delay. Storage is billed per started month anchored to the injection date; same-day storage costs zero. Inventory must close at zero. Same-day events inject first, then withdraw.',
    net:'Illustrative net cash flow',buyPrice:'Estimated buy price / unit',sellPrice:'Estimated sell price / unit',purchase:'Purchase cost',sale:'Sale proceeds',operationFees:'Injection + withdrawal fees',storageCost:'Storage charge',months:n=>`${n} billed ${n===1?'month':'months'}`,negative:'Negative net cash flow under these assumptions.',positive:'Sale proceeds less purchase, operating, and storage costs. This is a scenario calculation.',
    validationKicker:'VALIDATION / UPLOADED 48-ROW SERIES',validationTitle:'Test the model on later dates.',
    validationIntro:'These scores use the supplied historical CSV, not the synthetic demo. Public outputs contain aggregate metrics only.',
    protocol:'Fixed holdout: train on 36 months (Oct 2020–Sep 2023); predict the next 12 months (Oct 2023–Sep 2024), with no refitting. Baseline: use the price from the same month one year earlier.',
    validationLimit:'A small educational time series and a single holdout year do not establish live-market performance. Error units follow the supplied CSV; no forecast interval or trading-return claim is provided.',
    loading:'Loading validation results…',loadError:'The results could not be loaded. The JSON and methodology links below remain available.',
    sourceLink:'Reproduction, tests & methodology ↗',resultsLink:'Aggregate results JSON ↗',model:'Method',mae:'MAE',rmse:'RMSE',trend:'Trend + annual seasonality',baseline:'Seasonal naive (lag 12)',
    holdoutCaption:'12-month fixed holdout · lower error is better',scaleNote:'MAE bars start at zero and share one scale. Values are rounded to three decimals.',
    rollingTitle:'Inspect the rolling check · 24 one-month forecasts',rollingIntro:'Expanding window with 24 initial training months. Refit using only past observations for each next-month prediction (Oct 2022–Sep 2024). This evaluates a different forecast horizon from the fixed holdout.',rollingCaption:'Expanding-window, one-month-ahead evaluation',
    checks:n=>`${n} model & contract tests passed`,crossCheck:'8 error metrics independently recomputed with NumPy; differences below 1e−9.',tested:'Includes capacity, inventory, daily limits, date range, month-end billing, and invalid inputs.',
    errors:{invalid_schedule:'The withdrawal date must be on or after the injection date.',outside_model_range:'Choose dates from October 31, 2020 through September 30, 2025.',invalid_date:'Enter valid dates.',invalid_volume:'Enter a positive whole-number volume up to 5,000 units.',invalid_fee:'Enter a non-negative storage fee.',rate_limit:'This schedule exceeds a daily injection or withdrawal limit.',capacity_limit:'This schedule exceeds storage capacity.',insufficient_inventory:'The schedule withdraws more inventory than is available.',unclosed_inventory:'The final inventory must be zero.',invalid_input:'Check the dates, volume, and storage fee.'}
  },
  zh:{
    kicker:'代表作后续研究 / 2026-11-07',title:'从价格曲线，\n到储气决策。',
    intro:'按日期估价，比较预测误差，再探索一个简化的储气合约。',
    attribution:'2026 年 11 月 7 日新增 AI 辅助复现，与我原始的 Forage 提交分开记录。',
    step1:'01 / 估计价格',step2:'02 / 时间外检验',step3:'03 / 计算现金流',
    synthetic:'交互演示使用程序生成的合成价格，不使用上传的数据集。所有合约金额均为示例。',
    curveTitle:'价格曲线',curveUnit:'示例美元 / 单位',generated:'合成月度价格',fitted:'拟合曲线',forecast:'向后延伸 12 个月',buyMarker:'买入日期',sellMarker:'卖出日期',
    chartNote:'48 个合成月末价格，覆盖 2020 年 10 月至 2024 年 9 月。趋势＋年度季节项，延伸至 2025 年 9 月。属于历史情境示例；仅提供点估计，暂无预测区间。',
    chartTitle:'合成天然气价格情境',chartDescription:'图中展示合成月度价格、趋势与季节项拟合曲线，以及虚线标识的 12 个月延伸。标记显示所选买入和卖出日期。下方表格可查看数据与估计值。',
    dataTable:'查看合成数据与估计值',dataCaption:'演示模型的合成月度价格与估计值',date:'日期',generatedPrice:'合成价格',modelPrice:'模型估价',
    contractTitle:'探索储气合约',injectDate:'买入 / 注入日期',withdrawDate:'卖出 / 提取日期',volume:'数量（单位）',monthlyFee:'仓储费（美元 / 月）',calculate:'计算情境',
    assumptionsTitle:'假设与计算规则',
    assumptions:'此演示只设一次买入与一次卖出。容量 10,000 单位；每日注入、提取上限各 5,000 单位；注入和提取费用各为每单位 0.02 美元；运输费与贴现率均为 0，无运输延迟。仓储费以注入日为锚点按开始的月份计费；同日注提仓储费为 0。期末库存必须归零，同日事件先注入再提取。',
    net:'示例净现金流',buyPrice:'估计买价 / 单位',sellPrice:'估计卖价 / 单位',purchase:'买入成本',sale:'卖出收入',operationFees:'注入＋提取费用',storageCost:'仓储费用',months:n=>`计费 ${n} 个月`,negative:'在当前假设下，净现金流为负。',positive:'卖出收入减去买入、注提与仓储成本。此处仅为情境计算。',
    validationKicker:'验证 / 上传的 48 行价格序列',validationTitle:'用之后的日期，检验模型。',
    validationIntro:'这里的误差来自上传的历史 CSV，与上方合成演示分开。公开结果只包含汇总指标。',
    protocol:'固定留出测试：前 36 个月训练（2020 年 10 月—2023 年 9 月），一次预测后 12 个月（2023 年 10 月—2024 年 9 月），期间不重新拟合。基线：采用去年同月的价格。',
    validationLimit:'小规模教学时间序列及单个留出年份，不能证明实盘表现。误差单位沿用上传 CSV 的价格单位；暂无预测区间，也不声称交易收益。',
    loading:'正在加载验证结果…',loadError:'暂时无法加载结果，可通过下方 JSON 与方法说明链接查看。',
    sourceLink:'复现代码、测试与方法说明 ↗',resultsLink:'汇总结果 JSON ↗',model:'方法',mae:'MAE',rmse:'RMSE',trend:'趋势＋年度季节项',baseline:'季节性朴素基线（滞后 12 个月）',
    holdoutCaption:'12 个月固定留出集 · 误差越低越好',scaleNote:'MAE 条形从零开始，采用相同比例尺；数值保留三位小数。',
    rollingTitle:'查看滚动检验 · 24 次单月预测',rollingIntro:'以前 24 个月为初始训练集，逐月扩展窗口；每次只使用过去的观测重新拟合，再预测下一个月（2022 年 10 月—2024 年 9 月）。该检验的预测步长与固定留出测试不同。',rollingCaption:'扩展窗口的一步向前检验',
    checks:n=>`${n} 项模型与合约测试通过`,crossCheck:'8 个误差指标经 NumPy 独立复算，差异小于 1e−9。',tested:'覆盖容量、库存、每日速率、日期范围、月末计费和无效输入。',
    errors:{invalid_schedule:'提取日期需要晚于或等于注入日期。',outside_model_range:'请选择 2020 年 10 月 31 日至 2025 年 9 月 30 日内的日期。',invalid_date:'请输入有效日期。',invalid_volume:'请输入 1 至 5,000 的整数数量。',invalid_fee:'请输入非负仓储费。',rate_limit:'计划超出了每日注入或提取上限。',capacity_limit:'计划超出了仓储容量。',insufficient_inventory:'提取数量超过了可用库存。',unclosed_inventory:'期末库存需要归零。',invalid_input:'请检查日期、数量与仓储费。'}
  }
};
let gasLang='en',gasReady=false,gasModel,gasRows,gasResults=null,gasLoadFailed=false,gasSelected=null;
const gasNode=(tag,className,text)=>{const n=document.createElement(tag);if(className)n.className=className;if(text!==undefined)n.textContent=text;return n;};
const gasEl=id=>document.getElementById(id);
const gasLocale=()=>gasLang==='zh'?'zh-CN':'en-US';
const gasMoney=value=>new Intl.NumberFormat(gasLocale(),{style:'currency',currency:'USD',currencyDisplay:'code',minimumFractionDigits:2,maximumFractionDigits:2}).format(value);
const gasNumber=(value,digits=3)=>new Intl.NumberFormat(gasLocale(),{minimumFractionDigits:digits,maximumFractionDigits:digits}).format(value);

function renderGasChart(){
  const host=gasEl('gas-chart');const t=gasCopy[gasLang];const ns='http://www.w3.org/2000/svg';
  const width=Math.max(240,host.clientWidth||640),height=width<440?235:285;
  const margin={top:20,right:15,bottom:30,left:38};const plotWidth=width-margin.left-margin.right,plotHeight=height-margin.top-margin.bottom;
  const first=dateValue(gasModel.first),last=dateValue(gasModel.last),end=dateValue(gasModel.maxDate);
  const linePoints=Array.from({length:181},(_,i)=>{const date=new Date(first+(end-first)*i/180).toISOString().slice(0,10);return {date,price:estimatePrice(gasModel,date)};});
  const low=Math.floor(Math.min(...gasRows.map(r=>r.price),...linePoints.map(r=>r.price))-.25),high=Math.ceil(Math.max(...gasRows.map(r=>r.price),...linePoints.map(r=>r.price))+.25);
  const x=date=>margin.left+(dateValue(date)-first)/(end-first)*plotWidth;
  const y=price=>margin.top+(high-price)/(high-low)*plotHeight;
  const svg=document.createElementNS(ns,'svg');svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('role','img');svg.setAttribute('aria-labelledby','gas-chart-title gas-chart-desc');
  function mark(tag,attrs,text){const n=document.createElementNS(ns,tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;svg.append(n);return n;}
  mark('title',{id:'gas-chart-title'},t.chartTitle);mark('desc',{id:'gas-chart-desc'},t.chartDescription);
  mark('rect',{x:x(gasModel.last),y:margin.top,width:width-margin.right-x(gasModel.last),height:plotHeight,fill:'#518eff',opacity:'.045'});
  for(let price=low;price<=high;price++){
    mark('line',{x1:margin.left,y1:y(price),x2:width-margin.right,y2:y(price),stroke:'#26374c','stroke-width':1});
    mark('text',{x:margin.left-8,y:y(price)+3,'text-anchor':'end',class:'gas-axis'},String(price));
  }
  const tickDates=width<440?['2020-10-31','2022-09-30','2025-09-30']:['2020-10-31','2021-12-31','2023-03-31','2024-06-30','2025-09-30'];
  tickDates.forEach((date,i)=>mark('text',{x:x(date),y:height-7,'text-anchor':i===0?'start':i===tickDates.length-1?'end':'middle',class:'gas-axis'},new Intl.DateTimeFormat(gasLocale(),{year:'2-digit',month:'short',timeZone:'UTC'}).format(new Date(dateValue(date)))));
  const historical=[...linePoints.filter(r=>dateValue(r.date)<last),{date:gasModel.last,price:estimatePrice(gasModel,gasModel.last)}];
  const future=[historical.at(-1),...linePoints.filter(r=>dateValue(r.date)>last)];
  const path=points=>points.map((r,i)=>`${i?'L':'M'}${x(r.date).toFixed(2)} ${y(r.price).toFixed(2)}`).join(' ');
  mark('path',{d:path(historical),fill:'none',stroke:'#6ca7ff','stroke-width':2});
  mark('path',{d:path(future),fill:'none',stroke:'#6ca7ff','stroke-width':2,'stroke-dasharray':'6 5'});
  gasRows.forEach(row=>mark('circle',{cx:x(row.date),cy:y(row.price),r:2.4,fill:'#a3bedc'}));
  if(gasSelected){
    for(const [index,date] of [gasSelected.injection,gasSelected.withdrawal].entries()){
      const price=estimatePrice(gasModel,date);const color=index?'#6de5d7':'#9bb9ff';
      mark('line',{x1:x(date),y1:y(price),x2:x(date),y2:height-margin.bottom,stroke:color,opacity:'.6','stroke-dasharray':'2 4'});
      mark('circle',{cx:x(date),cy:y(price),r:index?5:7,fill:index?color:'#0e192a',stroke:color,'stroke-width':2});
    }
  }
  host.replaceChildren(svg);
}
function renderSyntheticTable(){
  const body=gasEl('gas-synthetic-table');body.replaceChildren();
  for(let i=0;i<60;i++){
    const date=monthEnd(2020,9+i);const row=gasNode('tr');const heading=gasNode('th','',date);heading.scope='row';
    row.append(heading,gasNode('td','',i<48?gasNumber(gasRows[i].price):'—'),gasNode('td','',gasNumber(estimatePrice(gasModel,date))));body.append(row);
  }
}
function calculateGasContract(){
  const form=gasEl('gas-contract-form'),t=gasCopy[gasLang];const error=gasEl('gas-form-error'),result=gasEl('gas-contract-result');
  try{
    const injection=form.elements.injection.value,withdrawal=form.elements.withdrawal.value,volume=Number(form.elements.volume.value),monthlyFee=Number(form.elements.monthlyFee.value);
    if(dateValue(withdrawal)<dateValue(injection))throw Error('invalid_schedule');
    if(!Number.isInteger(volume)||volume<1||volume>5000)throw Error('invalid_volume');
    if(form.elements.monthlyFee.value===''||!Number.isFinite(monthlyFee)||monthlyFee<0||monthlyFee>1000000)throw Error('invalid_fee');
    const contract=priceStorageContract({injections:[{date:injection,volume}],withdrawals:[{date:withdrawal,volume}],priceAt:date=>estimatePrice(gasModel,date),capacity:10000,maxInjection:5000,maxWithdrawal:5000,monthlyFee,injectionFee:.02,withdrawalFee:.02});
    error.hidden=true;error.textContent='';gasSelected={injection,withdrawal};result.hidden=false;
    const amount=gasNode('p',`gas-net-value${contract.netValue<0?' is-negative':''}`,gasMoney(contract.netValue));
    const net=gasNode('div','gas-net');net.append(gasNode('span','case-card-label',t.net),amount,gasNode('p','gas-net-note',contract.netValue<0?t.negative:t.positive));
    const list=gasNode('dl','gas-cashflow');
    const values=[[t.buyPrice,gasMoney(estimatePrice(gasModel,injection))],[t.sellPrice,gasMoney(estimatePrice(gasModel,withdrawal))],[t.purchase,gasMoney(contract.purchaseCost)],[t.sale,gasMoney(contract.saleProceeds)],[t.operationFees,gasMoney(contract.injectionCost+contract.withdrawalCost)],[`${t.storageCost} · ${t.months(contract.months)}`,gasMoney(contract.storageCost)]];
    values.forEach(([label,value])=>{const row=gasNode('div');row.append(gasNode('dt','',label),gasNode('dd','',value));list.append(row);});
    result.replaceChildren(net,list);renderGasChart();
  }catch(cause){
    gasSelected=null;error.hidden=false;error.textContent=t.errors[cause.message]||t.errors.invalid_input;result.replaceChildren();result.hidden=true;renderGasChart();
  }
}
function gasMetricTable(scores,caption,showBars){
  const t=gasCopy[gasLang];const table=gasNode('table','gas-metric-table');table.append(gasNode('caption','',caption));
  const head=gasNode('thead');const labels=gasNode('tr');for(const label of [t.model,t.mae,t.rmse]){const th=gasNode('th','',label);th.scope='col';labels.append(th);}head.append(labels);table.append(head);
  const body=gasNode('tbody');const max=Math.max(scores.model.mae,scores.seasonalNaive.mae);
  for(const [label,score] of [[t.trend,scores.model],[t.baseline,scores.seasonalNaive]]){
    const row=gasNode('tr'),name=gasNode('th','',label);name.scope='row';const mae=gasNode('td','gas-mae');mae.append(gasNode('span','metric-value',gasNumber(score.mae)));
    if(showBars){const track=gasNode('span','gas-bar-track');track.setAttribute('aria-hidden','true');const bar=gasNode('span','gas-bar');bar.style.width=`${max>0?score.mae/max*100:0}%`;track.append(bar);mae.append(track);}
    row.append(name,mae,gasNode('td','metric-value',gasNumber(score.rmse)));body.append(row);
  }
  table.append(body);return table;
}
function renderGasValidation(){
  const t=gasCopy[gasLang],host=gasEl('gas-validation-content');host.replaceChildren();
  if(!gasResults){host.append(gasNode('p','gas-loading',gasLoadFailed?t.loadError:t.loading));return;}
  host.append(gasMetricTable(gasResults.holdout,t.holdoutCaption,true),gasNode('p','gas-scale-note',t.scaleNote));
  const checks=gasNode('div','gas-checks');
  const tests=gasNode('div');tests.append(gasNode('strong','',t.checks(gasResults.verification.nodeTestsPassed)),gasNode('p','',t.tested));
  const crosscheck=gasNode('div');crosscheck.append(gasNode('strong','',t.crossCheck));checks.append(tests,crosscheck);host.append(checks);
  const details=gasNode('details','gas-rolling');details.append(gasNode('summary','',t.rollingTitle),gasNode('p','',t.rollingIntro),gasMetricTable(gasResults.rolling,t.rollingCaption,false));host.append(details);
}
export function setGasLabLanguage(value){
  gasLang=value==='zh'?'zh':'en';if(!gasReady)return;
  const t=gasCopy[gasLang];
  document.querySelectorAll('[data-gas-i18n]').forEach(node=>{
    const text=t[node.dataset.gasI18n];if(typeof text!=='string')return;
    node.replaceChildren();text.split('\n').forEach((line,i)=>{if(i)node.append(document.createElement('br'));node.append(document.createTextNode(line));});
  });
  renderSyntheticTable();calculateGasContract();renderGasValidation();
}
export async function initGasLab(value){
  if(gasReady||!gasEl('gas-lab'))return;
  gasRows=syntheticSeries();gasModel=fitSeasonalTrend(gasRows);gasReady=true;
  gasEl('gas-contract-form').addEventListener('submit',event=>{event.preventDefault();calculateGasContract();});
  new ResizeObserver(renderGasChart).observe(gasEl('gas-chart'));
  setGasLabLanguage(value);
  try{
    const response=await fetch('./assets/gas-validation.json?v=9');if(!response.ok)throw Error('results_unavailable');const data=await response.json();
    if(data.evaluationDate!=='2026-11-07'||data.data?.rowCount!==48||data.holdout?.trainN!==36||data.holdout?.testN!==12||data.rolling?.testN!==24||data.verification?.nodeTestsPassed!==27)throw Error('invalid_results');
    for(const part of [data.holdout,data.rolling])for(const method of [part.model,part.seasonalNaive])for(const metric of ['mae','rmse'])if(!Number.isFinite(method?.[metric])||method[metric]<0)throw Error('invalid_results');
    gasResults=data;
  }catch{gasLoadFailed=true;}
  renderGasValidation();
}
