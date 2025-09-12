import { useState } from 'react';
import { Play, CheckCircle, ArrowRight, Lightbulb, Users, Target, Zap, Clock, Star } from 'lucide-react';
import { cn } from '../utils/cn';

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  category: string;
  steps: {
    phase: 'V' | 'I' | 'B' | 'E';
    title: string;
    description: string;
    prompt: string;
    example?: string;
  }[];
}

const exercises: Exercise[] = [
  {
    id: 'content-creation',
    title: '营销文案创作',
    description: '为新产品发布创作一套完整的营销文案',
    difficulty: 'beginner',
    duration: '30分钟',
    category: '内容创作',
    steps: [
      {
        phase: 'V',
        title: '明确愿景',
        description: '定义文案目标和期望效果',
        prompt: '请描述你要推广的产品，以及希望文案达到什么效果？',
        example: '产品：智能手表\n目标：提高品牌知名度，突出健康监测功能\n受众：25-40岁注重健康的都市白领'
      },
      {
        phase: 'I',
        title: '角色互动',
        description: '与AI营销专家协作',
        prompt: '现在你是资深营销专家，请为这个产品制定文案策略',
        example: 'AI角色：营销策略师\n任务：分析目标受众痛点，制定文案框架\n输出：文案策略和关键信息点'
      },
      {
        phase: 'B',
        title: '构建内容',
        description: '创作具体的文案内容',
        prompt: '基于策略，创作产品文案的各个版本',
        example: '标题文案、产品描述、功能亮点、用户评价、行动召唤等不同类型的文案'
      },
      {
        phase: 'E',
        title: '优化演进',
        description: '测试和优化文案效果',
        prompt: '评估文案质量，进行A/B测试优化',
        example: '对比不同版本的文案，选择最佳方案，并根据反馈持续优化'
      }
    ]
  },
  {
    id: 'data-analysis',
    title: '销售数据分析',
    description: '分析季度销售数据，提取商业洞察',
    difficulty: 'intermediate',
    duration: '45分钟',
    category: '数据分析',
    steps: [
      {
        phase: 'V',
        title: '明确愿景',
        description: '定义分析目标和关键问题',
        prompt: '你希望从销售数据中获得什么洞察？要解决什么业务问题？',
        example: '目标：找出销售增长的关键因素\n问题：哪些产品/渠道/地区表现最好？\n用途：制定下季度销售策略'
      },
      {
        phase: 'I',
        title: '角色互动',
        description: '与AI数据分析师合作',
        prompt: '作为数据分析专家，请设计分析框架',
        example: 'AI角色：数据科学家\n任务：设计分析维度和指标体系\n输出：分析框架和数据处理方案'
      },
      {
        phase: 'B',
        title: '构建分析',
        description: '执行数据分析和可视化',
        prompt: '处理数据，创建图表，提取关键发现',
        example: '趋势分析、对比分析、相关性分析，制作仪表板和报告'
      },
      {
        phase: 'E',
        title: '优化演进',
        description: '深化洞察，形成行动建议',
        prompt: '基于分析结果，提出具体的业务建议',
        example: '识别机会点，制定改进措施，建立监控机制'
      }
    ]
  },
  {
    id: 'project-planning',
    title: '项目规划设计',
    description: '为新项目制定完整的执行计划',
    difficulty: 'advanced',
    duration: '60分钟',
    category: '项目管理',
    steps: [
      {
        phase: 'V',
        title: '明确愿景',
        description: '定义项目目标和成功标准',
        prompt: '描述项目背景、目标、约束条件和期望成果',
        example: '项目：开发移动应用\n目标：3个月内上线MVP\n约束：预算50万，团队5人\n成果：用户量1万+'
      },
      {
        phase: 'I',
        title: '角色互动',
        description: '与AI项目管理专家协作',
        prompt: '作为项目管理专家，请制定项目框架',
        example: 'AI角色：项目经理+技术架构师\n任务：分解工作包，评估风险\n输出：项目结构和里程碑计划'
      },
      {
        phase: 'B',
        title: '构建计划',
        description: '制定详细的执行计划',
        prompt: '创建时间表、资源分配和风险管理计划',
        example: '甘特图、资源矩阵、风险登记册、沟通计划等项目文档'
      },
      {
        phase: 'E',
        title: '优化演进',
        description: '验证计划可行性，持续优化',
        prompt: '评审计划，模拟执行，建立监控机制',
        example: '计划评审、风险评估、调整优化、建立项目仪表板'
      }
    ]
  }
];

const difficultyColors = {
  beginner: 'from-green-500 to-emerald-500',
  intermediate: 'from-yellow-500 to-orange-500',
  advanced: 'from-red-500 to-pink-500'
};

const difficultyLabels = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级'
};

const phaseColors = {
  V: 'from-blue-500 to-blue-600',
  I: 'from-purple-500 to-purple-600',
  B: 'from-green-500 to-green-600',
  E: 'from-orange-500 to-orange-600'
};

const phaseNames = {
  V: 'Vision - 明确愿景',
  I: 'Interaction - 角色互动',
  B: 'Build - 构建实现',
  E: 'Evolve - 优化演进'
};

