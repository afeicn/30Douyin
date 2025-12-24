import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, CheckCircle } from 'lucide-react';
import { twelveMethods } from '../data/twelveMethods';
import { cn } from '../utils/cn';

export function KnowledgeSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Vibe Working 十二式
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto mb-4">
              掌握这12个知识点，你的Vibe Working就练成了！
            </p>
            <p className="text-lg text-blue-50 max-w-2xl mx-auto">
              从基础概念到高级方法论，系统学习AI时代的高效工作方式
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start space-x-4">
              <BookOpen className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  关于十二式
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Vibe Working十二式是Vibe Working过程中必会的12个知识点。学会这套心法，你的Vibe Working就练成了！
                </p>
                <p className="text-gray-700 leading-relaxed">
                  这十二式涵盖了从工具选择、项目组织、技术基础到高级方法论的完整知识体系，帮助您从零基础到熟练掌握Vibe Working工作法。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Twelve Methods Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              知识体系概览
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              点击任意卡片，深入了解每个知识点
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {twelveMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Link
                  key={method.id}
                  to={`/knowledge-system/${method.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 overflow-hidden">
                    {/* Card Header */}
                    <div className={cn(
                      "bg-gradient-to-r p-6 text-white",
                      method.color
                    )}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-sm opacity-90">{method.subtitle}</div>
                          <div className="text-2xl font-bold">#{method.id}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      {/* Verse */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4 border-l-4 border-blue-500">
                        <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed font-medium">
                          {method.verse}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {method.description}
                      </p>

                      {/* Key Points */}
                      <div className="space-y-2 mb-4">
                        {method.keyPoints.slice(0, 2).map((point, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-xs text-gray-600">{point}</span>
                          </div>
                        ))}
                        {method.keyPoints.length > 2 && (
                          <div className="text-xs text-gray-500">
                            还有 {method.keyPoints.length - 2} 个要点...
                          </div>
                        )}
                      </div>

                      {/* View Details */}
                      <div className="flex items-center text-blue-600 group-hover:text-blue-700 font-medium text-sm">
                        <span>查看详情</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              学习路径建议
            </h2>
            <p className="text-xl text-gray-600">
              按照以下顺序学习，效果更佳
            </p>
          </div>

          <div className="space-y-6">
            {/* 基础阶段 */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                基础阶段（第1-4式）
              </h3>
              <p className="text-gray-700 mb-3">
                掌握Vibe Working的核心概念和基础技能
              </p>
              <div className="flex flex-wrap gap-2">
                {twelveMethods.slice(0, 4).map((method) => (
                  <Link
                    key={method.id}
                    to={`/knowledge-system/${method.id}`}
                    className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700 hover:bg-blue-100 transition-colors"
                  >
                    {method.subtitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* 技术阶段 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                技术阶段（第5-9式）
              </h3>
              <p className="text-gray-700 mb-3">
                了解应用开发的技术基础和架构
              </p>
              <div className="flex flex-wrap gap-2">
                {twelveMethods.slice(4, 9).map((method) => (
                  <Link
                    key={method.id}
                    to={`/knowledge-system/${method.id}`}
                    className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700 hover:bg-green-100 transition-colors"
                  >
                    {method.subtitle}
                  </Link>
                ))}
              </div>
            </div>

            {/* 高级阶段 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                高级阶段（第10-12式）
              </h3>
              <p className="text-gray-700 mb-3">
                掌握数据处理和高级方法论
              </p>
              <div className="flex flex-wrap gap-2">
                {twelveMethods.slice(9, 12).map((method) => (
                  <Link
                    key={method.id}
                    to={`/knowledge-system/${method.id}`}
                    className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700 hover:bg-purple-100 transition-colors"
                  >
                    {method.subtitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            准备好开始学习了吗？
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            从第一式开始，系统掌握Vibe Working工作法
          </p>
          <Link
            to="/knowledge-system/1"
            className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            开始学习第一式
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

