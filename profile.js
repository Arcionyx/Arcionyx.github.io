// Editorial expansion of the owner's resume and public LinkedIn profile.
// Project modules are not additional employment or independently verified returns.
export const extendedCopy = {
  en: {
    navAbout:'Profile', navWork:'Work', navExperience:'Journey', navLearning:'Learning',
    heroStatement:'Quantitative thinking.\nTechnical execution.\nBusiness perspective.',
    heroDescription:'I’m a Rutgers Business School BAIT student connecting financial questions, working code, and business decisions. My work spans risk modeling simulations, e-commerce analytics, automation, and strategy.',
    heroBottom:'RESEARCH THE QUESTION. BUILD THE CONNECTION.',
    aboutTitle:'More than one lens.\nOne connected approach.',
    aboutLead:'I’m interested in what happens between a model, a system, and the decision someone needs to make.',
    aboutBody:'At Rutgers Business School, I study Business Analytics and Information Technology. My experience brings together e-commerce operations in Ningbo, a Disney strategy study, and quantitative research simulations covering energy prices and credit risk.',
    aboutSecond:'The common thread is translation: from messy information to a model, from a model to a workflow, and from analysis to a clear business recommendation. My interests in equity research, financial markets, and entrepreneurship give that work direction.',
    profileLabel:'THE THROUGH-LINE', profileStatement:'Analyze with rigor. Build with intent. Communicate with context.',
    lensLabel:'EXPLORE A PERSPECTIVE', lensProject:'See the related work',
    projectsTitle:'The work behind\nthe interests.', projectsNote:'FIVE EXPLORATIONS / THREE CONNECTED DOMAINS',
    projectsIntro:'Two applied business projects and three learning modules from the J.P. Morgan / Forage Quantitative Research Job Simulation. Open a case study to explore the question, method, and contribution.',
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
    navAbout:'个人特点',navWork:'项目案例',navExperience:'成长经历',navLearning:'教育与学习',
    heroStatement:'以量化思维分析。\n以技术能力构建。\n以商业视角连接。',
    heroDescription:'我是 Rutgers Business School 商业分析与信息技术专业的学生，关注金融问题、代码实现和商业决策之间的连接。我的实践涵盖风险建模模拟、电商数据分析、自动化与战略研究。',
    heroBottom:'研究问题，构建连接，让分析走向决策。',
    aboutTitle:'不止一种视角，\n而是一种连接能力。',
    aboutLead:'我关注的不只是模型本身，还有它怎样进入系统，又怎样帮助一个真实的商业决策。',
    aboutBody:'我在 Rutgers Business School 学习商业分析与信息技术。我的经历连接了宁波的电商运营实践、Disney 战略研究，以及能源价格和信用风险相关的量化研究模拟。',
    aboutSecond:'这些经历的共同线索是“转化”：把零散信息转化成模型，把模型连接到工作流，再把分析表达成清晰的商业建议。股票研究、金融市场与创业，是我持续关注的方向。',
    profileLabel:'贯穿不同经历的主线',profileStatement:'分析时重视依据，构建时关注用途，表达时保留背景。',
    lensLabel:'切换视角，了解我的特点',lensProject:'查看相关项目',
    projectsTitle:'让兴趣，\n有具体的实践支撑。',projectsNote:'五个案例方向 / 三个相互连接的领域',
    projectsIntro:'两个应用型商业项目，以及 J.P. Morgan / Forage 量化研究职业模拟中的三个学习模块。打开案例，了解具体的问题、方法和个人贡献。',
    details:'阅读完整案例',question:'面对的问题',approach:'我的工作与方法',takeaway:'这段实践的价值',scope:'项目背景',
    experienceTitle:'经历的积累，\n构成观察问题的方式。',experienceIntro:'职业实践、量化学习与社群参与，在不同层面塑造我的分析、执行与协作方式。',
    journeyAll:'全部经历',journeyWork:'职业实践',journeyLearning:'职业模拟',journeyCommunity:'社群与志愿',journeyShown:n=>`已显示 ${n} 段经历`,
    toolkitTitle:'让能力，\n拥有持续生长的基础。',toolkitNote:'教育背景 / 技术工具 / 持续学习',
    educationTitle:'Rutgers Business School',educationEyebrow:'教育与知识基础',courseworkTitle:'连接不同领域的课程基础',
    learningTitle:'学习，跨越领域边界。',learningIntro:'围绕商业方法、运营、人工智能与设计，整理证书、课程和奖项。',
    beyondTitle:'模型之外，\n还有一个更完整的我。',beyondNote:'好奇心，不止发生在屏幕之内',
    contactTitle:'一个问题，一个项目，\n或一种新的视角。',contactIntro:'如果你也关注量化研究、商业分析、信息技术，或跨领域合作，欢迎与我交流。',
    metricNote:'案例范围 · 职业实践与学习模拟',certificateMore:n=>`展开 ${n} 项学习记录`,
    source:'在 LinkedIn 了解更多背景 ↗',visualCaption:'建立模型 → 构建系统 → 支持决策',
  },
};

