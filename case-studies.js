// Publication records contain only supplied claims and explicitly released artifacts.
// Dataset sizes and deliverable counts are not treated as measured improvements.
export const caseStudyCopy = {
  en: {
    pain:'The problem', contribution:'My contribution', ownership:'Ownership boundary', method:'Method', results:'Results & validation', artifacts:'Verifiable evidence',
    details:'Contribution & evidence',
    projectsIntro:'Two applied business projects and three Forage simulation modules, organized around the problem, my contribution, method, results, and evidence. Project scope is labeled separately from measured impact.',
    reportedScope:'Reported project scope', deliverables:'Reported deliverables', validation:'Measured performance',
    roleLabel:'MY CONTRIBUTION', scopeLabel:'REPORTED SCOPE', evidenceStatus:'Evidence not released publicly', evidenceReady:'Public artifacts available',
    evidenceIntro:'Project attachments and evidence links are not being released publicly at this stage. The project description and reported scope remain available here.',
    background:'Background on LinkedIn ↗', previewNote:'The cover illustration is conceptual. It is not a screenshot of the dataset or model output.',
    code:'Code / notebook', data:'Data sample', report:'Report / results', demo:'Demo / walkthrough', reproduction:'Simplified reproduction',
    unpublished:'Not published', withheld:'No public link', available:'Open artifact ↗', unavailable:'Not available',
    confidentiality:'The original data is confidential.', reproductionPending:'A simplified reproduction is not published yet.',
  },
  zh: {
    pain:'痛点',contribution:'我的贡献',ownership:'分工边界',method:'方法',results:'结果与验证',artifacts:'可验证证据',
    details:'查看贡献与证据',
    projectsIntro:'两个应用型商业项目，以及 Forage 职业模拟中的三个模块，按痛点、我的贡献、方法、结果与证据展开。项目规模与实际效果分开标注。',
    reportedScope:'已报告的项目范围',deliverables:'已报告的交付内容',validation:'效果验证',
    roleLabel:'我的贡献',scopeLabel:'项目范围',evidenceStatus:'证据暂不公开',evidenceReady:'可查看公开证据',
    evidenceIntro:'现阶段暂不公开项目附件与证据链接。此处保留项目描述及已报告的工作范围。',
    background:'在 LinkedIn 查看个人背景 ↗',previewNote:'封面为概念图示，并非原始数据截图或模型运行结果。',
    code:'代码 / Notebook',data:'数据样例',report:'报告 / 结果记录',demo:'演示 / 讲解',reproduction:'简化复现版本',
    unpublished:'尚未公开',withheld:'暂不提供公开链接',available:'查看证据 ↗',unavailable:'暂无材料',
    confidentiality:'原始数据因保密未公开。',reproductionPending:'简化复现版本尚未发布。',
  },
};

const withheldArtifacts=()=>['code','data','report','demo'].map(kind=>({kind,status:'withheld'}));

