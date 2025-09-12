import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target, Repeat, Users, TrendingUp } from 'lucide-react';
import { cn } from '../utils/cn';

const vibeSteps = [
  {
    letter: 'V',
    title: 'Vision',
    subtitle: '愿景定义',
    description: '明确工作目标和期望结果，设定成功标准和约束条件',
    icon: Target,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    letter: 'I',
    title: 'Interaction',
    subtitle: '智能交互',
    description: '与AI建立有效的工作对话，设定角色和提供上下文',
    icon: Users,
    color: 'from-purple-500 to-pink-500'
  },
  {
    letter: 'B',
    title: 'Build',
    subtitle: '构建输出',
    description: '让AI生成初版工作成果，搭建结构并填充内容',
    icon: Brain,
    color: 'from-green-500 to-emerald-500'
  },
  {
    letter: 'E',
    title: 'Evolve',
    subtitle: '持续进化',
    description: '通过迭代不断优化成果，评估结果并持续改进',
    icon: Repeat,
    color: 'from-orange-500 to-red-500'
  }
];

const benefits = [
  {
    title: '效率提升',
    description: '知识工作效率提升5-10倍',
    icon: TrendingUp,
    stat: '5-10x'
  },
  {
    title: '创意释放',
    description: '专注思考而非执行细节',
    icon: Brain,
    stat: '100%'
  },
  {
    title: '门槛降低',
    description: '技术技能要求大幅降低',
    icon: Zap,
    stat: '80%'
  }
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Vibe Working
              </span>
              <br />
              <span className="text-3xl sm:text-4xl text-gray-700">
                AI时代的高效工作新范式
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              完全投入到工作"氛围"中，忘记具体的执行细节，专注于思考、创造和验证结果。
              将人的价值从"如何做"转向"做什么"和"为什么做"。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/methodology"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                开始学习
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="/practice"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                体验练习
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIBE Model Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              VIBE 工作模型
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              四个简单步骤，开启AI协作的高效工作方式
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vibeSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.letter} className="relative group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                    <div className={cn(
                      "w-16 h-16 rounded-full bg-gradient-to-r flex items-center justify-center mb-6 mx-auto",
                      step.color
                    )}>
                      <span className="text-2xl font-bold text-white">{step.letter}</span>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">
                        {step.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className={cn(
                      "absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r flex items-center justify-center",
                      step.color
                    )}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  {index < vibeSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              为什么选择 Vibe Working？
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              数据驱动的工作方式变革，让每个人都能成为高效的知识工作者
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {benefit.stat}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            准备好开始你的 Vibe Working 之旅了吗？
          </h2>
          
          <p className="text-xl text-blue-100 mb-8">
            从今天开始，让AI成为你最得力的工作伙伴
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/methodology"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              深入了解方法论
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-all duration-200"
            >
              查看实践案例
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}