export const evidence = [
  {value:'1,700+',label:{en:'product listings analyzed',zh:'分析的商品刊登'},context:{en:'E-commerce internship',zh:'电商运营实习'},project:'commerce-systems'},
  {value:'48',label:{en:'monthly price observations',zh:'月度价格观测'},context:{en:'Quant research simulation',zh:'量化研究模拟'},project:'gas-forecast'},
  {value:'10,000',label:{en:'borrower records modeled',zh:'借款人建模记录'},context:{en:'Quant research simulation',zh:'量化研究模拟'},project:'credit-risk'},
  {value:'3',label:{en:'capital-allocation options',zh:'资本配置方案'},context:{en:'Independent Disney study',zh:'Disney 独立战略研究'},project:'disney-strategy'},
];

export const perspectives = [
  {id:'quant',symbol:'∑',title:{en:'Quantitative curiosity',zh:'量化：用模型理解不确定性'},subtitle:{en:'PRICES / PROBABILITY / RISK',zh:'价格 / 概率 / 风险'},body:{en:'I explored how seasonal price patterns, default probabilities, and credit-score groupings can be represented with models. The J.P. Morgan / Forage simulation gave that interest a concrete starting point.',zh:'我探索如何通过模型理解价格季节性、违约概率和信用评分分组。J.P. Morgan / Forage 量化研究模拟，让这份兴趣有了具体的实践起点。'},proof:{en:'48 monthly observations · 10,000 borrower records · 10 FICO buckets',zh:'48 个月度观测 · 10,000 条借款人记录 · 10 个 FICO 风险分组'},tags:['Python','Time series','Credit risk'],project:'gas-forecast'},
  {id:'it',symbol:'</>',title:{en:'A builder’s approach',zh:'技术：让分析进入工作流'},subtitle:{en:'CODE / DATA / WORKFLOWS',zh:'代码 / 数据 / 工作流'},body:{en:'In e-commerce operations, I worked beyond the spreadsheet: prototyping dashboards, data-cleaning scripts, databases, and workflow automation with Python and JavaScript to address operational bottlenecks.',zh:'在电商运营实践中，我尝试从电子表格走向更完整的系统：使用 Python 和 JavaScript 制作看板、数据清洗脚本、数据库和工作流自动化原型，回应运营中的瓶颈。'},proof:{en:'Operational questions → analysis → working prototypes',zh:'从运营问题，到数据分析，再到工具原型'},tags:['Python','JavaScript','SQL','Automation'],project:'commerce-systems'},
  {id:'ba',symbol:'↗',title:{en:'A business decision lens',zh:'商业：让结果服务于决策'},subtitle:{en:'STRATEGY / KPIs / COMMUNICATION',zh:'战略 / KPI / 表达'},body:{en:'My Disney study connected 10-K research with capital allocation. I compared three options across Experiences, streaming, and linear TV, then organized the findings around decision KPIs and an executive-style presentation.',zh:'在 Disney 研究中，我把 10-K 财报分析与资本配置联系起来，比较体验业务、流媒体与线性电视的三个方案，再围绕决策 KPI 和管理层演示组织分析。'},proof:{en:'Three alternatives · 3–5 year horizon · a decision-oriented deck',zh:'三个方案 · 3–5 年视角 · 面向决策的演示材料'},tags:['Financial analysis','SQL','PowerPoint'],project:'disney-strategy'},
];

const simulationContext = {
  en:'A module of the J.P. Morgan Quantitative Research Job Simulation on Forage · December 2025. This was a learning simulation.',
  zh:'J.P. Morgan Quantitative Research Job Simulation（Forage）中的一个学习模块 · 2025 年 12 月。属于学习性质的职业模拟。',
};

