import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Code, FileText, Database, Workflow, Download, Terminal } from 'lucide-react';
import { twelveMethods } from '../data/twelveMethods';
import { cn } from '../utils/cn';

export function MethodDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const methodId = id ? parseInt(id) : 1;
  const method = twelveMethods.find(m => m.id === methodId) || twelveMethods[0];
  const currentIndex = twelveMethods.findIndex(m => m.id === methodId);
  
  const prevMethod = currentIndex > 0 ? twelveMethods[currentIndex - 1] : null;
  const nextMethod = currentIndex < twelveMethods.length - 1 ? twelveMethods[currentIndex + 1] : null;
  
  const Icon = method.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={cn(
        "bg-gradient-to-r py-16 text-white",
        method.color
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              to="/knowledge-system"
              className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回知识体系
            </Link>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <div className="text-sm opacity-90 mb-1">{method.subtitle}</div>
              <h1 className="text-4xl sm:text-5xl font-bold">{method.title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-3xl">{method.description}</p>
        </div>
      </section>

      {/* Verse */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-l-4 border-blue-500">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              口诀
            </h2>
            <p className="text-gray-700 whitespace-pre-line leading-relaxed font-medium">
              {method.verse}
            </p>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">核心要点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {method.keyPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">详细内容</h2>
          
          <div className="space-y-8">
            {/* Concept */}
            {method.details.concept && (
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">核心概念</h3>
                <p className="text-gray-700 leading-relaxed">{method.details.concept}</p>
              </div>
            )}

            {/* Installation */}
            {method.details.installation && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Download className="h-5 w-5 mr-2 text-blue-600" />
                  安装步骤
                </h3>
                <div className="space-y-6">
                  {method.details.installation.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0",
                        method.color
                      )}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <h4 className="font-semibold text-gray-900 mb-2">{step.step}</h4>
                          <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                          {step.command && (
                            <div className="bg-gray-900 rounded-lg p-3 flex items-center space-x-3">
                              <Terminal className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <code className="text-sm text-green-400 font-mono flex-1">{step.command}</code>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Comparison */}
            {method.details.tools && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-600" />
                  工具对比
                </h3>
                <div className="space-y-6">
                  {method.details.tools.map((tool, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h4>
                      <p className="text-gray-600 mb-4">{tool.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-semibold text-green-700 mb-2">优势</h5>
                          <ul className="space-y-1">
                            {tool.pros.map((pro, i) => (
                              <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-green-500 mt-1">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-orange-700 mb-2">局限</h5>
                          <ul className="space-y-1">
                            {tool.cons.map((con, i) => (
                              <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                                <span className="text-orange-500 mt-1">•</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Principles */}
            {method.details.principles && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">核心原则</h3>
                <ul className="space-y-3">
                  {method.details.principles.map((principle, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Syntax */}
            {method.details.syntax && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-600" />
                  语法示例
                </h3>
                <div className="space-y-4">
                  {method.details.syntax.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">{item.name}</h4>
                      <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                        <code>{item.example}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Comparison */}
            {method.details.comparison && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{method.details.comparison.title}</h3>
                <div className="space-y-4">
                  {method.details.comparison.items.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.name}</h4>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Workflow */}
            {method.details.workflow && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Workflow className="h-5 w-5 mr-2 text-blue-600" />
                  工作流程
                </h3>
                <div className="space-y-4">
                  {method.details.workflow.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0",
                        method.color
                      )}>
                        {index + 1}
                      </div>
                      <div className="flex-1 bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-1">{step.step}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Roles */}
            {method.details.roles && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Database className="h-5 w-5 mr-2 text-blue-600" />
                  角色体系
                </h3>
                <div className="space-y-6">
                  {['编排层', '核心开发团队', '流程支持团队'].map((category) => {
                    const categoryRoles = method.details.roles!.filter(r => r.category === category);
                    if (categoryRoles.length === 0) return null;
                    
                    return (
                      <div key={category}>
                        <h4 className="text-md font-semibold text-gray-700 mb-3">{category}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {categoryRoles.map((role, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                              <h5 className="font-semibold text-gray-900 mb-2">{role.name}</h5>
                              <p className="text-sm text-gray-600">{role.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Examples */}
            {method.details.examples && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">实例说明</h3>
                <ul className="space-y-2">
                  {method.details.examples.map((example, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {prevMethod ? (
              <Link
                to={`/knowledge-system/${prevMethod.id}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <div>
                  <div className="text-sm text-gray-500">上一式</div>
                  <div className="font-semibold">{prevMethod.subtitle} {prevMethod.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            <Link
              to="/knowledge-system"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
            >
              返回列表
            </Link>

            {nextMethod ? (
              <Link
                to={`/knowledge-system/${nextMethod.id}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-right"
              >
                <div>
                  <div className="text-sm text-gray-500">下一式</div>
                  <div className="font-semibold">{nextMethod.subtitle} {nextMethod.title}</div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

