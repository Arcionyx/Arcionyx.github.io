// Content sources: the owner's LinkedIn public profile and supplied resume.
// Dates and outcomes are self-reported. See docs/content-sources.md.
export const copy = {
  en: {
    skip: 'Skip to content', navAbout: 'About', navWork: 'Selected work', navExperience: 'Experience', navContact: 'Contact',
    eyebrow: 'QUANT × TECHNOLOGY × BUSINESS', motion: 'Toggle animation',
    heroStatement: 'Find the signal.\nBuild what matters.',
    heroDescription: 'Connecting quantitative thinking, technical systems, and business insight. A BAIT student at Rutgers Business School, exploring the space where data becomes decisions.',
    explore: 'Explore my work', location: 'New Brunswick, NJ', visualCaption: 'PATTERNS → SYSTEMS → INSIGHT',
    heroBottom: 'CURIOUS BY NATURE. ANALYTICAL BY DESIGN.', scroll: 'SCROLL TO EXPLORE',
    aboutNote: 'A MULTIDISCIPLINARY PERSPECTIVE', aboutTitle: 'At the intersection\nof three worlds.',
    aboutLead: 'I’m Ruixi, a Business Analytics and Information Technology student at Rutgers Business School.',
    aboutBody: 'My interests span financial markets, data-driven strategy, and the systems that connect them. Through quantitative research simulations, business analysis, and e-commerce operations, I’m learning to turn complex questions into practical, structured solutions.',
    degree: 'B.S. Business Analytics & Information Technology', graduation: 'EXPECTED MAY 2029 · GPA 3.51 / 4.00',
    projectsNote: 'FROM QUESTION TO APPROACH', projectsTitle: 'Ideas, put to work.', all: 'All work', details: 'Explore project',
    experienceNote: 'LEARNING THROUGH DOING', experienceTitle: 'Built through\nexperience.',
    experienceIntro: 'From operational details to strategic questions, each experience adds a different lens.', fullProfile: 'Full profile on LinkedIn',
    toolkitNote: 'ALWAYS A WORK IN PROGRESS', toolkitTitle: 'A growing\ntoolkit.', credentialsTitle: 'Selected credentials',
    moreCredentials: 'More credentials & learning', viewCredentials: 'View credentials on LinkedIn ↗',
    beyondLabel: 'BEYOND THE SCREEN', beyondBody: 'Piano. Photography. Architecture. Table tennis.\nDifferent ways of seeing patterns — and the world.',
    contactTitle: 'The next idea\nstarts with hello.', footer: 'THINK IN DATA. BUILD WITH PURPOSE.',
    approach: 'Approach & contribution', context: 'Context', tools: 'Toolkit', source: 'Professional background on LinkedIn ↗',
    pause: 'Pause animation', play: 'Play animation', menuOpen: 'Open menu', menuClose: 'Close menu', close: 'Close project details', shown: n => `${n} projects shown`,
  },
  zh: {
    skip: '跳到主要内容', navAbout: '关于我', navWork: '精选项目', navExperience: '个人经历', navContact: '联系',
    eyebrow: '量化思维 × 信息技术 × 商业分析', motion: '切换动态效果',
    heroStatement: '从数据中寻找信号。\n用技术构建价值。',
    heroDescription: '连接量化思维、技术系统与商业洞察。我在 Rutgers Business School 学习商业分析与信息技术，探索从数据走向决策的更多可能。',
    explore: '探索我的项目', location: '美国 · 新泽西州', visualCaption: '发现规律 → 构建系统 → 提炼洞察',
    heroBottom: '以好奇心出发，以分析力前行。', scroll: '向下探索',
    aboutNote: '跨领域的思考视角', aboutTitle: '在三个领域之间，\n找到连接。',
    aboutLead: '我是 Ruixi，目前在 Rutgers Business School 攻读商业分析与信息技术理学学士。',
    aboutBody: '我的兴趣连接金融市场、数据驱动的战略与技术系统。通过量化研究模拟、商业分析和电商运营实践，我持续学习如何把复杂问题拆解为清晰、可执行的解决方案。',
    degree: '理学学士 · 商业分析与信息技术', graduation: '预计 2029 年 5 月毕业 · GPA 3.51 / 4.00',
    projectsNote: '从问题出发，向解法前进', projectsTitle: '让想法，落到实处。', all: '全部项目', details: '查看项目',
    experienceNote: '在实践中不断迭代', experienceTitle: '每一段经历，\n都在构建下一步。',
    experienceIntro: '从运营细节到战略问题，不同的经历带来不同的观察视角。', fullProfile: '在 LinkedIn 查看完整经历',
    toolkitNote: '持续学习，持续构建', toolkitTitle: '持续扩展的\n能力工具箱。', credentialsTitle: '精选证书与学习经历',
    moreCredentials: '更多证书与学习经历', viewCredentials: '在 LinkedIn 查看证书 ↗',
    beyondLabel: '屏幕之外', beyondBody: '钢琴、摄影、建筑与乒乓球。\n用不同的方式，观察规律与世界。',
    contactTitle: '下一个想法，\n从一次交流开始。', footer: '以数据思考，为价值而构建。',
    approach: '方法与贡献', context: '项目背景', tools: '技术与工具', source: '在 LinkedIn 查看个人背景 ↗',
    pause: '暂停动态效果', play: '播放动态效果', menuOpen: '打开导航菜单', menuClose: '关闭导航菜单', close: '关闭项目详情', shown: n => `已显示 ${n} 个项目`,
  },
};