export const projects = [
  {
    id:'commerce-systems',categories:['it','ba'],art:'system',label:'IT × BUSINESS ANALYTICS',number:'01',scope:{en:'INTERNSHIP PROJECT · MAY–JUL 2026',zh:'实习实践 · 2026 年 5–7 月'},
    title:{en:'E-commerce intelligence\n& workflow automation',zh:'电商数据洞察\n与工作流自动化'},
    summary:{en:'Connecting pricing, advertising, customer feedback, and competitor activity with operational reporting and technical prototypes.',zh:'把定价、广告、客户反馈与竞品信息，连接到运营报告和技术原型。'},
    metric:{en:'1,700+ product listings',zh:'1,700+ 条商品刊登'},tags:['Excel','Python','JavaScript'],
    context:{en:'Ningbo Jingte E-Business Co., Ltd. · E-commerce Operations and Data Analyst Intern · May–July 2026.',zh:'Ningbo Jingte E-Business Co., Ltd. · 电商运营与数据分析实习生 · 2026 年 5–7 月。'},
    question:{en:'How can product and market information support day-to-day pricing, marketing, and fulfillment decisions?',zh:'商品和市场信息，怎样帮助日常定价、营销与履约决策？'},
    points:{en:['Analyzed and optimized 1,700+ product listings in Excel, reviewing pricing, advertising performance, customer feedback, and competitor activity.','Produced weekly reports connecting product content, advertising optimization, competitive research, and new-product opportunities.','Identified fulfillment bottlenecks and prototyped dashboards, data-cleaning scripts, databases, and automated workflows using Python and JavaScript.'],zh:['使用 Excel 分析并优化 1,700 多条商品刊登，评估定价、广告表现、客户反馈与竞品活动。','制作周报，连接商品内容、广告优化、竞品研究与新品机会。','识别履约瓶颈，并使用 Python 和 JavaScript 制作看板、数据清洗脚本、数据库及自动化工作流原型。']},
    takeaway:{en:'This experience connects my three interests in one setting: understanding the data, building tools around it, and keeping business decisions in view.',zh:'这段经历把我的三个关注点连接在同一场景中：理解数据、围绕数据构建工具，并始终关注工具所服务的业务决策。'},
  },
  {
    id:'disney-strategy',categories:['ba'],art:'orbit',label:'BUSINESS × FINANCIAL ANALYSIS',number:'02',scope:{en:'INDEPENDENT STUDY · DEC 2025–MAR 2026',zh:'独立战略研究 · 2025 年 12 月–2026 年 3 月'},
    title:{en:'Disney: a capital-\nallocation decision',zh:'Disney：从财报\n走向资本配置决策'},
    summary:{en:'A 10-K-based strategy study comparing investment priorities across Experiences, streaming, and linear television.',zh:'基于 10-K 财报，比较体验业务、流媒体与线性电视之间的投入优先级。'},
    metric:{en:'3 options / 3–5 year horizon',zh:'3 项方案 / 3–5 年视角'},tags:['Financial analysis','SQL','PowerPoint'],
    context:{en:'An independent Disney strategy project during my McKinsey & Company Business Analytics internship · December 2025–March 2026. Refined through mentor feedback.',zh:'McKinsey & Company 商业分析实习期间完成的 Disney 独立战略项目 · 2025 年 12 月–2026 年 3 月，并通过导师反馈完善。'},
    question:{en:'How should three different business models be compared when allocating capital over a three-to-five-year horizon?',zh:'在 3–5 年的视角下，如何比较不同业务模式，并形成资本配置建议？'},
    points:{en:['Led the study from Disney’s 10-K analysis to capital-allocation recommendations.','Compared three options across Experiences, streaming, and linear TV, defining DTC margin, Experiences ROIC, and free-cash-flow growth as decision KPIs.','Developed SQL-supported recommendations and expanded a two-page report into an executive-style presentation, incorporating feedback from a project mentor.'],zh:['从 Disney 10-K 财报分析出发，完成资本配置建议。','围绕体验业务、流媒体与线性电视比较三个方案，并将 DTC 利润率、体验业务 ROIC 和自由现金流增长设为决策 KPI。','形成 SQL 支持的战略建议，把两页报告扩展为管理层风格的演示材料，并吸收项目导师的反馈。']},
    takeaway:{en:'The central task was to connect financial evidence, a choice of strategic paths, and the metrics used to judge those paths — then communicate the logic clearly.',zh:'核心任务是把财务证据、不同战略路径与评价路径的指标连接起来，并清晰表达决策逻辑。'},
  },
  {
    id:'gas-forecast',categories:['quant'],art:'signal',label:'QUANT / TIME SERIES',number:'03',scope:{en:'FORAGE SIMULATION · DEC 2025',zh:'FORAGE 职业模拟 · 2025 年 12 月'},
    title:{en:'Natural-gas price\nforecasting',zh:'天然气价格\n时间序列预测'},
    summary:{en:'Studying seasonality in monthly commodity prices and extending the price series one year forward with Python.',zh:'使用 Python 研究月度商品价格的季节性，并把价格序列向前预测一年。'},
    metric:{en:'48 monthly observations',zh:'48 个月度观测'},tags:['Python','Time series','Seasonality'],context:simulationContext,
    question:{en:'What seasonal structure can be found in monthly natural-gas prices, and how can it inform a forward estimate?',zh:'月度天然气价格中有哪些季节性结构，怎样利用它们形成未来价格估计？'},
    points:{en:['Worked with 48 monthly natural-gas price observations.','Built a Python time-series model to identify seasonality.','Extended the analysis to forecast prices one year forward.'],zh:['使用 48 个月度天然气价格观测。','构建 Python 时间序列模型，识别价格季节性。','将分析扩展为未来一年的价格预测。']},
    takeaway:{en:'A practical entry into representing a financial-market question as a time-series modeling problem.',zh:'把金融市场中的问题转化成时间序列建模问题，是这次模拟的主要学习方向。'},
  },
  {
    id:'credit-risk',categories:['quant'],art:'risk',label:'QUANT / CREDIT RISK',number:'04',scope:{en:'FORAGE SIMULATION · DEC 2025',zh:'FORAGE 职业模拟 · 2025 年 12 月'},
    title:{en:'Default probability\n& expected loan loss',zh:'违约概率\n与预期贷款损失'},
    summary:{en:'Moving from borrower records to a credit-risk model that estimates probability of default and expected loss.',zh:'从借款人记录出发，建立估算违约概率与预期损失的信用风险模型。'},
    metric:{en:'10,000 borrower records',zh:'10,000 条借款人记录'},tags:['Python','Probability of default','Expected loss'],context:simulationContext,
    question:{en:'How can borrower-level information be used to estimate the likelihood and financial impact of a default?',zh:'如何利用借款人层面的信息，估计违约可能性及其损失影响？'},
    points:{en:['Worked with a dataset of 10,000 borrower records.','Developed a credit-risk model to estimate probability of default.','Connected the default estimate with expected loan-loss estimation.'],zh:['使用包含 10,000 条借款人记录的数据集。','构建用于估算违约概率的信用风险模型。','将违约概率估计连接到预期贷款损失估算。']},
    takeaway:{en:'The connection between a statistical estimate and its lending-risk interpretation is what makes this module interesting to me.',zh:'这个模块吸引我的地方，在于统计估计与信贷风险含义之间的连接。'},
  },
  {
    id:'fico-segmentation',categories:['quant','it'],art:'buckets',label:'QUANT × OPTIMIZATION',number:'05',scope:{en:'FORAGE SIMULATION · DEC 2025',zh:'FORAGE 职业模拟 · 2025 年 12 月'},
    title:{en:'FICO scores,\nstructured into risk',zh:'FICO 评分\n与信用风险分层'},
    summary:{en:'Using dynamic programming and maximum-likelihood optimization to map credit scores into discrete risk buckets.',zh:'使用动态规划与最大似然优化，把信用评分映射为离散风险分组。'},
    metric:{en:'10 credit-risk buckets',zh:'10 个信用风险分组'},tags:['Dynamic programming','Optimization','Python'],context:simulationContext,
    question:{en:'How can a range of credit scores be organized into a fixed set of meaningful credit-risk buckets?',zh:'怎样把一个连续的信用评分范围，组织为固定数量的信用风险分组？'},
    points:{en:['Applied dynamic programming to a credit-score segmentation task.','Used maximum-likelihood optimization in the bucket-mapping approach.','Mapped FICO scores into 10 credit-risk buckets.'],zh:['将动态规划应用到信用评分分层任务。','在分组映射方法中使用最大似然优化。','把 FICO 评分映射至 10 个信用风险分组。']},
    takeaway:{en:'A point of connection between an optimization method, a software implementation, and a financial-risk use case.',zh:'这是优化方法、技术实现与金融风险应用场景之间的一个交汇点。'},
  },
];

