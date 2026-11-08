// Editorial expansion of the owner's resume and public LinkedIn profile.
// Project modules are not additional employment or independently verified returns.
export const extendedCopy = {
  en: {
    navAbout:'Profile', navWork:'Work', navExperience:'Journey', navLearning:'Learning',
    heroStatement:'I turn financial and business questions into models, tools, and clear recommendations.',
    heroDescription:'Studying Business Analytics and Information Technology at Rutgers Business School. Exploring energy pricing, credit risk, e-commerce systems, and business strategy.',
    heroBottom:'RESEARCH THE QUESTION. BUILD THE CONNECTION.',
    aboutTitle:'More than one lens.\nOne connected approach.',
    aboutLead:'I’m interested in what happens between a model, a system, and the decision someone needs to make.',
    aboutBody:'At Rutgers Business School, I study Business Analytics and Information Technology. My experience brings together e-commerce operations in Ningbo, a Disney strategy study, and quantitative research simulations covering energy prices and credit risk.',
    aboutSecond:'The common thread is translation: from messy information to a model, from a model to a workflow, and from analysis to a clear business recommendation. My interests in equity research, financial markets, and entrepreneurship give that work direction.',
    profileLabel:'THE THROUGH-LINE', profileStatement:'Analyze with rigor. Build with intent. Communicate with context.',
    lensLabel:'EXPLORE A PERSPECTIVE', lensProject:'See the related work',
    projectsTitle:'The work behind\nthe interests.', projectsNote:'APPLIED PRACTICE / QUANT RESEARCH SERIES',
    projectsIntro:'Two applied business projects and three case studies covering four tasks in the J.P. Morgan / Forage Quantitative Research Job Simulation. Open a case study to explore the question, method, and contribution.',
    details:'Read the case study', question:'The question', approach:'My work & approach', takeaway:'Why this work matters', scope:'Project context',
    experienceTitle:'The experiences\nthat shape my lens.', experienceIntro:'Professional practice, quantitative learning, and community participation — each contributes something different to the way I work.',
    journeyAll:'All experiences', journeyWork:'Professional', journeyLearning:'Simulation', journeyCommunity:'Community', journeyShown:n=>`${n} experiences shown`,
    toolkitTitle:'A foundation\nthat keeps expanding.',toolkitNote:'EDUCATION / TOOLS / CONTINUOUS LEARNING',
    educationTitle:'Rutgers Business School', educationEyebrow:'ACADEMIC FOUNDATION', courseworkTitle:'Coursework that connects the dots',
    learningTitle:'Learning across boundaries.', learningIntro:'A selection of certificates, courses, and an award across business methods, operations, AI, and design.',
    beyondTitle:'There is a person\nbehind the models.', beyondNote:'CURIOSITY DOESN’T STOP AT THE SCREEN',
    contactTitle:'A question. A project.\nA new perspective.', contactIntro:'Interested in quantitative research, analytics, technology, or a conversation across disciplines? Let’s connect.',
    metricNote:'PROJECT SCOPE · LEARNING & PROFESSIONAL CONTEXTS', certificateMore:n=>`Explore ${n} entries`,
    source:'More background on LinkedIn ↗', visualCaption:'MODEL → BUILD → DECIDE',
  },
  zh: {
    navAbout:'关于我',navWork:'项目案例',navExperience:'个人经历',navLearning:'教育与学习',
    heroStatement:'用模型和工具分析金融与商业问题，给出清楚、实用的建议。',
    heroDescription:'我在 Rutgers Business School 就读商业分析与信息技术专业，关注能源定价、信用风险、电商系统和商业战略。',
    heroBottom:'研究感兴趣的问题，做能用得上的工具。',
    aboutTitle:'我的专业与兴趣',
    aboutLead:'我对金融、技术和商业分析都有兴趣，希望写出的代码、建立的模型能帮助解决具体的业务问题。',
    aboutBody:'我在 Rutgers Business School 就读商业分析与信息技术专业。在宁波做过电商运营与数据分析，研究过 Disney 的业务和战略，也参加过能源定价、信用风险相关的量化研究模拟。',
    aboutSecond:'做项目时，我习惯先弄清楚业务问题，再选择分析方法和工具，最后把结论讲清楚。平时也持续关注股票研究、金融市场和创业。',
    profileLabel:'我做事的方法',profileStatement:'重视分析依据，也在意工具是否实用、结论是否容易理解。',
    lensLabel:'我的三个兴趣方向',lensProject:'查看相关项目',
    projectsTitle:'项目与研究',projectsNote:'商业实践 / 量化研究系列',
    projectsIntro:'这里收录了电商分析、Disney 战略研究，以及 J.P. Morgan / Forage 量化研究模拟中的四项任务。案例详情介绍了项目问题、分析方法和我的具体工作。',
    details:'阅读完整案例',question:'项目要解决的问题',approach:'我的工作与方法',takeaway:'我的收获',scope:'项目背景',
    experienceTitle:'我的经历',experienceIntro:'这里记录了我的实习、量化研究学习、校园活动和志愿经历。',
    journeyAll:'全部经历',journeyWork:'职业实践',journeyLearning:'职业模拟',journeyCommunity:'校园与志愿活动',journeyShown:n=>`已显示 ${n} 段经历`,
    toolkitTitle:'专业基础与学习记录',toolkitNote:'教育背景 / 技术工具 / 持续学习',
    educationTitle:'Rutgers Business School',educationEyebrow:'教育背景',courseworkTitle:'相关课程',
    learningTitle:'课程、证书与奖项',learningIntro:'课外也学习商业分析、运营管理、人工智能和设计。这里整理了相关课程、证书与奖项。',
    beyondTitle:'工作和学习之外',beyondNote:'平时的兴趣',
    contactTitle:'欢迎交流',contactIntro:'如果你也对量化研究、商业分析或技术开发感兴趣，欢迎联系我，聊聊项目、合作或新的想法。',
    metricNote:'项目概况 · 实习与学习模拟',certificateMore:n=>`展开 ${n} 项学习记录`,
    source:'在 LinkedIn 了解更多背景 ↗',visualCaption:'数据分析 → 工具开发 → 业务建议',
  },
};