export function PracticePage() {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [userInputs, setUserInputs] = useState<Record<number, string>>({});

  const handleStartExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    setCurrentStep(0);
    setCompletedSteps([]);
    setUserInputs({});
  };

  const handleCompleteStep = () => {
    if (selectedExercise && currentStep < selectedExercise.steps.length - 1) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    } else if (selectedExercise) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const handleInputChange = (stepIndex: number, value: string) => {
    setUserInputs({ ...userInputs, [stepIndex]: value });
  };

  const resetExercise = () => {
    setSelectedExercise(null);
    setCurrentStep(0);
    setCompletedSteps([]);
    setUserInputs({});
  };

  if (selectedExercise) {
    const currentStepData = selectedExercise.steps[currentStep];
    const isCompleted = completedSteps.includes(currentStep);
    const allStepsCompleted = completedSteps.length === selectedExercise.steps.length;

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <button
                  onClick={resetExercise}
                  className="text-blue-600 hover:text-blue-700 font-medium mb-2 flex items-center space-x-1"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  <span>返回练习列表</span>
                </button>
                <h1 className="text-2xl font-bold text-gray-900">{selectedExercise.title}</h1>
                <p className="text-gray-600 mt-1">{selectedExercise.description}</p>
              </div>
              
              <div className="text-right">
                <div className="text-sm text-gray-500">进度</div>
                <div className="text-lg font-semibold text-gray-900">
                  {completedSteps.length} / {selectedExercise.steps.length}
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="flex items-center space-x-4">
                {selectedExercise.steps.map((step, index) => {
                  const isActive = index === currentStep;
                  const isCompleted = completedSteps.includes(index);
                  
                  return (
                    <div key={index} className="flex items-center">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                        isCompleted ? "bg-green-500 text-white" :
                        isActive ? "bg-blue-500 text-white" :
                        "bg-gray-200 text-gray-500"
                      )}>
                        {isCompleted ? <CheckCircle className="h-5 w-5" /> : step.phase}
                      </div>
                      
                      {index < selectedExercise.steps.length - 1 && (
                        <div className={cn(
                          "w-16 h-1 mx-2 transition-all",
                          completedSteps.includes(index) ? "bg-green-500" : "bg-gray-200"
                        )} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Current Step Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {allStepsCompleted ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">恭喜完成练习！</h2>
              <p className="text-gray-600 mb-8">你已经成功体验了完整的Vibe Working流程</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-900 mb-2">学到的技能</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• VIBE模型的实际应用</li>
                    <li>• AI角色协作技巧</li>
                    <li>• 迭代优化思维</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-green-900 mb-2">下一步建议</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• 尝试更高难度的练习</li>
                    <li>• 在实际工作中应用</li>
                    <li>• 分享经验给同事</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4">
                <button
                  onClick={resetExercise}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  选择其他练习
                </button>
                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                  下载学习证书
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Step Header */}
              <div className={cn(
                "bg-gradient-to-r p-6 text-white",
                phaseColors[currentStepData.phase]
              )}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl font-bold">{currentStepData.phase}</span>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-bold">{phaseNames[currentStepData.phase]}</h2>
                    <p className="opacity-90">{currentStepData.title}</p>
                  </div>
                </div>
              </div>
              
              {/* Step Content */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">任务描述</h3>
                  <p className="text-gray-700">{currentStepData.description}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">练习提示</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800">{currentStepData.prompt}</p>
                  </div>
                </div>
                
                {currentStepData.example && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">参考示例</h3>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <pre className="text-sm text-gray-700 whitespace-pre-wrap">{currentStepData.example}</pre>
                    </div>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">你的实践</h3>
                  <textarea
                    value={userInputs[currentStep] || ''}
                    onChange={(e) => handleInputChange(currentStep, e.target.value)}
                    placeholder="在这里记录你的思考和实践过程..."
                    className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  />
                </div>
                
                <div className="flex justify-between">
                  <button
                    onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                    disabled={currentStep === 0}
                    className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    上一步
                  </button>
                  
                  <button
                    onClick={handleCompleteStep}
                    disabled={!userInputs[currentStep]?.trim()}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    <span>{currentStep === selectedExercise.steps.length - 1 ? '完成练习' : '下一步'}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              互动练习
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              通过实际练习体验Vibe Working的强大效果
            </p>
          </div>
        </div>
      </section>

      {/* Exercise List */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              选择练习
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从简单到复杂，逐步掌握Vibe Working方法
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exercises.map((exercise) => (
              <div key={exercise.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Exercise Header */}
                <div className={cn(
                  "bg-gradient-to-r p-6 text-white",
                  difficultyColors[exercise.difficulty]
                )}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium opacity-90">{exercise.category}</span>
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded">
                      {difficultyLabels[exercise.difficulty]}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{exercise.title}</h3>
                  <p className="text-sm opacity-90">{exercise.description}</p>
                </div>
                
                {/* Exercise Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{exercise.duration}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      {exercise.steps.map((step, index) => (
                        <div key={index} className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold text-white",
                          phaseColors[step.phase]
                        )}>
                          {step.phase}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {exercise.steps.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className={cn(
                          "w-4 h-4 rounded-full flex-shrink-0",
                          phaseColors[step.phase]
                        )} />
                        <span className="text-sm text-gray-700">{step.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    onClick={() => handleStartExercise(exercise)}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Play className="h-4 w-4" />
                    <span>开始练习</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              练习收益
            </h2>
            <p className="text-xl text-gray-600">
              通过实践获得的核心能力
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-blue-600" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">思维模式转变</h3>
                <p className="text-gray-600">从传统工作方式转向AI协作思维，提升问题解决能力</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">协作技能提升</h3>
                <p className="text-gray-600">掌握与AI高效协作的技巧，发挥人机协作的最大价值</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">目标导向能力</h3>
                <p className="text-gray-600">学会明确定义目标，制定清晰的执行路径</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="h-6 w-6 text-orange-600" />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">迭代优化思维</h3>
                <p className="text-gray-600">培养持续改进的习惯，追求卓越的工作成果</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}