export const experience = [
  {id:'jingte',group:'work',date:'MAY — JUL 2026',type:{en:'PROFESSIONAL PRACTICE',zh:'职业实践'},title:{en:'E-commerce Operations & Data Analyst Intern',zh:'电商运营与数据分析实习生'},company:'Ningbo Jingte E-Business Co., Ltd. · Ningbo, China',
    intro:{en:'A hands-on connection between product decisions, operational reporting, and technical prototypes.',zh:'在真实运营场景中，连接商品决策、业务报告与技术原型。'},
    points:{en:['Analyzed and optimized 1,700+ product listings through pricing, advertising, customer-feedback, and competitor analysis in Excel.','Produced weekly reports covering product content, competitive research, advertising optimization, and new-product opportunities.','Identified fulfillment bottlenecks, helped reduce processing delays, and prototyped dashboards, scripts, databases, and automation with Python and JavaScript.'],zh:['使用 Excel，从定价、广告、客户反馈和竞品角度，分析并优化 1,700 多条商品刊登。','制作覆盖商品内容、竞品研究、广告优化与新品机会的每周报告。','识别履约瓶颈并帮助减少处理延迟，使用 Python 和 JavaScript 制作看板、脚本、数据库和自动化原型。']},tags:['Excel','Python','JavaScript','Operations'],project:'commerce-systems'},
  {id:'mckinsey',group:'work',date:'DEC 2025 — MAR 2026',type:{en:'PROFESSIONAL PRACTICE',zh:'职业实践'},title:{en:'Business Analytics Intern',zh:'商业分析实习生'},company:'McKinsey & Company · Boston, MA',
    intro:{en:'An independent Disney strategy project, developed from financial research into a decision-oriented presentation.',zh:'围绕 Disney 完成独立战略项目，从财务研究走向面向决策的演示材料。'},
    points:{en:['Owned the study from 10-K research through capital-allocation recommendations.','Compared three strategic options across Experiences, streaming, and linear TV over a three-to-five-year horizon.','Defined decision KPIs, developed SQL-supported recommendations, and expanded a two-page report into an executive-style deck with project-mentor feedback.'],zh:['负责从 10-K 财报研究到资本配置建议的完整分析过程。','以 3–5 年为视角，比较体验业务、流媒体和线性电视的三个战略方案。','明确决策 KPI，形成 SQL 支持的建议，并结合项目导师反馈，把两页报告扩展为管理层风格的演示材料。']},tags:['Strategy','SQL','Financial analysis','PowerPoint'],project:'disney-strategy'},
  {id:'forage',group:'learning',date:'DEC 2025',type:{en:'VIRTUAL JOB SIMULATION',zh:'线上职业模拟'},title:{en:'Quantitative Research Job Simulation',zh:'量化研究职业模拟'},company:'J.P. Morgan · Forage',
    intro:{en:'Three connected learning modules: commodity prices, borrower risk, and credit-score segmentation.',zh:'三个相互连接的学习模块：商品价格、借款人风险与信用评分分组。'},
    points:{en:['Modeled seasonality using 48 monthly natural-gas price observations and forecast one year ahead.','Estimated default probability and expected loan loss using 10,000 borrower records.','Used dynamic programming and maximum-likelihood optimization to map FICO scores into 10 credit-risk buckets.'],zh:['使用 48 个月度天然气价格观测建模季节性，并预测未来一年。','利用 10,000 条借款人记录，估算违约概率与预期贷款损失。','通过动态规划与最大似然优化，将 FICO 评分映射为 10 个信用风险分组。']},tags:['Python','Time series','Credit risk','Optimization'],project:'gas-forecast'},
  {id:'table-tennis',group:'community',date:'SEP 2025 — MAY 2026',type:{en:'CAMPUS COMMUNITY',zh:'校园社群'},title:{en:'Table Tennis Club Member',zh:'大学乒乓球社团成员'},company:'Rutgers University Table Tennis Club',
    intro:{en:'Contributing to the small, practical details that make a campus community work.',zh:'通过具体、细小的组织与支持工作，参与校园社群。'},
    points:{en:['Helped organize weekly practices and match-day activities.','Set up tables, checked equipment, and recorded scores.','Supported new participants in learning basic serving and receiving techniques.'],zh:['协助组织每周训练与比赛日活动。','布置球台、检查器材并记录比分。','帮助新成员学习基础发球和接发球技巧。']},tags:['Coordination','Teamwork','Peer support']},
  {id:'wsnc',group:'community',date:'JUN — AUG 2024',type:{en:'ENVIRONMENTAL VOLUNTEERING',zh:'环境保护志愿经历'},title:{en:'WSNC International Volunteer',zh:'WSNC 国际志愿者'},company:'World Society for Natural Conservation',
    intro:{en:'A perspective on sustainability, communication, and responsibility beyond business metrics.',zh:'在商业指标之外，关注可持续发展、沟通与责任。'},
    points:{en:['Supported natural-conservation and environmental-awareness initiatives.','Contributed to educational and awareness-building activities around sustainability and the protection of natural resources.','Developed communication, independent thinking, and problem-solving through the volunteer experience.'],zh:['支持自然保护和环境意识宣传活动。','参与可持续发展与自然资源保护相关的教育、宣传活动。','通过志愿经历锻炼沟通、独立思考和问题解决能力。']},tags:['Sustainability','Communication','Problem-solving']},
];