export const evidence = [
  {value:'1,700+',label:{en:'product listings analyzed',zh:'分析的商品信息'},context:{en:'E-commerce internship',zh:'电商运营实习'},project:'commerce-systems'},
  {value:'48',label:{en:'monthly price observations',zh:'月度价格数据'},context:{en:'Quant research simulation',zh:'量化研究模拟'},project:'gas-forecast'},
  {value:'10,000',label:{en:'borrower records modeled',zh:'用于建模的借款人记录'},context:{en:'Quant research simulation',zh:'量化研究模拟'},project:'credit-risk'},
  {value:'3',label:{en:'capital-allocation options',zh:'资本配置方案'},context:{en:'Independent Disney study',zh:'Disney 独立战略研究'},project:'disney-strategy'},
];

export const perspectives = [
  {id:'quant',symbol:'∑',title:{en:'Quantitative curiosity',zh:'量化研究'},subtitle:{en:'PRICES / PROBABILITY / RISK',zh:'价格 / 概率 / 风险'},body:{en:'I explored how seasonal price patterns, default probabilities, and credit-score groupings can be represented with models. The J.P. Morgan / Forage simulation gave that interest a concrete starting point.',zh:'我对价格的季节性变化、违约风险和信用评分很感兴趣。在 J.P. Morgan / Forage 量化研究模拟中，我尝试用代码处理这些问题，学习相关的建模方法。'},proof:{en:'48 monthly observations · 10,000 borrower records · 10 FICO buckets',zh:'48 条月度价格 · 10,000 条借款人记录 · 10 个 FICO 分组'},tags:['Python','Time series','Credit risk'],project:'gas-forecast'},
  {id:'it',symbol:'</>',title:{en:'A builder’s approach',zh:'技术开发'},subtitle:{en:'CODE / DATA / WORKFLOWS',zh:'代码 / 数据 / 工作流'},body:{en:'In e-commerce operations, I worked beyond the spreadsheet: prototyping dashboards, data-cleaning scripts, databases, and workflow automation with Python and JavaScript to address operational bottlenecks.',zh:'电商实习中，我用 Python 和 JavaScript 制作过数据看板、清洗脚本、数据库和自动化工具原型，尝试处理日常运营中的数据整理和流程问题。'},proof:{en:'Operational questions → analysis → working prototypes',zh:'运营数据分析 · 数据清洗 · 工具原型'},tags:['Python','JavaScript','SQL','Automation'],project:'commerce-systems'},
  {id:'ba',symbol:'↗',title:{en:'A business decision lens',zh:'商业分析'},subtitle:{en:'STRATEGY / KPIs / COMMUNICATION',zh:'战略 / KPI / 表达'},body:{en:'In my Disney study, I compared three capital-allocation paths and recommended a balanced approach: use Experiences as the cash-generation base, invest selectively in streaming, and manage linear TV for cash recovery.',zh:'在 Disney 研究中，我比较了三种资本配置方案，建议以体验业务的现金流为基础，有选择地投资流媒体，同时侧重传统电视业务的现金回收。'},proof:{en:'Three paths · three proposed KPIs · a 24-page presentation PDF',zh:'三种方案 · 三个跟踪指标 · 24 页演示 PDF'},tags:['Business analysis','Financial research','PowerPoint'],project:'disney-strategy'},
];

