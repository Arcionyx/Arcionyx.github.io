import { copy, projects, experience, skills, credentials } from './content.js?v=4';
import { extendedCopy, evidence, perspectives, coursework, learningGroups, personalInterests } from './profile.js?v=4';
import { caseStudyCopy, caseStudies } from './case-studies.js?v=4';

Object.assign(copy.en, extendedCopy.en);
Object.assign(copy.zh, extendedCopy.zh);
Object.assign(copy.en, caseStudyCopy.en);
Object.assign(copy.zh, caseStudyCopy.zh);

const $ = (s, parent = document) => parent.querySelector(s);
const $$ = (s, parent = document) => [...parent.querySelectorAll(s)];
const saved = key => { try { return localStorage.getItem(key); } catch { return null; } };
const persist = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Storage is optional. */ } };
const preferredLanguage=saved('rf-language');
let language=['en','zh'].includes(preferredLanguage)?preferredLanguage:navigator.language.toLowerCase().startsWith('zh')?'zh':'en';
let currentFilter = 'all';
let currentJourney = 'all';
let currentLens = 'quant';
let activeProject = null;
let lastProjectButton = null;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled = saved('rf-motion') === null ? !reducedMotion.matches : saved('rf-motion') === 'on';

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function tags(values) {
  const node = element('div', 'mini-tags');
  values.forEach(value => node.append(element('span', '', value)));
  return node;
}
function titleText(node, text) {
  node.replaceChildren();
  const lines = text.split('\n');
  lines.forEach((line, index) => {
    if (index) node.append(document.createElement('br'));
    node.append(index === lines.length - 1 && lines.length > 1 && node.tagName === 'H2' ? element('em', '', line) : document.createTextNode(line));
  });
}
function openProject(project, opener) {
  activeProject = project; lastProjectButton = opener;
  renderDialog(); $('#project-dialog').showModal(); document.body.style.overflow = 'hidden';
}
function projectButton(projectId, label, className='text-link') {
  const button = element('button', className, label); button.type = 'button';
  button.addEventListener('click', () => openProject(projects.find(project => project.id === projectId), button));
  return button;
}
function renderEvidence() {
  const grid = $('#evidence-grid'); grid.replaceChildren();
  evidence.forEach(item => {
    const link = element('a', 'evidence-item'); link.href = `#work-${item.project}`;
    link.addEventListener('click',()=>setProjectFilter('all'));
    link.append(element('span', 'evidence-value', item.value),element('span', 'evidence-description', item.label[language]),element('span', 'evidence-context', `${item.context[language]} ↗`));
    grid.append(link);
  });
}
function setProjectFilter(value){
  currentFilter=value;
  $$('[data-filter]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.filter===value)));
  renderProjects();updateProgress();
}
function selectLens(id, moveFocus=false) {
  currentLens=id; renderFocus();
  if(moveFocus) $(`#lens-tab-${id}`).focus();
}
function renderFocus() {
  const grid = $('#focus-grid'); grid.replaceChildren();
  grid.append(element('div','mono lens-label',copy[language].lensLabel));
  const tabs=element('div','lens-tabs'); tabs.setAttribute('role','tablist'); tabs.setAttribute('aria-label',copy[language].lensLabel);
  perspectives.forEach((item,index)=>{
    const tab=element('button','lens-tab');tab.type='button';tab.id=`lens-tab-${item.id}`;
    tab.append(element('span','',`0${index+1}`),element('strong','',['QUANT','IT / SYSTEMS','BUSINESS ANALYTICS'][index]));
    tab.setAttribute('role','tab');tab.setAttribute('aria-controls','perspective-panel');tab.setAttribute('aria-selected',String(currentLens===item.id));tab.tabIndex=currentLens===item.id?0:-1;
    tab.addEventListener('click',()=>selectLens(item.id,true));
    tab.addEventListener('keydown',event=>{
      const next=event.key==='ArrowRight'?(index+1)%3:event.key==='ArrowLeft'?(index+2)%3:event.key==='Home'?0:event.key==='End'?2:null;
      if(next!==null){event.preventDefault();selectLens(perspectives[next].id,true);}
    });tabs.append(tab);
  });
  const item=perspectives.find(item=>item.id===currentLens);
  const panel=element('div','lens-panel');panel.id='perspective-panel';panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',`lens-tab-${item.id}`);panel.tabIndex=0;
  const visual=element('div',`lens-visual lens-${item.id}`);visual.setAttribute('aria-hidden','true');visual.append(element('span','lens-symbol',item.symbol),element('span','mono',item.subtitle[language]));
  const body=element('div','lens-body');body.append(element('h3','',item.title[language]),element('p','',item.body[language]),element('div','lens-proof',item.proof[language]),tags(item.tags),projectButton(item.project,`${copy[language].lensProject} ↗`));
  panel.append(visual,body);grid.append(tabs,panel);
}

function projectArt(type, number) {
  const box = element('div', `project-art art-${type}`);
  box.setAttribute('aria-hidden', 'true');
  // These decorative illustrations contain no market data or model results.
  const artwork = {
    signal: `<svg viewBox="0 0 360 220" fill="none"><defs><linearGradient id="line-glow"><stop stop-color="#4a75fb"/><stop offset="1" stop-color="#78f0e0"/></linearGradient><linearGradient id="line-fill" x2="0" y2="1"><stop stop-color="#4688ef" stop-opacity=".26"/><stop offset="1" stop-color="#4688ef" stop-opacity="0"/></linearGradient></defs><path d="M0 55H360M0 95H360M0 135H360M0 175H360M40 30V200M100 30V200M160 30V200M220 30V200M280 30V200M340 30V200" stroke="#86b1e7" stroke-opacity=".07"/><path d="M0 173 25 167 46 178 67 143 88 153 110 118 130 129 150 102 170 119 190 88 214 99 238 64 256 81 281 47 302 65 327 39 360 46V220H0Z" fill="url(#line-fill)"/><path d="M0 173 25 167 46 178 67 143 88 153 110 118 130 129 150 102 170 119 190 88 214 99 238 64 256 81 281 47 302 65 327 39 360 46" stroke="url(#line-glow)" stroke-width="2"/><path d="M0 185Q100 180 175 128T360 85" stroke="#6398ff" stroke-opacity=".35" stroke-dasharray="4 5"/><circle cx="238" cy="64" r="4" fill="#86efef"/><circle cx="238" cy="64" r="12" stroke="#86efef" stroke-opacity=".3"/></svg>`,
    system: `<svg viewBox="0 0 360 220" fill="none"><path d="M72 110H130M230 110H288M180 54V80M180 140V169M103 65 148 91M211 129 257 158M103 158 148 129M211 91 257 65" stroke="#5388d7" stroke-width="1.2"/><path d="M70 110H132M230 110H288" stroke="#67d9e8" stroke-dasharray="3 12"/><g fill="#0d1e35" stroke="#3b6096"><rect x="135" y="80" width="90" height="60" rx="8"/><rect x="43" y="95" width="38" height="30" rx="5"/><rect x="280" y="95" width="38" height="30" rx="5"/><rect x="161" y="30" width="38" height="30" rx="5"/><rect x="161" y="163" width="38" height="30" rx="5"/><circle cx="98" cy="62" r="12"/><circle cx="98" cy="162" r="12"/><circle cx="262" cy="62" r="12"/><circle cx="262" cy="162" r="12"/></g><path d="m167 100-10 10 10 10m26-20 10 10-10 10m-8-23-10 26" stroke="#73c5ff" stroke-width="2"/><g fill="#66dbeb"><circle cx="98" cy="62" r="3"/><circle cx="262" cy="162" r="3"/><circle cx="180" cy="45" r="3"/></g><rect x="129" y="74" width="102" height="72" rx="11" stroke="#4c8ef0" stroke-opacity=".18"/></svg>`,
    orbit: `<svg viewBox="0 0 360 220" fill="none"><circle cx="180" cy="111" r="71" stroke="#3d69a5" stroke-opacity=".3"/><circle cx="180" cy="111" r="48" stroke="#3d69a5" stroke-opacity=".2"/><path d="M180 111 239 70M180 111 108 130M180 111 224 169" stroke="#497dc4"/><circle cx="180" cy="111" r="25" fill="#18365c" stroke="#6aa7ff"/><circle cx="239" cy="70" r="16" fill="#10273f" stroke="#63d9e5"/><circle cx="108" cy="130" r="21" fill="#152746" stroke="#6c91e8"/><circle cx="224" cy="169" r="12" fill="#172842" stroke="#7596d7"/><path d="M180 40a71 71 0 0 1 66 96" stroke="#6aafff" stroke-width="2"/><circle cx="180" cy="40" r="3" fill="#84c7ff"/><text x="180" y="115" text-anchor="middle" font-family="monospace" font-size="11" fill="#9dd3ff">KPI</text><path d="M280 46h25m-25 7h14M54 170h25m-25 7h14" stroke="#52749e" stroke-opacity=".6"/></svg>`,
    risk: `<svg viewBox="0 0 360 220" fill="none"><path d="M50 178H315M50 50V178" stroke="#416390" stroke-opacity=".5"/><path d="M50 162C100 162 110 156 139 139S178 67 215 62 262 60 315 59" stroke="#71dbe6" stroke-width="2"/><path d="M50 162C100 162 110 156 139 139S178 67 215 62 262 60 315 59V178H50Z" fill="#549bff" fill-opacity=".09"/><path d="M180 54V178" stroke="#73aafa" stroke-dasharray="4 5" stroke-opacity=".4"/><circle cx="180" cy="88" r="5" fill="#7be4ef"/><text x="65" y="64" fill="#9dc5f4" font-size="11" font-family="monospace">P(default)</text><text x="277" y="196" fill="#6d8daf" font-size="8" font-family="monospace">RISK</text><g fill="#779fe0" fill-opacity=".6"><circle cx="77" cy="159" r="2"/><circle cx="113" cy="151" r="2"/><circle cx="153" cy="124" r="2"/><circle cx="226" cy="65" r="2"/><circle cx="280" cy="58" r="2"/></g></svg>`,
    buckets: `<svg viewBox="0 0 360 220" fill="none"><path d="M40 177H320" stroke="#416390"/><g fill="#4675bb" fill-opacity=".4" stroke="#73adff" stroke-opacity=".45">${Array.from({length:10},(_,i)=>`<rect x="${43+i*28}" y="${146-i*9}" width="19" height="${31+i*9}" rx="2"/>`).join('')}</g><path d="M43 132 71 123 99 114 127 105 155 96 183 87 211 78 239 69 267 60 295 51" stroke="#79dbe5" stroke-width="1.5" stroke-dasharray="3 4"/><text x="44" y="198" fill="#819ec6" font-size="9" font-family="monospace">01</text><text x="295" y="198" fill="#819ec6" font-size="9" font-family="monospace">10</text></svg>`,
  };
  box.innerHTML = artwork[type];
  const caption = element('div', 'art-caption');
  caption.append(element('span', '', type === 'signal' ? 'SIGNAL / MODEL' : type === 'system' ? 'DATA / SYSTEMS' : 'STRATEGY / DECISION'), element('span', '', number));
  box.append(caption, element('span', 'art-note', language === 'zh' ? '概念视觉示意' : 'CONCEPTUAL VISUALIZATION'));
  return box;
}

function renderProjects() {
  const grid = $('#project-grid'); grid.replaceChildren();
  const visible = projects.filter(p => currentFilter === 'all' || p.categories.includes(currentFilter));
  grid.classList.toggle('is-filtered',currentFilter!=='all');
  grid.style.setProperty('--project-count',String(Math.min(visible.length,3)));
  visible.forEach(project => {
    const study=caseStudies[project.id];
    const card = element('article', 'project-card');card.id=`work-${project.id}`;
    const body = element('div', 'project-body');
    const heading = element('h3'); titleText(heading, project.title[language]);
    const button = element('button', 'project-detail'); button.type = 'button';
    button.append(element('span', '', copy[language].details), element('span', '', '↗'));
    button.setAttribute('aria-label', `${copy[language].details}: ${project.title[language].replace('\n',' ')}`);
    button.addEventListener('click', () => openProject(project,button));
    const problem=element('div','case-card-section');problem.append(element('span','case-card-label',copy[language].pain),element('p','project-pain',study.pain[language]));
    const role=element('div','case-card-section');role.append(element('span','case-card-label',copy[language].contribution),element('p','project-role',study.roleSummary[language]));
    const publicArtifacts=study.artifacts.filter(asset=>asset.status==='published'&&asset.url);
    const metric=element('div','project-metric');metric.append(element('span','metric-kind',copy[language].scopeLabel),element('span','',project.metric[language]));
    body.append(element('div', 'project-category', project.label), heading, element('div','project-scope',project.scope[language]),problem,role,metric,element('div','case-evidence-status',publicArtifacts.length?copy[language].evidenceReady:copy[language].evidenceStatus),tags(project.tags), button);
    card.append(projectArt(project.art, project.number), body); grid.append(card);
  });
  $('#project-status').textContent = copy[language].shown(visible.length);
}
function artifactUrl(value){
  if(typeof value!=='string'||!value.trim())return null;
  try{const url=new URL(value,window.location.href);return url.protocol==='https:'?url.href:null;}catch{return null;}
}
function renderCaseEvidence(study){
  const panel=element('section','case-artifacts');panel.append(element('h3','',copy[language].artifacts));
  const published=study.artifacts.some(asset=>asset.status==='published'&&artifactUrl(asset.url));
  if(!published)panel.append(element('p','artifact-disclosure',copy[language].evidenceIntro));
  const grid=element('div','artifact-grid');
  study.artifacts.forEach(asset=>{
    const url=asset.status==='published'?artifactUrl(asset.url):null;
    const item=element(url?'a':'div',`artifact-item${url?' is-published':''}`);
    if(url){item.href=url;item.target='_blank';item.rel='noopener noreferrer';}
    item.append(element('span','artifact-kind',copy[language][asset.kind]),element('span','artifact-state',url?copy[language].available:copy[language][asset.status]||copy[language].unpublished));
    if(asset.description?.[language])item.append(element('p','',asset.description[language]));
    grid.append(item);
  });
  panel.append(grid);
  if(study.dataAccess==='confidential'){
    const hasReproduction=study.artifacts.some(asset=>asset.kind==='reproduction'&&asset.status==='published'&&artifactUrl(asset.url));
    panel.append(element('p','artifact-disclosure',`${copy[language].confidentiality}${hasReproduction?'':` ${copy[language].reproductionPending}`}`));
  }
  panel.append(element('p','artifact-cover-note',copy[language].previewNote));
  return panel;
}
function renderDialog() {
  if (!activeProject) return;
  const p = activeProject; const content = $('#dialog-content'); content.replaceChildren();
  const study=caseStudies[p.id];
  const title = element('h2'); titleText(title, p.title[language]);
  const contributions=element('ul','case-contributions');study.contributions[language].forEach(point=>contributions.append(element('li','',point)));
  const methods=element('ol','case-methods');study.method[language].forEach(point=>methods.append(element('li','',point)));
  const results=element('section','case-results');
  const deliverables=element('ul','case-deliverables');study.deliverables[language].forEach(point=>deliverables.append(element('li','',point)));
  const scope=element('div','case-result-scope');scope.append(element('span','',copy[language].reportedScope),element('strong','case-metric',p.metric[language]));
  results.append(element('h3','',copy[language].results),scope,element('h4','',copy[language].deliverables),deliverables,element('h4','',copy[language].validation),element('p','case-validation',study.validation[language]));
  const ownership=element('div','case-ownership');ownership.append(element('h4','',copy[language].ownership),element('p','',study.ownership[language]));
  const source = element('a', 'source-link', copy[language].background);
  source.href = 'https://www.linkedin.com/in/ruixifeng777'; source.target = '_blank'; source.rel = 'noopener noreferrer';
  content.append(element('div', 'project-category', p.label),title,element('p','detail-context',p.context[language]),element('h3','',copy[language].pain),element('p','case-question',study.pain[language]),element('h3','',copy[language].contribution),contributions,ownership,element('h3','',copy[language].method),methods,results,renderCaseEvidence(study),element('h3','',copy[language].tools),tags(p.tags),source);
  title.id = 'dialog-title'; $('#project-dialog').setAttribute('aria-labelledby', title.id);
}
function renderExperience() {
  const timeline = $('#timeline'); timeline.replaceChildren();
  const visible=experience.filter(item=>currentJourney==='all'||item.group===currentJourney);
  visible.forEach(item => {
    const article = element('article', 'timeline-item');
    const content = element('div'); const meta = element('div', 'timeline-meta');
    meta.append(element('span', '', item.date), element('span', 'timeline-type', item.type[language]));
    const list = element('ul'); item.points[language].forEach(point => list.append(element('li', '', point)));
    content.append(meta, element('h3', '', item.title[language]), element('p', 'timeline-company', item.company),element('p','timeline-intro',item.intro[language]), list,tags(item.tags));
    if(item.project)content.append(projectButton(item.project,`${copy[language].details} ↗`,'timeline-project'));
    article.append(element('span', 'timeline-dot'), content); timeline.append(article);
  });
  $('#journey-status').textContent=copy[language].journeyShown(visible.length);
}
function renderSkills() {
  const groups = $('#skill-groups'); groups.replaceChildren();
  skills.forEach(group => {
    const section = element('div', 'skill-group'); const chips = element('div', 'skill-chips');
    group.items.forEach(item => chips.append(element('span', '', item)));
    section.append(element('h3', '', group.label[language]), chips); groups.append(section);
  });
  $('#coursework').replaceChildren();
  coursework.forEach(group=>{
    const row=element('div','coursework-row');row.append(element('span','',group.title[language]),element('p','',group.items[language].join(' / ')));$('#coursework').append(row);
  });
  const learning=$('#learning-groups');learning.replaceChildren();
  learningGroups.forEach(group=>{
    const card=element('article','learning-card');const number=element('div','learning-symbol',group.symbol);number.setAttribute('aria-hidden','true');
    const details=element('details','learning-details');const summary=element('summary','',copy[language].certificateMore(group.indices.length));details.append(summary);
    group.indices.forEach(index=>{const credential=credentials[index];const node=element('div','credential');node.append(element('h4','',credential.name),element('p','',[credential.issuer,credential.date].filter(Boolean).join(' · ')));details.append(node);});
    card.append(number,element('h3','',group.title[language]),element('p','',group.intro[language]),element('div','learning-highlight',credentials[group.indices[0]].name),details);learning.append(card);
  });
  const personal=$('#personal-grid');personal.replaceChildren();
  personalInterests.forEach(item=>{
    const card=element('article',`personal-card personal-${item.id}`);
    const art=element('div','personal-art',item.id==='creative'?'⌁':item.id==='markets'?'↗':'◎');art.setAttribute('aria-hidden','true');
    card.append(art,element('span','mono personal-number',item.number),element('h3','',item.title[language]),element('div','personal-subtitle',item.subtitle[language]),element('p','',item.body[language]));personal.append(card);
  });
}
function setLanguage() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  $$('[data-i18n]').forEach(node => titleText(node, copy[language][node.dataset.i18n]));
  $('#language-toggle').textContent = language === 'en' ? '中文' : 'EN';
  $('#language-toggle').setAttribute('aria-label', language === 'en' ? '切换到中文' : 'Switch to English');
  $('#close-dialog').setAttribute('aria-label', copy[language].close);
  document.title = language === 'en' ? 'Ruixi Feng — Quant × Technology × Business' : 'Ruixi Feng — 量化 × 技术 × 商业分析';
  renderEvidence();renderFocus(); renderProjects(); renderExperience(); renderSkills(); renderDialog(); syncMotionButton(); syncMenuLabel();
}
$('#language-toggle').addEventListener('click', () => { language = language === 'en' ? 'zh' : 'en'; persist('rf-language',language); setLanguage(); });
$$('[data-filter]').forEach(button => button.addEventListener('click', () => {
  setProjectFilter(button.dataset.filter);
}));
$$('[data-journey]').forEach(button=>button.addEventListener('click',()=>{currentJourney=button.dataset.journey;$$('[data-journey]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));renderExperience();updateProgress();}));
$$('[data-lens]').forEach(button=>button.addEventListener('click',()=>{selectLens(button.dataset.lens);$('#focus-grid').scrollIntoView({behavior:motionEnabled?'smooth':'auto',block:'start'});$(`#lens-tab-${currentLens}`).focus({preventScroll:true});}));
function updateProgress(){const range=document.documentElement.scrollHeight-window.innerHeight;$('#reading-progress').style.transform=`scaleX(${range>0?window.scrollY/range:0})`;}
window.addEventListener('scroll',updateProgress,{passive:true});window.addEventListener('resize',updateProgress);
document.addEventListener('toggle',updateProgress,true);
$('#year').textContent = new Date().getFullYear();
const dialog = $('#project-dialog');
$('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
dialog.addEventListener('close', () => { document.body.style.overflow = ''; lastProjectButton?.focus(); activeProject = null; });

function syncMenuLabel() { $('#menu-toggle').setAttribute('aria-label', copy[language][$('#menu-toggle').getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen']); }
function closeMenu() { $('#navigation').classList.remove('is-open'); $('#menu-toggle').setAttribute('aria-expanded','false'); syncMenuLabel(); }
$('#menu-toggle').addEventListener('click', () => { const open = $('#navigation').classList.toggle('is-open'); $('#menu-toggle').setAttribute('aria-expanded', String(open)); syncMenuLabel(); });
$$('#navigation a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && $('#navigation').classList.contains('is-open')) { closeMenu(); $('#menu-toggle').focus(); } });
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) $$('#navigation a').forEach(a => a.classList.toggle('active', a.hash === `#${entry.target.id}`)); });
}, { rootMargin:'-15% 0px -65% 0px' });
$$('main section[id]').forEach(section => sectionObserver.observe(section));

// A mathematical wireframe illustration. No live market feeds or financial claims.
const canvas = $('#signal-canvas');
const context = canvas.getContext('2d');
const visual = $('.signal-visual');
let width = 500, height = 510, frame = null, phase = 0, previous = 0, inView = true;
let pointer = {x:0,y:0};
function resizeCanvas() {
  width = visual.clientWidth; height = visual.clientHeight;
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = width * ratio; canvas.height = height * ratio;
  context?.setTransform(ratio,0,0,ratio,0,0); drawSignal();
}
function project(x,y,z) {
  const angle = phase * .15 + pointer.x * .12;
  const xr = x * Math.cos(angle) + z * Math.sin(angle);
  const zr = -x * Math.sin(angle) + z * Math.cos(angle);
  const tilt = -.25 + pointer.y * .12;
  const yr = y * Math.cos(tilt) - zr * Math.sin(tilt);
  const depth = y * Math.sin(tilt) + zr * Math.cos(tilt);
  const size = Math.min(width * .34, height * .34);
  const perspective = 3.8 / (3.8 - depth);
  return {x:width*.5+xr*size*perspective,y:height*.5+yr*size*perspective,z:depth};
}
function sphere(lat,lon) { return project(Math.cos(lat)*Math.cos(lon),Math.sin(lat),Math.cos(lat)*Math.sin(lon)); }
function line(points, alpha, color='85,153,255', size=.6) {
  context.beginPath(); points.forEach((p,i) => i ? context.lineTo(p.x,p.y) : context.moveTo(p.x,p.y));
  context.strokeStyle = `rgba(${color},${alpha})`; context.lineWidth = size; context.stroke();
}
function drawSignal() {
  if (!context) return;
  context.clearRect(0,0,width,height);
  const glow = context.createRadialGradient(width/2,height/2,10,width/2,height/2,width*.44);
  glow.addColorStop(0,'rgba(34,102,205,.14)'); glow.addColorStop(1,'rgba(34,102,205,0)');
  context.fillStyle = glow; context.fillRect(0,0,width,height);
  for (let lat=-5;lat<=5;lat++) {
    const points=[]; for(let s=0;s<=80;s++) points.push(sphere(lat*Math.PI/12,s*Math.PI/40));
    line(points,.21);
  }
  for(let lon=0;lon<20;lon++) {
    const points=[]; for(let s=0;s<=45;s++) points.push(sphere(-Math.PI/2+s*Math.PI/45,lon*Math.PI/10));
    line(points,.23);
  }
  for(let ring=0;ring<2;ring++) {
    const points=[];
    for(let s=0;s<=120;s++) { const a=s*Math.PI/60; const x=1.34*Math.cos(a), y=.26*Math.sin(a), z=1.34*Math.sin(a); points.push(project(x,y*Math.cos(ring*1.4)-z*Math.sin(ring*1.4),y*Math.sin(ring*1.4)+z*Math.cos(ring*1.4))); }
    line(points,ring===0?.4:.2,ring===0?'92,187,245':'90,126,225',.8);
  }
  const nodes=[];
  for(let i=0;i<65;i++) { const lat=Math.asin(-1+2*i/64); const lon=i*2.39996; nodes.push(sphere(lat,lon)); }
  nodes.sort((a,b)=>a.z-b.z);
  nodes.forEach((p,i)=> {
    const front=(p.z+1)/2; context.beginPath();context.arc(p.x,p.y,.8+front*1.4,0,Math.PI*2);
    context.fillStyle=`rgba(115,204,255,${.16+front*.7})`;context.fill();
    if(i%14===0) {context.beginPath();context.arc(p.x,p.y,4.5+front*3,0,Math.PI*2);context.strokeStyle=`rgba(100,185,255,${front*.25})`;context.stroke();}
  });
  for(let i=0;i<4;i++) {
    const a=phase*.3+i*Math.PI/2; const p=project(1.34*Math.cos(a),.26*Math.sin(a),1.34*Math.sin(a));
    context.shadowBlur=12;context.shadowColor='#63dcf2';context.fillStyle='#91edff';context.beginPath();context.arc(p.x,p.y,2.4,0,Math.PI*2);context.fill();context.shadowBlur=0;
  }
}
function animate(time) {
  frame = null;
  if(!motionEnabled || document.hidden || !inView) return;
  if(time-previous>30) { phase+=.015;drawSignal();previous=time; }
  frame=requestAnimationFrame(animate);
}
function syncAnimation() {
  if(frame!==null) {cancelAnimationFrame(frame);frame=null;}
  if(motionEnabled && !document.hidden && inView) frame=requestAnimationFrame(animate);
  else drawSignal();
}
function syncMotionButton() {
  const button=$('#motion-toggle');button.setAttribute('aria-pressed',String(motionEnabled));
  button.title=copy[language][motionEnabled?'pause':'play'];
  $('.pause-icon',button).textContent=motionEnabled?'Ⅱ':'▷';
  document.documentElement.classList.toggle('motion-paused',!motionEnabled);
}
$('#motion-toggle').addEventListener('click',()=>{motionEnabled=!motionEnabled;persist('rf-motion',motionEnabled?'on':'off');syncMotionButton();syncAnimation();});
reducedMotion.addEventListener('change',event=>{if(saved('rf-motion')===null){motionEnabled=!event.matches;syncMotionButton();syncAnimation();}});
visual.addEventListener('pointermove',event=>{if(!motionEnabled)return;const r=visual.getBoundingClientRect();pointer={x:(event.clientX-r.left)/r.width-.5,y:(event.clientY-r.top)/r.height-.5};});
visual.addEventListener('pointerleave',()=>{pointer={x:0,y:0};});
document.addEventListener('visibilitychange',syncAnimation);
new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;syncAnimation();},{threshold:0}).observe(visual);
new ResizeObserver(resizeCanvas).observe(visual);
setLanguage(); resizeCanvas(); syncAnimation();updateProgress();