export const coursework = [
  {title:{en:'Quantitative & technical',zh:'量化与技术基础'},items:{en:['Statistics','Programming'],zh:['统计学','编程']}},
  {title:{en:'Finance & economic context',zh:'财务与经济背景'},items:{en:['Financial Accounting','Microeconomics','Macroeconomics'],zh:['财务会计','微观经济学','宏观经济学']}},
  {title:{en:'Operational thinking',zh:'运营与流程思维'},items:{en:['Supply Chain Management'],zh:['供应链管理']}},
];

export const learningGroups = [
  {id:'data',symbol:'∑',title:{en:'Data & business methods',zh:'数据与商业方法'},intro:{en:'Quantitative research and the structure of business analysis.',zh:'从量化研究到商业分析方法。'},indices:[0,1,5]},
  {id:'operations',symbol:'↗',title:{en:'Operations & execution',zh:'运营与项目执行'},intro:{en:'Process improvement, supply chains, and project coordination.',zh:'关注流程改进、供应链与项目协作。'},indices:[10,3,4,8]},
  {id:'ai',symbol:'⌘',title:{en:'AI & responsible transformation',zh:'人工智能与负责任的转型'},intro:{en:'Learning about digital change, governance, and the role of AI.',zh:'理解数字化变革、治理与人工智能的角色。'},indices:[11,2]},
  {id:'design',symbol:'⌁',title:{en:'Design & digital reach',zh:'设计与数字传播'},intro:{en:'Spatial tools, marketing, and communicating on the web.',zh:'从空间工具到营销与网页表达。'},indices:[7,6,9]},
];