const simulationContext = {
  en:'A module of the J.P. Morgan Quantitative Research Job Simulation on Forage · December 2025. This was a learning simulation.',
  zh:'J.P. Morgan 量化研究职业模拟（Forage）中的学习任务 · 2025 年 12 月。此项为线上学习项目。',
};

export const projects = [
  {
    id:'commerce-systems',categories:['it','ba'],art:'system',label:'IT × BUSINESS ANALYTICS',number:'01',scope:{en:'INTERNSHIP PROJECT · MAY–JUL 2026',zh:'实习实践 · 2026 年 5–7 月'},
    title:{en:'E-commerce intelligence\n& workflow automation',zh:'电商数据分析\n与流程自动化'},
    summary:{en:'Connecting pricing, advertising, customer feedback, and competitor activity with operational reporting and technical prototypes.',zh:'分析定价、广告、客户反馈和竞品信息，制作运营报告与数据工具原型。'},
    metric:{en:'1,700+ product listings',zh:'1,700+ 条商品信息'},tags:['Excel','Python','JavaScript'],
    context:{en:'Ningbo Jingte E-Business Co., Ltd. · E-commerce Operations and Data Analyst Intern · May–July 2026.',zh:'Ningbo Jingte E-Business Co., Ltd. · 电商运营与数据分析实习生 · 2026 年 5–7 月。'},
    question:{en:'How can product and market information support day-to-day pricing, marketing, and fulfillment decisions?',zh:'如何利用商品和市场数据，帮助团队判断定价、营销和履约工作的优先级？'},
    points:{en:['Analyzed and optimized 1,700+ product listings in Excel, reviewing pricing, advertising performance, customer feedback, and competitor activity.','Produced weekly reports connecting product content, advertising optimization, competitive research, and new-product opportunities.','Identified fulfillment bottlenecks and prototyped dashboards, data-cleaning scripts, databases, and automated workflows using Python and JavaScript.'],zh:['使用 Excel 分析并优化 1,700 多条商品信息，评估定价、广告表现、客户反馈和竞品情况。','制作商品内容、广告优化、竞品研究和新品机会的分析周报。','查找履约流程中的堵点，用 Python 和 JavaScript 制作数据看板、清洗脚本、数据库和自动化工具原型。']},
    takeaway:{en:'This experience connects my three interests in one setting: understanding the data, building tools around it, and keeping business decisions in view.',zh:'这段实习让我练习了运营数据分析和工具开发，也更清楚业务团队需要什么样的报告与工具。'},
  },
  {
    id:'disney-strategy',categories:['ba'],art:'orbit',label:'BUSINESS × STRATEGIC JUDGMENT',number:'02',scope:{en:'INDEPENDENT STUDY · DEC 2025–MAR 2026',zh:'独立战略研究 · 2025 年 12 月–2026 年 3 月'},
    title:{en:'Disney: capital allocation\n& strategic trade-offs',zh:'Disney 资本配置\n与战略分析'},
    summary:{en:'From business-model decomposition to three strategic paths, a personal recommendation, and a 24-page presentation PDF.',zh:'梳理业务模式，比较三种战略方案，形成个人建议，并整理为 24 页演示 PDF。'},
    metric:{en:'3 strategic paths / 24-page PDF',zh:'3 种战略方案 / 24 页演示 PDF'},tags:['Business analysis','Financial research','PowerPoint'],
    context:{en:'An independent Disney business and capital-allocation study during my McKinsey & Company Business Analytics internship · December 2025–March 2026. The presentation PDF is dated February 11, 2026.',zh:'McKinsey & Company 商业分析实习期间的 Disney 独立业务与资本配置研究 · 2025 年 12 月–2026 年 3 月。演示 PDF 日期为 2026 年 2 月 11 日。'},
    question:{en:'How can Disney balance cash generation, long-term positioning, and capital discipline over three to five years?',zh:'未来 3–5 年，Disney 如何兼顾现金流、长期竞争力和投资回报要求？'},
    points:{en:['Mapped the business model and compared three capital-allocation paths.','Recommended a balanced strategy and explained its trade-offs.','Selected three monitoring KPIs and organized the work into written analyses and a 24-page presentation PDF.'],zh:['梳理业务模式，比较三种资本配置方案。','提出均衡配置的建议，并说明理由和代价。','选择三个跟踪指标，完成分析稿和 24 页演示 PDF。']},
    takeaway:{en:'Turning company research into a personal strategic judgment with explicit trade-offs and monitoring criteria.',zh:'练习在公司研究的基础上提出自己的建议，说明理由、代价和后续需要跟踪的指标。'},
  },
  {
    id:'gas-forecast',categories:['quant','it'],art:'signal',label:'QUANT × CONTRACT PRICING',number:'03',scope:{en:'FORAGE TASKS 1–2 · DEC 2025',zh:'FORAGE TASK 1–2 · 2025 年 12 月'},
    title:{en:'Natural-gas prices\n& storage contracts',zh:'天然气价格估计\n与储气合约定价'},
    summary:{en:'Connecting trend and seasonal-price estimation with an inventory-aware contract cash-flow prototype.',zh:'估计价格趋势和季节变化，并编写包含库存检查的储气合约定价原型。'},
    metric:{en:'48 monthly observations',zh:'48 条月度价格数据'},tags:['Python','Time series','Contract valuation'],
    context:{en:'Personal submissions for Tasks 1–2 of the J.P. Morgan Quantitative Research Job Simulation on Forage · December 2025.',zh:'J.P. Morgan Quantitative Research Job Simulation（Forage）Task 1–2 的个人提交 · 2025 年 12 月。'},
    question:{en:'How can monthly prices inform a date-based gas-price estimate and a storage contract’s cash-flow value?',zh:'如何根据月度价格估算指定日期的天然气价格，并计算储气合约的净现金流？'},
    points:{en:['Implemented linear-trend and annual seasonal-parameter functions.','Built a date-to-price interface for interpolation and extrapolation.','Implemented an eight-input storage-contract prototype with inventory and cash-flow checks.'],zh:['实现线性趋势与年度季节参数估计函数。','编写按日期估价的接口，支持插值和外推。','实现八项输入的储气合约原型，包含库存检查与现金流计算。']},
    takeaway:{en:'A connected workflow from a market-price question to a financial-product prototype.',zh:'练习价格估计和合约现金流计算，并处理容量、库存等业务约束。'},
  },
  {
    id:'credit-risk',categories:['quant'],art:'risk',label:'QUANT / CREDIT RISK',number:'04',scope:{en:'FORAGE TASK 3 · DEC 2025',zh:'FORAGE TASK 3 · 2025 年 12 月'},
    title:{en:'Credit default modeling\n& risk features',zh:'违约分类模型\n与风险特征构造'},
    summary:{en:'A five-feature logistic-regression prototype built around debt/income ratios and borrower characteristics.',zh:'利用债务收入比等五个借款人特征，建立逻辑回归分类原型。'},
    metric:{en:'10,000 borrower records',zh:'10,000 条借款人记录'},tags:['Python','Logistic regression','Feature engineering'],context:simulationContext,
    question:{en:'How can borrower information become a structured credit-default classification model?',zh:'如何利用借款人信息建立违约分类模型？'},
    points:{en:['Constructed loan-balance/income and total-debt/income ratios.','Fitted a five-feature scikit-learn logistic-regression model.','Added in-sample classification error and ROC calculations.'],zh:['构造贷款余额／收入与总负债／收入两个比率。','拟合五特征 scikit-learn 逻辑回归模型。','加入样本内分类误差与 ROC 计算。']},
    takeaway:{en:'Connecting feature definitions, a reusable estimator, and the limits of model evaluation.',zh:'练习特征处理与逻辑回归建模，了解现有评估方法的局限。'},
  },
  {
    id:'fico-segmentation',categories:['quant','it'],art:'buckets',label:'QUANT × OPTIMIZATION',number:'05',scope:{en:'FORAGE TASK 4 · DEC 2025',zh:'FORAGE TASK 4 · 2025 年 12 月'},
    title:{en:'FICO scores,\nstructured into risk',zh:'FICO 评分\n与信用风险分层'},
    summary:{en:'A log-likelihood objective, dynamic-programming recurrence, and backtracking for ten score buckets.',zh:'以对数似然为目标，用动态规划和回溯求出十个评分分组。'},
    metric:{en:'10 credit-risk buckets',zh:'10 个信用风险分组'},tags:['Dynamic programming','Optimization','Python'],context:simulationContext,
    question:{en:'How can a ten-bucket rating structure be recovered from an explicit likelihood objective?',zh:'如何优化对数似然，确定十个信用评分分组的边界？'},
    points:{en:['Built cumulative sample/default counts for score intervals.','Implemented the log-likelihood objective and dynamic-programming table.','Backtracked split positions to recover bucket boundaries.'],zh:['构建评分区间的样本／违约累计计数。','实现对数似然目标和动态规划表。','回溯分割位置，恢复分组边界。']},
    takeaway:{en:'An explicit path from an optimization objective to an executable boundary-solving prototype.',zh:'把分组目标写成算法，实现评分分组边界的自动求解。'},
  },
];

