import { FileText, BarChart3, Palette, Calendar, Search, Briefcase, Clock, TrendingUp, Users } from 'lucide-react';
import { cn } from '../utils/cn';

const caseStudies = [
  {
    id: 'market-analysis',
    title: '市场分析报告',
    category: '数据分析',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
    duration: '4天 → 传统方式需要2周',
    efficiency: '70%',
    description: '为新产品制定上市策略的完整市场分析',
    challenge: '需要在短时间内完成全面的市场调研和竞品分析',
    solution: {
      vision: '制作包含竞品分析、市场规模、用户画像的专业报告',
      interaction: 'AI策略顾问 + 数据分析师 + 研究员角色协作',
      build: '框架设计 → 数据收集 → 分析建模 → 报告生成',
      evolve: '三轮迭代优化，从基础版本到高质量成果'
    },
    results: [
      '节省70%时间成本',
      '数据准确性提升',
      '分析深度超出预期',
      '获得管理层高度认可'
    ],
    workflow: [
      { day: 1, task: '与AI策略顾问讨论分析框架', status: 'completed' },
      { day: 2, task: 'AI研究员收集行业数据和竞品信息', status: 'completed' },
      { day: 3, task: 'AI数据分析师处理数据并生成洞察', status: 'completed' },
      { day: 4, task: 'AI内容专家撰写报告，设计师优化呈现', status: 'completed' }
    ]
  },
  {
    id: 'content-creation',
    title: '品牌内容创作',
    category: '内容创作',
    icon: FileText,
    color: 'from-purple-500 to-pink-500',
    duration: '2天 → 传统方式需要1周',
    efficiency: '65%',
    description: '为品牌活动创作全套营销内容',
    challenge: '需要创作多种形式的内容，保持品牌调性一致',
    solution: {
      vision: '创作包含文案、视觉概念、传播策略的完整方案',
      interaction: 'AI内容策划师 + 创意总监 + 文案专家角色',
      build: '品牌分析 → 创意概念 → 内容创作 → 视觉设计',
      evolve: '持续优化内容质量和品牌契合度'
    },
    results: [
      '创意质量显著提升',
      '内容产出效率翻倍',
      '品牌一致性更强',
      '用户参与度提高40%'
    ],
    workflow: [
      { day: 1, task: '品牌分析和创意概念设计', status: 'completed' },
      { day: 2, task: '内容创作和视觉优化', status: 'completed' }
    ]
  },
  {
    id: 'product-strategy',
    title: '产品策划方案',
    category: '项目管理',
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
    duration: '5天 → 传统方式需要3周',
    efficiency: '75%',
    description: '新产品从概念到上市的完整策划',
    challenge: '需要协调多个部门，制定详细的执行计划',
    solution: {
      vision: '制定包含市场定位、产品设计、营销策略的完整方案',
      interaction: 'AI策略顾问 + 产品经理 + 设计师 + 项目经理',
      build: '市场分析 → 产品设计 → 营销策略 → 执行计划',
      evolve: '多轮评审和优化，确保方案可执行性'
    },
    results: [
      '策划周期缩短75%',
      '方案完整性提升',
      '跨部门协作更顺畅',
      '产品成功率提高'
    ],
    workflow: [
      { day: 1, task: '市场机会分析和产品定位', status: 'completed' },
      { day: 2, task: '用户需求调研和产品设计', status: 'completed' },
      { day: 3, task: '原型设计和用户体验优化', status: 'completed' },
      { day: 4, task: '营销策略和推广计划', status: 'completed' },
      { day: 5, task: '项目计划和资源配置', status: 'completed' }
    ]
  }
];

const applicationScenarios = [
  {
    title: '内容创作',
    icon: FileText,
    description: '文案写作、报告撰写、演示制作',
    examples: ['营销文案', '技术文档', '商业计划书', '培训材料']
  },
  {
    title: '数据分析',
    icon: BarChart3,
    description: '数据处理、图表制作、洞察提取',
    examples: ['市场调研', '用户行为分析', '财务报表', '运营数据']
  },
  {
    title: '设计创意',
    icon: Palette,
    description: '视觉设计、原型制作、创意策划',
    examples: ['品牌设计', '产品原型', '活动策划', '用户界面']
  },
  {
    title: '项目管理',
    icon: Calendar,
    description: '计划制定、流程优化、团队协调',
    examples: ['项目规划', '流程设计', '资源配置', '风险管理']
  },
  {
    title: '研究调研',
    icon: Search,
    description: '信息收集、分析整理、报告生成',
    examples: ['行业研究', '竞品分析', '用户调研', '趋势分析']
  },
  {
    title: '商业决策',
    icon: Briefcase,
    description: '方案对比、风险评估、策略制定',
    examples: ['投资决策', '战略规划', '市场进入', '产品定位']
  }
];

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              实践案例
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              真实案例展示Vibe Working如何在不同场景下创造价值
            </p>
          </div>
        </div>
      </section>

      {/* Application Scenarios */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              应用场景
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vibe Working适用于各种知识工作场景
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationScenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <div key={scenario.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {scenario.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {scenario.description}
                  </p>
                  
                  <div className="space-y-1">
                    {scenario.examples.map((example, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              详细案例分析
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              深入了解Vibe Working的实际应用效果
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((caseStudy, index) => {
              const Icon = caseStudy.icon;
              
              return (
                <div key={caseStudy.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Header */}
                  <div className={cn(
                    "bg-gradient-to-r p-8 text-white",
                    caseStudy.color
                  )}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        
                        <div>
                          <div className="text-sm opacity-90 mb-1">{caseStudy.category}</div>
                          <h3 className="text-2xl font-bold">{caseStudy.title}</h3>
                          <p className="text-lg opacity-90 mt-2">{caseStudy.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-3xl font-bold mb-1">{caseStudy.efficiency}</div>
                        <div className="text-sm opacity-90">效率提升</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {/* Challenge & Solution */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">挑战</h4>
                          <p className="text-gray-600">{caseStudy.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">VIBE解决方案</h4>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">V</div>
                              <span className="text-gray-700">{caseStudy.solution.vision}</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">I</div>
                              <span className="text-gray-700">{caseStudy.solution.interaction}</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">B</div>
                              <span className="text-gray-700">{caseStudy.solution.build}</span>
                            </div>
                            <div className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">E</div>
                              <span className="text-gray-700">{caseStudy.solution.evolve}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Workflow & Results */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">工作流程</h4>
                          <div className="space-y-3">
                            {caseStudy.workflow.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                                  {step.day}
                                </div>
                                <span className="text-gray-700">{step.task}</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                              </div>
                            ))}
                          </div>
                          
                          <div className="mt-4 flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{caseStudy.duration}</span>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">成果</h4>
                          <div className="space-y-2">
                            {caseStudy.results.map((result, resultIndex) => (
                              <div key={resultIndex} className="flex items-center space-x-2">
                                <TrendingUp className="h-4 w-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              整体成效
            </h2>
            <p className="text-xl text-gray-600">
              Vibe Working带来的显著改善
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
              <div className="text-gray-600">平均时间节省</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">5-10x</div>
              <div className="text-gray-600">效率提升倍数</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">用户满意度</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}