export const caseStudies = {
  'commerce-systems':{
    pain:{en:'Pricing, advertising, product content, and fulfillment decisions had to be considered together across more than 1,700 listings. The operational task was to identify where attention was needed and turn analysis into recurring reports and workflow prototypes.',zh:'运营需要同时判断 1,700 多条商品刊登的定价、广告、商品内容和履约优先级。实际任务是找到值得优先处理的问题，并把分析转化为持续使用的报告与工作流原型。'},
    roleSummary:{en:'Analyzed product and market information in Excel, prepared weekly reporting, and prototyped data tools with Python and JavaScript.',zh:'使用 Excel 分析商品与市场信息，制作周报，并用 Python、JavaScript 制作数据工具原型。'},
    contributions:{en:['Assessed pricing, advertising performance, customer feedback, and competitor activity across 1,700+ product listings.','Produced weekly performance reports on product content, advertising optimization, competitor research, and new-product opportunities.','Identified fulfillment bottlenecks and prototyped dashboards, data-cleaning scripts, databases, and workflow automation with Python and JavaScript.'],zh:['评估 1,700 多条商品刊登的定价、广告表现、客户反馈与竞品活动。','制作商品内容、广告优化、竞品研究和新品机会相关的每周表现报告。','识别履约瓶颈，并使用 Python 和 JavaScript 制作看板、数据清洗脚本、数据库与工作流自动化原型。']},
    ownership:{en:'The activities above are described in my internship record. File-level authorship, reused components, collaboration boundaries, and validation ownership are not documented in the public case yet.',zh:'以上工作记录于实习经历。具体哪些文件由我独立编写、哪些组件被复用、协作边界和验证分工，尚未在公开案例中列明。'},
    method:{en:['Review product, advertising, feedback, and competitor information using Excel.','Organize the findings into recurring weekly reports for product and marketing decisions.','Use Python and JavaScript prototypes to address data preparation and workflow needs.'],zh:['通过 Excel 评估商品、广告、反馈与竞品信息。','把分析整理为每周报告，支持商品与营销判断。','使用 Python 和 JavaScript 原型处理数据准备与工作流需求。']},
    deliverables:{en:['Weekly performance reports.','Dashboard, data-cleaning, database, and automation prototypes.'],zh:['每周表现报告。','看板、数据清洗、数据库与自动化原型。']},
    validation:{en:'No measured before/after result for processing time, conversion, advertising efficiency, or cost savings is available to report. The 1,700+ figure describes listing coverage.',zh:'目前暂无可报告的处理耗时、转化率、广告效率或成本节约的前后对比结果。1,700+ 表示覆盖的商品刊登数量。'},
    dataAccess:'unspecified',artifacts:withheldArtifacts(),
  },
  'disney-strategy':{
    pain:{en:'Experiences, streaming, and linear TV have different investment needs and return profiles. The study needed a consistent way to compare three capital-allocation options over a three-to-five-year horizon.',zh:'体验业务、流媒体与线性电视的投入需求和回报路径不同。研究需要在统一的指标和 3–5 年时间范围下，比较三个资本配置方案。'},
    roleSummary:{en:'Owned the independent study from 10-K research to capital-allocation recommendations and the executive-style presentation, with mentor feedback.',zh:'负责独立研究中从 10-K 分析、资本配置建议到管理层演示的完整过程，并结合导师反馈完善。'},
    contributions:{en:['Led the 10-K-based research and comparison of three capital-allocation options.','Defined DTC margin, Experiences ROIC, and free-cash-flow growth as decision KPIs.','Developed SQL-supported recommendations and expanded a two-page report into an executive-style deck.'],zh:['负责基于 10-K 的研究，并比较三个资本配置方案。','将 DTC 利润率、体验业务 ROIC 和自由现金流增长设为决策 KPI。','形成 SQL 支持的建议，并把两页报告扩展为管理层风格的演示材料。']},
    ownership:{en:'The study is described as independent in my project record, with a mentor providing feedback. The public case does not yet include SQL authorship details, calculation files, or the final report.',zh:'项目记录描述为独立研究，导师提供反馈。SQL 代码的具体编写范围、计算文件与最终报告，目前未在案例中公开。'},
    method:{en:['Use Disney’s 10-K to structure the business and financial analysis.','Compare three strategic options across Experiences, streaming, and linear TV over three to five years.','Frame recommendations around the selected KPIs and communicate them through an executive-style deck.'],zh:['基于 Disney 10-K 组织业务与财务分析。','以 3–5 年为视角，比较体验业务、流媒体和线性电视相关的三个方案。','围绕所选 KPI 形成建议，并通过管理层风格的演示材料表达。']},
    deliverables:{en:['Capital-allocation recommendations and an executive-style deck.','A KPI framework for comparing the strategic options.'],zh:['资本配置建议与管理层风格的演示材料。','用于比较战略方案的 KPI 框架。']},
    validation:{en:'Three options and a three-to-five-year horizon describe the analysis scope. Implemented returns, realized cash-flow improvements, and a verified financial impact are not reported.',zh:'三个方案和 3–5 年视角属于分析范围。目前没有可报告的实际投资回报、已实现的现金流改善或经核实的财务影响。'},
    dataAccess:'unspecified',artifacts:withheldArtifacts(),
  },
  'gas-forecast':{
    pain:{en:'The simulation required a forward price estimate from a limited monthly natural-gas price history. The modeling question was how to account for seasonal patterns when extending the series one year ahead.',zh:'职业模拟要求从有限的月度天然气历史价格中形成未来价格估计。需要解决的问题是：如何考虑季节性规律，并把序列向前预测一年。'},
    roleSummary:{en:'Built a Python time-series model to study seasonality and produce a one-year-forward forecast.',zh:'构建 Python 时间序列模型，研究季节性并生成未来一年的价格预测。'},
    contributions:{en:['Worked with 48 monthly natural-gas price observations.','Built the Python time-series model used to identify seasonality.','Extended the analysis to a one-year-forward forecast.'],zh:['使用 48 个月度天然气价格观测。','构建用于识别季节性的 Python 时间序列模型。','将分析扩展为未来一年的价格预测。']},
    ownership:{en:'The model-building work is described in my simulation record. Starter-code reuse, my specific functions, and any independently performed validation are not identified in the public artifacts yet.',zh:'模拟记录包含模型构建工作。哪些函数由我编写、是否使用起始代码，以及哪些验证由我独立完成，目前尚无公开作品记录。'},
    method:{en:['Use the 48 monthly observations as the modeling input.','Represent seasonal price patterns in a Python time-series model.','Extend the modeled series over a one-year forecast horizon.'],zh:['以 48 个月度观测作为建模输入。','通过 Python 时间序列模型表示价格季节性。','把模型序列扩展至未来一年的预测范围。']},
    deliverables:{en:['A Python time-series model and one-year price forecast, as described in the simulation record.'],zh:['模拟记录所述的 Python 时间序列模型及一年期价格预测。']},
    validation:{en:'No measured forecast error is available to report; a holdout design and baseline comparison have not been provided. The 48 observations and one-year horizon describe the input and forecast scope.',zh:'目前暂无可报告的预测误差指标，也未提供留出验证方案或基线对比。48 个观测和一年期预测分别描述输入规模与预测范围。'},
    dataAccess:'unspecified',artifacts:withheldArtifacts(),
  },
  'credit-risk':{
    pain:{en:'The simulation needed borrower-level information to be turned into an estimate of default likelihood and potential loan loss. The decision problem was to connect a statistical risk estimate with its financial consequence.',zh:'职业模拟需要把借款人信息转化为违约可能性和潜在贷款损失的估计。核心问题是把统计风险判断连接到对应的财务后果。'},
    roleSummary:{en:'Developed a credit-risk model on 10,000 borrower records to estimate default probability and expected loan loss.',zh:'基于 10,000 条借款人记录，构建估算违约概率与预期贷款损失的信用风险模型。'},
    contributions:{en:['Worked with a dataset of 10,000 borrower records.','Developed the model used to estimate probability of default.','Connected the default estimate with expected loan-loss estimation.'],zh:['使用 10,000 条借款人记录的数据集。','构建用于估算违约概率的模型。','把违约估计连接到预期贷款损失估算。']},
    ownership:{en:'The simulation record attributes model development to me. Personal code, supplied templates, data-processing responsibilities, and validation ownership are not yet documented through public artifacts.',zh:'模拟记录将模型构建列为我的工作。目前尚无公开作品细分个人代码、提供的模板、数据处理职责与验证分工。'},
    method:{en:['Use borrower records as the input for credit-risk modeling.','Estimate probability of default with the developed model.','Use the default estimate in expected loan-loss estimation.'],zh:['以借款人记录作为信用风险建模输入。','通过所构建的模型估算违约概率。','将违约估计用于预期贷款损失估算。']},
    deliverables:{en:['A model for default-probability and expected-loss estimates, as described in the simulation record.'],zh:['模拟记录所述的违约概率与预期损失估算模型。']},
    validation:{en:'No AUC, calibration result, or realized loss reduction is available to report. A train/test design and baseline comparison have not been provided. The 10,000 records describe dataset size.',zh:'目前暂无可报告的 AUC、校准结果或实际损失降低数据，也未提供训练与测试方案或基线对比。10,000 条记录属于数据规模。'},
    dataAccess:'unspecified',artifacts:withheldArtifacts(),
  },
  'fico-segmentation':{
    pain:{en:'The simulation required a continuous FICO score range to be mapped into ten credit-risk buckets. The technical problem was to define a reproducible grouping rule using an optimization method.',zh:'职业模拟要求把连续的 FICO 评分范围映射为十个信用风险分组。技术问题是通过优化方法定义能够重复执行的分组规则。'},
    roleSummary:{en:'Applied dynamic programming and maximum-likelihood optimization to map FICO scores into ten risk buckets.',zh:'应用动态规划与最大似然优化，将 FICO 评分映射为十个风险分组。'},
    contributions:{en:['Applied dynamic programming to the credit-score segmentation task.','Used maximum-likelihood optimization in the bucket-mapping approach.','Produced a mapping of FICO scores into ten credit-risk buckets.'],zh:['将动态规划应用到信用评分分层任务。','在分组映射方法中使用最大似然优化。','把 FICO 评分映射为十个信用风险分组。']},
    ownership:{en:'The algorithmic work is described in my simulation record. My specific implementation, reused code, and independent tests are not yet available as public evidence.',zh:'模拟记录包含上述算法工作。具体实现、复用代码范围与独立测试，目前尚未作为公开证据提供。'},
    method:{en:['Formulate the credit-score mapping as a ten-bucket task.','Apply dynamic programming and maximum-likelihood optimization.','Map FICO scores to the resulting credit-risk buckets.'],zh:['将信用评分映射整理为十个分组的任务。','应用动态规划与最大似然优化。','把 FICO 评分映射到对应的信用风险分组。']},
    deliverables:{en:['A ten-bucket FICO risk mapping, as described in the simulation record.'],zh:['模拟记录所述的十组 FICO 风险映射。']},
    validation:{en:'Ten buckets is the output resolution. No measured risk improvement is available to report. Objective values, a comparison with simple binning, and stability-test results have not been provided.',zh:'十个分组属于输出粒度。目前暂无可报告的量化风险改善结果，也未提供目标函数值、简单分箱对比或稳定性测试记录。'},
    dataAccess:'unspecified',artifacts:withheldArtifacts(),
  },
};