export const experience = [
  {id:'jingte',group:'work',date:'MAY — JUL 2026',type:{en:'PROFESSIONAL PRACTICE',zh:'职业实践'},title:{en:'E-commerce Operations & Data Analyst Intern',zh:'电商运营与数据分析实习生'},company:'Ningbo Jingte E-Business Co., Ltd. · Ningbo, China',
    intro:{en:'A hands-on connection between product decisions, operational reporting, and technical prototypes.',zh:'参与电商运营分析、周报制作和数据工具原型开发。'},
    points:{en:['Analyzed and optimized 1,700+ product listings through pricing, advertising, customer-feedback, and competitor analysis in Excel.','Produced weekly reports covering product content, competitive research, advertising optimization, and new-product opportunities.','Identified fulfillment bottlenecks, helped reduce processing delays, and prototyped dashboards, scripts, databases, and automation with Python and JavaScript.'],zh:['使用 Excel 分析 1,700 多条商品信息，评估定价、广告、客户反馈和竞品情况，并优化商品信息。','制作商品内容、竞品研究、广告优化和新品机会的分析周报。','查找履约流程中的堵点，协助减少处理延迟，并用 Python 和 JavaScript 制作数据看板、脚本、数据库和自动化原型。']},tags:['Excel','Python','JavaScript','Operations'],project:'commerce-systems'},
  {id:'mckinsey',group:'work',date:'DEC 2025 — MAR 2026',type:{en:'PROFESSIONAL PRACTICE',zh:'职业实践'},title:{en:'Business Analytics Intern',zh:'商业分析实习生'},company:'McKinsey & Company · Boston, MA',
    intro:{en:'An independent Disney strategy project, developed from financial research into a decision-oriented presentation.',zh:'独立研究 Disney 的业务与资本配置，完成分析稿和战略建议演示材料。'},
    points:{en:['Mapped Disney’s business model and segment economics using company research and the FY2025 earnings disclosure.','Compared three allocation paths, recommended a balanced strategy, and selected DTC margin, Experiences ROIC, and free-cash-flow growth as monitoring KPIs.','Produced written analyses and a 24-page presentation PDF, with mentor feedback helping refine the work.'],zh:['根据公司资料和 FY2025 业绩披露，梳理 Disney 的业务模式及各业务板块的经营特点。','比较三种配置方案，建议采用均衡策略，并选择 DTC 利润率、Experiences ROIC 和自由现金流增长作为跟踪指标。','完成分析稿和 24 页演示 PDF，并根据导师反馈修改完善。']},tags:['Strategy','Business analysis','Financial research','PowerPoint'],project:'disney-strategy'},
  {id:'forage',group:'learning',date:'DEC 2025',type:{en:'VIRTUAL JOB SIMULATION',zh:'线上职业模拟'},title:{en:'Quantitative Research Job Simulation',zh:'量化研究职业模拟'},company:'J.P. Morgan · Forage',
    intro:{en:'Four learning tasks connected across gas-price estimation, storage-contract pricing, credit classification, and FICO segmentation.',zh:'完成天然气价格估计、储气合约定价、违约分类和 FICO 评分分组四项学习任务。'},
    points:{en:['Implemented trend/seasonality functions and a date-price interface using 48 monthly gas-price observations.','Built a storage-contract cash-flow prototype with inventory checks.','Constructed ratio features and fitted a logistic-regression default classifier on 10,000 records.','Used log-likelihood, dynamic programming, and backtracking to solve ten-bucket FICO boundaries.'],zh:['使用 48 条月度价格数据，编写趋势、季节项估计函数和按日期估价的接口。','构建包含库存检查的储气合约现金流原型。','基于 10,000 条记录构造比率特征，并拟合逻辑回归违约分类器。','使用对数似然、动态规划与回溯，求解十组 FICO 边界。']},tags:['Python','Time series','Credit risk','Optimization'],project:'gas-forecast'},
  {id:'table-tennis',group:'community',date:'SEP 2025 — MAY 2026',type:{en:'CAMPUS COMMUNITY',zh:'校园社群'},title:{en:'Table Tennis Club Member',zh:'大学乒乓球社团成员'},company:'Rutgers University Table Tennis Club',
    intro:{en:'Contributing to the small, practical details that make a campus community work.',zh:'协助训练和比赛的日常安排，也帮助新成员熟悉乒乓球运动。'},
    points:{en:['Helped organize weekly practices and match-day activities.','Set up tables, checked equipment, and recorded scores.','Supported new participants in learning basic serving and receiving techniques.'],zh:['协助组织每周训练与比赛日活动。','布置球台、检查器材并记录比分。','帮助新成员学习基础发球和接发球技巧。']},tags:['Coordination','Teamwork','Peer support']},
  {id:'wsnc',group:'community',date:'JUN — AUG 2024',type:{en:'ENVIRONMENTAL VOLUNTEERING',zh:'环境保护志愿经历'},title:{en:'WSNC International Volunteer',zh:'WSNC 国际志愿者'},company:'World Society for Natural Conservation',
    intro:{en:'A perspective on sustainability, communication, and responsibility beyond business metrics.',zh:'参与自然保护宣传和教育活动，了解可持续发展与自然资源保护。'},
    points:{en:['Supported natural-conservation and environmental-awareness initiatives.','Contributed to educational and awareness-building activities around sustainability and the protection of natural resources.','Developed communication, independent thinking, and problem-solving through the volunteer experience.'],zh:['支持自然保护和环境意识宣传活动。','参与可持续发展与自然资源保护相关的教育、宣传活动。','通过志愿经历锻炼沟通、独立思考和问题解决能力。']},tags:['Sustainability','Communication','Problem-solving']},
];