export const personalInterests = [
  {id:'markets',number:'01',title:{en:'Markets & new ventures',zh:'市场与新的商业可能'},subtitle:{en:'EQUITY RESEARCH / FINANCIAL MARKETS / ENTREPRENEURSHIP',zh:'股票研究 / 金融市场 / 创业'},body:{en:'Equity research, financial markets, and entrepreneurship are recurring interests. They connect my quantitative curiosity with questions about businesses, investment choices, and how ideas become something useful.',zh:'股票研究、金融市场和创业是我持续关注的方向。它们把量化兴趣与企业、投资选择，以及想法如何转化为实际价值的问题连接起来。'}},
  {id:'creative',number:'02',title:{en:'A creative lens',zh:'观察世界的另一种镜头'},subtitle:{en:'PIANO / PHOTOGRAPHY / ARCHITECTURE',zh:'钢琴 / 摄影 / 建筑'},body:{en:'Piano, photography, and architecture sit alongside my technical interests. They make room for rhythm, composition, detail, and different ways of paying attention to the world.',zh:'钢琴、摄影与建筑，是技术兴趣之外的另一部分自我。节奏、构图、细节，以及观察世界的不同方式，都让我保持好奇。'}},
  {id:'people',number:'03',title:{en:'People & shared spaces',zh:'与人协作，也参与身边的世界'},subtitle:{en:'CAMPUS / CONSERVATION / THREE LANGUAGES',zh:'校园社群 / 自然保护 / 三种语言'},body:{en:'From helping a new table-tennis player to supporting conservation awareness, I value practical participation. I speak English, Mandarin, and Cantonese, and enjoy bringing different perspectives into a conversation.',zh:'从帮助乒乓球新成员，到参与自然保护宣传，我重视具体的参与和支持。我使用英语、普通话与粤语，也愿意在交流中连接不同视角。'}},
];
