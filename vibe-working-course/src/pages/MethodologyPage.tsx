import { Target, Users, Brain, Repeat, Lightbulb, MessageCircle, RefreshCw, CheckCircle } from 'lucide-react';
import { cn } from '../utils/cn';

const principles = [
  {
    title: '氛围优先原则',
    description: '专注于工作的"感觉"和"氛围"，而非具体的操作步骤',
    icon: Lightbulb,
    details: [
      '沉浸在问题思考中，而非工具使用中',
      '关注最终目标，而非中间过程',
      '保持创造性思维的连续性'
    ]
  },
  {
    title: '自然交互原则',
    description: '用最自然的方式与AI对话，就像与专业同事协作',
    icon: MessageCircle,
    details: [
      '使用日常语言描述需求',
      '允许模糊和不完整的表达',
      '通过对话逐步明确需求'
    ]
  },
  {
    title: '迭代优化原则',
    description: '通过持续反馈和调整，逐步达到最佳效果',
    icon: RefreshCw,
    details: [
      '接受初版的不完美',
      '基于结果进行快速调整',
      '持续优化直到满意'
    ]
  },
  {
    title: '结果验证原则',
    description: '始终关注输出质量和实际效果',
    icon: CheckCircle,
    details: [
      '定期检查AI输出的准确性',
      '验证结果是否符合预期',
      '保持批判性思维'
    ]
  }
];

const vibeModel = [
  {
    letter: 'V',
    title: 'Vision',
    subtitle: '愿景定义',
    description: '明确工作目标和期望结果',
    icon: Target,
    color: 'from-blue-500 to-cyan-500',
    steps: [
      '目标设定：清晰描述想要达成的结果',
      '成功标准：定义如何判断工作是否成功',
      '约束条件：明确时间、资源、质量等限制'
    ],
    example: {
      title: '示例：市场分析报告',
      content: '目标：为公司新产品制作一份市场分析报告\n成功标准：包含竞品分析、市场规模、用户画像、机会点识别\n约束条件：3天内完成，面向高管汇报，需要数据支撑'
    }
  },
  {
    letter: 'I',
    title: 'Interaction',
    subtitle: '智能交互',
    description: '与AI建立有效的工作对话',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    steps: [
      '角色设定：为AI分配合适的专业角色',
      '需求描述：用自然语言详细描述需求',
      '上下文提供：分享相关背景信息和资料'
    ],
    example: {
      title: '示例：AI角色设定',
      content: '你是一位资深的市场分析师，请帮我分析智能家居市场。\n我们公司准备推出一款智能音箱产品，目标用户是25-40岁的城市白领。\n请从市场规模、竞争格局、用户需求等角度进行分析。'
    }
  },
  {
    letter: 'B',
    title: 'Build',
    subtitle: '构建输出',
    description: '让AI生成初版工作成果',
    icon: Brain,
    color: 'from-green-500 to-emerald-500',
    steps: [
      '结构搭建：让AI先提供工作框架',
      '内容填充：逐步完善各部分内容',
      '格式优化：调整呈现形式和视觉效果'
    ],
    example: {
      title: '构建技巧',
      content: '• 先要大纲，再要细节\n• 分模块逐步完善\n• 及时提供反馈和调整方向'
    }
  },
  {
    letter: 'E',
    title: 'Evolve',
    subtitle: '持续进化',
    description: '通过迭代不断优化成果',
    icon: Repeat,
    color: 'from-orange-500 to-red-500',
    steps: [
      '结果评估：检查输出质量和完整性',
      '问题识别：找出需要改进的地方',
      '迭代优化：基于反馈进行调整和完善'
    ],
    example: {
      title: '优化维度',
      content: '• 内容准确性和深度\n• 逻辑结构和条理性\n• 表达方式和可读性\n• 视觉呈现和专业度'
    }
  }
];

export function MethodologyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Vibe Working 方法论
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              深入了解AI时代的高效工作新范式，掌握VIBE模型的核心要素
            </p>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              四大核心原则
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              指导Vibe Working实践的基本准则
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle) => {
              const Icon = principle.icon;
              return (
                <div key={principle.title} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {principle.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {principle.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {principle.details.map((detail, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIBE Model Detailed */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              VIBE 模型详解
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              四个步骤的深入解析，从理论到实践的完整指南
            </p>
          </div>
          
          <div className="space-y-16">
            {vibeModel.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.letter} className={cn(
                  "flex flex-col lg:flex-row items-center gap-12",
                  !isEven && "lg:flex-row-reverse"
                )}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={cn(
                        "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center",
                        step.color
                      )}>
                        <span className="text-2xl font-bold text-white">{step.letter}</span>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title} - {step.subtitle}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">实施步骤：</h4>
                      <ul className="space-y-3">
                        {step.steps.map((stepItem, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                              {stepIndex + 1}
                            </div>
                            <span className="text-gray-700">{stepItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Example */}
                  <div className="flex-1">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-2 mb-4">
                        <Icon className="h-5 w-5 text-gray-600" />
                        <h4 className="text-lg font-semibold text-gray-900">
                          {step.example.title}
                        </h4>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4">
                        <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                          {step.example.content}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Implementation Path */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              实施路径
            </h2>
            <p className="text-xl text-gray-600">
              循序渐进，掌握Vibe Working的精髓
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">第一阶段：基础适应（1-2周）</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 选择1-2个日常工作场景开始尝试</li>
                <li>• 学习基本的提示词设计技巧</li>
                <li>• 建立与AI对话的习惯</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">第二阶段：技能提升（1个月）</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 扩展到更多工作场景</li>
                <li>• 掌握迭代优化的方法</li>
                <li>• 建立个人的AI工作流程</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">第三阶段：深度整合（2-3个月）</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 将Vibe Working融入日常工作</li>
                <li>• 开发个性化的角色和模板</li>
                <li>• 实现工作效率的显著提升</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}