export const coursework = [
  {title:{en:'Quantitative & technical',zh:'量化与技术基础'},items:{en:['Statistics','Programming'],zh:['统计学','编程']}},
  {title:{en:'Finance & economic context',zh:'会计与经济学'},items:{en:['Financial Accounting','Microeconomics','Macroeconomics'],zh:['财务会计','微观经济学','宏观经济学']}},
  {title:{en:'Operational thinking',zh:'运营管理'},items:{en:['Supply Chain Management'],zh:['供应链管理']}},
];

export const learningGroups = [
  {id:'data',symbol:'∑',title:{en:'Data & business methods',zh:'数据与商业方法'},intro:{en:'Quantitative research and the structure of business analysis.',zh:'学习量化研究和商业分析的常用方法。'},indices:[0,1,5]},
  {id:'operations',symbol:'↗',title:{en:'Operations & execution',zh:'运营与项目执行'},intro:{en:'Process improvement, supply chains, and project coordination.',zh:'关注流程改进、供应链与项目协作。'},indices:[10,3,4,8]},
  {id:'ai',symbol:'⌘',title:{en:'AI & responsible transformation',zh:'人工智能与治理'},intro:{en:'Learning about digital change, governance, and the role of AI.',zh:'学习数字化转型、人工智能治理和相关法律问题。'},indices:[11,2]},
  {id:'design',symbol:'⌁',title:{en:'Design & digital reach',zh:'设计与数字传播'},intro:{en:'Spatial tools, marketing, and communicating on the web.',zh:'学习空间设计工具、数字营销和网站内容表达。'},indices:[7,6,9]},
];

