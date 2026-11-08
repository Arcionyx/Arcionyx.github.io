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
    skip: '跳转到正文', navAbout: '关于我', navWork: '精选项目', navExperience: '个人经历', navContact: '联系',
    eyebrow: '量化思维 × 信息技术 × 商业分析', motion: '切换动态效果',
    heroStatement: '用模型分析问题，\n用代码实现想法。',
    heroDescription: '我在 Rutgers Business School 就读商业分析与信息技术专业，关注金融市场、数据分析和工具开发。',
    explore: '查看我的项目', location: '美国 · 新泽西州', visualCaption: '数据分析 → 工具开发 → 业务建议',
    heroBottom: '研究感兴趣的问题，做能用得上的工具。', scroll: '继续浏览',
    aboutNote: '量化研究 / 技术开发 / 商业分析', aboutTitle: '关于我',
    aboutLead: '我是 Ruixi，目前在 Rutgers Business School 就读商业分析与信息技术本科。',
    aboutBody: '我对金融市场、商业分析和技术开发都有兴趣，也做过量化研究模拟和电商运营分析。实践中，我逐渐学会拆解问题、选择方法，并把结果整理成可供参考的建议。',
    degree: '理学学士 · 商业分析与信息技术', graduation: '预计 2029 年 5 月毕业 · GPA 3.51 / 4.00',
    projectsNote: '项目内容与分析方法', projectsTitle: '项目与研究', all: '全部项目', details: '查看项目',
    experienceNote: '实习、学习与校园生活', experienceTitle: '我的经历',
    experienceIntro: '这里记录了我的实习、项目学习和校园活动。', fullProfile: '在 LinkedIn 查看完整经历',
    toolkitNote: '专业基础与学习记录', toolkitTitle: '专业知识与常用工具', credentialsTitle: '证书与学习记录',
    moreCredentials: '更多学习记录', viewCredentials: '在 LinkedIn 查看证书 ↗',
    beyondLabel: '屏幕之外', beyondBody: '平时喜欢弹钢琴、拍照、看建筑，也会打乒乓球。',
    contactTitle: '欢迎交流', footer: '研究问题，也动手实践。',
    approach: '方法与贡献', context: '项目背景', tools: '技术与工具', source: '在 LinkedIn 查看个人背景 ↗',
    pause: '暂停动态效果', play: '播放动态效果', menuOpen: '打开导航菜单', menuClose: '关闭导航菜单', close: '关闭项目详情', shown: n => `已显示 ${n} 个项目`,
  },
};

export const focus = [
  { symbol: '∑', title: {en:'Quantitative thinking',zh:'量化思维'}, body:{en:'Exploring time-series patterns, credit risk, and financial markets through structured models.',zh:'研究时间序列和信用风险，学习用模型分析金融问题。'},tags:['Time series','Credit risk','Python'] },
  { symbol: '</>', title: {en:'Technical building',zh:'技术开发'}, body:{en:'Working with code, data workflows, and automation to connect analysis with practical operations.',zh:'编写代码、整理数据，尝试用自动化工具处理运营工作。'},tags:['Python','SQL','JavaScript'] },
  { symbol: '↗', title: {en:'Business insight',zh:'商业洞察'}, body:{en:'Framing business questions, defining useful KPIs, and translating findings into decisions.',zh:'明确业务问题，选择合适的 KPI，并说明分析结论。'},tags:['Strategy','Excel','Operations'] },
];

export { projects, experience } from './profile.js?v=12';

export const skills = [
  {label:{en:'PROGRAMMING & ANALYTICS',zh:'编程与分析'},items:['Python','SQL','Excel','JavaScript']},
  {label:{en:'DESIGN & COMMUNICATION',zh:'设计与沟通'},items:['PowerPoint','Figma','Photoshop','Illustrator','AutoCAD']},
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