export const focus = [
  { symbol: '∑', title: {en:'Quantitative thinking',zh:'量化思维'}, body:{en:'Exploring time-series patterns, credit risk, and financial markets through structured models.',zh:'通过结构化模型，探索时间序列、信用风险与金融市场中的规律。'},tags:['Time series','Credit risk','Python'] },
  { symbol: '</>', title: {en:'Technical building',zh:'技术构建'}, body:{en:'Working with code, data workflows, and automation to connect analysis with practical operations.',zh:'使用代码、数据工作流与自动化，把分析方法连接到实际运营。'},tags:['Python','SQL','JavaScript'] },
  { symbol: '↗', title: {en:'Business insight',zh:'商业洞察'}, body:{en:'Framing business questions, defining useful KPIs, and translating findings into decisions.',zh:'界定商业问题，设计有意义的 KPI，让分析结果支持决策。'},tags:['Strategy','Excel','Operations'] },
];

export { projects, experience } from './profile.js?v=4';

export const skills = [
  {label:{en:'PROGRAMMING & ANALYTICS',zh:'编程与分析'},items:['Python','SQL','Excel','JavaScript']},
  {label:{en:'DESIGN & COMMUNICATION',zh:'设计与表达'},items:['PowerPoint','Figma','Photoshop','Illustrator','AutoCAD']},
  {label:{en:'LANGUAGES',zh:'语言'},items:['English','Mandarin','Cantonese']},
];

export const credentials = [
  {name:'Quantitative Research Job Simulation',issuer:'J.P. Morgan / Forage',date:'DEC 2025'},
  {name:'Business Analysis & Process Management',issuer:'Coursera',date:'DEC 2025'},
  {name:'Artificial Intelligence and the Rule of Law',issuer:'UNESCO',date:'DEC 2025'},
  {name:'Lean Six Sigma White Belt',issuer:'Management & Strategy Institute',date:'DEC 2025'},
  {name:'Project Management Essentials',issuer:'Management & Strategy Institute',date:'DEC 2025'},
  {name:'Business Analysis Basics',issuer:'Simplilearn',date:'DEC 2025'},
  {name:'Digital Marketing for CXOs',issuer:'Simplilearn',date:'OCT 2025'},
  {name:'AutoCAD 3D Professional Certification',issuer:'ITRONIX SOLUTIONS',date:'JAN 2024'},
  {name:'Six Sigma Rising Star Award',issuer:'Management & Strategy Institute',date:'DEC 2025'},
  {name:'How to Get More Customers with Your Small Business Website',issuer:'Semrush · Wes McDowell',date:'OCT 2025'},
  {name:'INSIDE LVMH Certificate — Operations & Supply Chain',issuer:'LVMH',date:''},
  {name:'AI and Digital Transformation in Government',issuer:'Oxford Saïd Business School',date:''},
];