export const personalInterests = [
  {id:'markets',number:'01',title:{en:'Markets & new ventures',zh:'金融市场与创业'},subtitle:{en:'EQUITY RESEARCH / FINANCIAL MARKETS / ENTREPRENEURSHIP',zh:'股票研究 / 金融市场 / 创业'},body:{en:'Equity research, financial markets, and entrepreneurship are recurring interests. They connect my quantitative curiosity with questions about businesses, investment choices, and how ideas become something useful.',zh:'我平时关注股票研究、金融市场和创业，喜欢了解企业如何经营、投资判断有哪些依据，以及一个想法怎样做成产品或业务。'}},
  {id:'creative',number:'02',title:{en:'A creative lens',zh:'钢琴、摄影与建筑'},subtitle:{en:'PIANO / PHOTOGRAPHY / ARCHITECTURE',zh:'钢琴 / 摄影 / 建筑'},body:{en:'Piano, photography, and architecture sit alongside my technical interests. They make room for rhythm, composition, detail, and different ways of paying attention to the world.',zh:'我喜欢钢琴、摄影和建筑，也喜欢琢磨节奏、构图和细节。'}},
  {id:'people',number:'03',title:{en:'People & shared spaces',zh:'校园活动与志愿服务'},subtitle:{en:'CAMPUS / CONSERVATION / THREE LANGUAGES',zh:'校园社群 / 自然保护 / 三种语言'},body:{en:'From helping a new table-tennis player to supporting conservation awareness, I value practical participation. I speak English, Mandarin, and Cantonese, and enjoy bringing different perspectives into a conversation.',zh:'我参加乒乓球社团，也做过自然保护志愿服务，愿意为身边的活动出一份力。我会英语、普通话和粤语，喜欢和不同背景的人交流。'}},
];
