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
    kicker:'新增复现与验证 / 2026-11-07',title:'天然气价格估计\n与储气合约演示',
    intro:'调整买卖日期、数量和仓储费，查看估算价格与合约现金流。下方列出了模型测试的方法和结果。',
    attribution:'本次复现于 2026 年 11 月 7 日在 AI 辅助下完成，原始 Forage 提交单独保留。',
    step1:'01 / 估计价格',step2:'02 / 时间外测试',step3:'03 / 计算现金流',
    synthetic:'演示使用程序生成的合成价格，合约金额均为假设情境下的计算结果。上传数据仅用于下方的模型验证。',
    curveTitle:'价格曲线',curveUnit:'示例价格 · 美元 / 单位',generated:'合成月度价格',fitted:'拟合曲线',forecast:'后 12 个月估价',buyMarker:'买入日期',sellMarker:'卖出日期',
    chartNote:'图中包含 2020 年 10 月至 2024 年 9 月的 48 条合成月末价格。模型拟合趋势和年度季节项，并估算至 2025 年 9 月的价格。这是一组历史情境示例，目前只提供估计值，暂无预测区间。',
    chartTitle:'合成天然气价格曲线',chartDescription:'圆点表示合成月度价格，实线表示拟合曲线，虚线表示后 12 个月的估价。图中也标出了所选买卖日期。具体数据和估计值可在下方表格中查看。',
    dataTable:'查看合成数据与估计值',dataCaption:'演示模型的合成月度价格与估计值',date:'日期',generatedPrice:'合成价格',modelPrice:'模型估价',
    contractTitle:'储气合约计算',injectDate:'买入 / 注入日期',withdrawDate:'卖出 / 提取日期',volume:'数量（单位）',monthlyFee:'仓储费（美元 / 月）',calculate:'计算合约现金流',
    assumptionsTitle:'假设与计算规则',
    assumptions:'演示设定一次买入和一次卖出。仓储容量为 10,000 单位，每日注入和提取上限各为 5,000 单位，注入费和提取费各为每单位 0.02 美元。运输费、贴现率和运输延迟均按 0 处理。仓储费按注入日起的日历月计收，不足一个月按一个月计；同日注提不收仓储费。期末库存必须归零，同日操作先注入、再提取。',
    net:'示例净现金流',buyPrice:'估算买价 / 单位',sellPrice:'估算卖价 / 单位',purchase:'买入成本',sale:'卖出收入',operationFees:'注入＋提取费用',storageCost:'仓储费用',months:n=>`计费 ${n} 个月`,negative:'按当前输入和假设计算，净现金流为负。',positive:'计算结果为卖出收入减去买入、注提和仓储费用，仅用于演示这一组假设。',
    validationKicker:'模型验证 / 上传的 48 条价格数据',validationTitle:'留出后续数据，检验预测效果',
    validationIntro:'以下误差使用上传的历史 CSV 计算，演示中的合成数据不参与这项测试。公开结果仅包含汇总指标。',
    protocol:'固定留出测试使用前 36 个月的数据训练（2020 年 10 月—2023 年 9 月），一次性预测后 12 个月（2023 年 10 月—2024 年 9 月），测试期间不重新拟合。对比基线直接沿用去年同月的价格。',
    validationLimit:'测试使用小规模教学数据，固定留出集只有一年，结果尚不足以说明实盘表现。误差单位与原 CSV 的价格单位相同。目前没有预测区间或交易收益验证。',
    loading:'正在加载验证结果…',loadError:'结果暂时加载失败，可点击下方链接查看 JSON 文件和方法说明。',
    sourceLink:'复现代码、测试与方法说明 ↗',resultsLink:'汇总结果 JSON ↗',model:'方法',mae:'MAE',rmse:'RMSE',trend:'趋势＋年度季节项',baseline:'季节性基线（沿用去年同月价格）',
    holdoutCaption:'12 个月固定留出测试 · 误差越低越好',scaleNote:'MAE 条形统一以 0 为起点，采用相同比例尺；数值保留三位小数。',
    rollingTitle:'滚动测试 · 24 次单月预测',rollingIntro:'滚动测试以前 24 个月为初始训练集，此后逐月加入已有数据，重新拟合并预测下一个月，合计预测 2022 年 10 月至 2024 年 9 月的 24 个月。每次训练仅使用当时已有的观测，预测步长与固定留出测试不同。',rollingCaption:'扩展训练窗口 · 每次预测下一个月',
    checks:n=>`${n} 项模型与合约测试通过`,crossCheck:'使用 NumPy 独立复算了 8 个误差指标，计算差异小于 1e−9。',tested:'测试涵盖容量、库存、每日注提上限、日期范围、月末计费和无效输入。',
    errors:{invalid_schedule:'提取日期不能早于注入日期。',outside_model_range:'请选择 2020 年 10 月 31 日至 2025 年 9 月 30 日内的日期。',invalid_date:'请输入有效日期。',invalid_volume:'数量须为 1 至 5,000 之间的整数。',invalid_fee:'仓储费不能为负数。',rate_limit:'注提计划超过了每日注入或提取上限。',capacity_limit:'注提计划超过了仓储容量。',insufficient_inventory:'提取数量超过了可用库存。',unclosed_inventory:'期末库存必须为 0。',invalid_input:'请检查日期、数量与仓储费。'}
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
