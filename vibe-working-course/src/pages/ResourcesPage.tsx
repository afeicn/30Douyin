import { Download, FileText, Video, BookOpen, Wrench, Star, Clock, Users, ExternalLink } from 'lucide-react';
import { cn } from '../utils/cn';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'document' | 'template' | 'tool' | 'video' | 'guide';
  format: string;
  size: string;
  downloadCount: number;
  rating: number;
  isPremium: boolean;
  tags: string[];
  downloadUrl?: string;
}

const resources: Resource[] = [
  {
    id: 'vibe-methodology',
    title: 'Vibe Working 完整方法论',
    description: '包含VIBE模型、核心原则、实施框架的完整指南',
    type: 'document',
    format: 'PDF',
    size: '2.5MB',
    downloadCount: 1250,
    rating: 4.9,
    isPremium: false,
    tags: ['方法论', '核心文档', '必读'],
    downloadUrl: '/downloads/vibe-working-methodology.pdf'
  },
  {
    id: 'quick-start-guide',
    title: '快速入门指南',
    description: '30分钟快速掌握Vibe Working基础应用',
    type: 'guide',
    format: 'PDF',
    size: '1.2MB',
    downloadCount: 2100,
    rating: 4.8,
    isPremium: false,
    tags: ['入门', '快速上手', '基础'],
    downloadUrl: '/downloads/quick-start-guide.pdf'
  },
  {
    id: 'ai-prompt-templates',
    title: 'AI提示词模板库',
    description: '100+精选提示词模板，覆盖各种工作场景',
    type: 'template',
    format: 'DOCX',
    size: '800KB',
    downloadCount: 3200,
    rating: 4.9,
    isPremium: false,
    tags: ['模板', '提示词', '实用工具'],
    downloadUrl: '/downloads/ai-prompt-templates.docx'
  },
  {
    id: 'workflow-templates',
    title: '工作流程模板',
    description: '内容创作、数据分析、项目管理等标准流程模板',
    type: 'template',
    format: 'ZIP',
    size: '1.8MB',
    downloadCount: 1800,
    rating: 4.7,
    isPremium: false,
    tags: ['流程', '模板', '标准化'],
    downloadUrl: '/downloads/workflow-templates.zip'
  },
  {
    id: 'case-study-collection',
    title: '实践案例集',
    description: '20个详细案例分析，展示Vibe Working实际应用',
    type: 'document',
    format: 'PDF',
    size: '4.2MB',
    downloadCount: 950,
    rating: 4.8,
    isPremium: true,
    tags: ['案例', '实践', '深度分析'],
    downloadUrl: '/downloads/case-study-collection.pdf'
  },
  {
    id: 'productivity-toolkit',
    title: '效率工具包',
    description: '提升工作效率的实用工具和插件推荐',
    type: 'tool',
    format: 'PDF',
    size: '1.5MB',
    downloadCount: 2800,
    rating: 4.6,
    isPremium: false,
    tags: ['工具', '效率', '推荐'],
    downloadUrl: '/downloads/productivity-toolkit.pdf'
  },
  {
    id: 'video-tutorials',
    title: '视频教程系列',
    description: '10小时完整视频课程，手把手教学',
    type: 'video',
    format: 'MP4',
    size: '2.1GB',
    downloadCount: 680,
    rating: 4.9,
    isPremium: true,
    tags: ['视频', '教程', '完整课程'],
    downloadUrl: '/downloads/video-tutorials.zip'
  },
  {
    id: 'assessment-tool',
    title: '能力评估工具',
    description: '评估你的Vibe Working掌握程度',
    type: 'tool',
    format: 'XLSX',
    size: '500KB',
    downloadCount: 1400,
    rating: 4.5,
    isPremium: false,
    tags: ['评估', '测试', '自检'],
    downloadUrl: '/downloads/assessment-tool.xlsx'
  },
  {
    id: 'advanced-strategies',
    title: '高级策略指南',
    description: '面向专家的高级应用策略和技巧',
    type: 'guide',
    format: 'PDF',
    size: '3.1MB',
    downloadCount: 420,
    rating: 4.8,
    isPremium: true,
    tags: ['高级', '策略', '专家级'],
    downloadUrl: '/downloads/advanced-strategies.pdf'
  }
];

const resourceTypeIcons = {
  document: FileText,
  template: BookOpen,
  tool: Wrench,
  video: Video,
  guide: BookOpen
};

const resourceTypeColors = {
  document: 'from-blue-500 to-blue-600',
  template: 'from-green-500 to-green-600',
  tool: 'from-purple-500 to-purple-600',
  video: 'from-red-500 to-red-600',
  guide: 'from-orange-500 to-orange-600'
};

const resourceTypeLabels = {
  document: '文档',
  template: '模板',
  tool: '工具',
  video: '视频',
  guide: '指南'
};

const categories = [
  { id: 'all', label: '全部资源', count: resources.length },
  { id: 'document', label: '文档资料', count: resources.filter(r => r.type === 'document').length },
  { id: 'template', label: '模板工具', count: resources.filter(r => r.type === 'template' || r.type === 'tool').length },
  { id: 'video', label: '视频教程', count: resources.filter(r => r.type === 'video').length },
  { id: 'guide', label: '指南手册', count: resources.filter(r => r.type === 'guide').length }
];

export function ResourcesPage() {
  const handleDownload = (resource: Resource) => {
    if (resource.isPremium) {
      alert('此资源需要高级会员权限，请升级账户后下载。');
      return;
    }
    
    // 模拟下载
    alert(`开始下载：${resource.title}`);
  };

  const formatDownloadCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              资源下载
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              获取完整的Vibe Working学习资料和实用工具
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="px-6 py-3 bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 rounded-lg transition-colors flex items-center space-x-2"
              >
                <span>{category.label}</span>
                <span className="bg-gray-300 text-gray-600 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">推荐资源</h2>
            <p className="text-gray-600">最受欢迎和最实用的学习资料</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.filter(r => !r.isPremium).slice(0, 3).map((resource) => {
              const Icon = resourceTypeIcons[resource.type];
              
              return (
                <div key={resource.id} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      "w-12 h-12 bg-gradient-to-r rounded-lg flex items-center justify-center",
                      resourceTypeColors[resource.type]
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{resource.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{resource.format} • {resource.size}</span>
                    <div className="flex items-center space-x-1">
                      <Download className="h-3 w-3" />
                      <span>{formatDownloadCount(resource.downloadCount)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleDownload(resource)}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4" />
                    <span>免费下载</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">全部资源</h2>
            <p className="text-gray-600">完整的学习资料库</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {resources.map((resource) => {
              const Icon = resourceTypeIcons[resource.type];
              
              return (
                <div key={resource.id} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className={cn(
                      "w-12 h-12 bg-gradient-to-r rounded-lg flex items-center justify-center flex-shrink-0",
                      resourceTypeColors[resource.type]
                    )}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{resource.title}</h3>
                        
                        <div className="flex items-center space-x-2 flex-shrink-0">
                          {resource.isPremium && (
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              高级
                            </span>
                          )}
                          
                          <span className={cn(
                            "text-xs px-2 py-1 rounded-full font-medium",
                            resourceTypeColors[resource.type].replace('to-', 'bg-').split(' ')[0] + '-100',
                            resourceTypeColors[resource.type].replace('from-', 'text-').split(' ')[0] + '-700'
                          )}>
                            {resourceTypeLabels[resource.type]}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span>{resource.rating}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1">
                            <Download className="h-3 w-3" />
                            <span>{formatDownloadCount(resource.downloadCount)}</span>
                          </div>
                          
                          <span>{resource.format} • {resource.size}</span>
                        </div>
                        
                        <button
                          onClick={() => handleDownload(resource)}
                          className={cn(
                            "px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-1",
                            resource.isPremium
                              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          )}
                        >
                          <Download className="h-3 w-3" />
                          <span>{resource.isPremium ? '高级下载' : '免费下载'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">相关资源</h2>
            <p className="text-gray-600">推荐的外部学习资源和工具</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI工具推荐</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'ChatGPT', description: '最流行的AI对话工具', url: 'https://chat.openai.com' },
                  { name: 'Claude', description: 'Anthropic的AI助手', url: 'https://claude.ai' },
                  { name: 'Midjourney', description: 'AI图像生成工具', url: 'https://midjourney.com' },
                  { name: 'Notion AI', description: '集成AI的笔记工具', url: 'https://notion.so' }
                ].map((tool, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{tool.name}</div>
                      <div className="text-sm text-gray-600">{tool.description}</div>
                    </div>
                    
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">学习社区</h3>
              
              <div className="space-y-3">
                {[
                  { name: 'Vibe Working 官方群', description: '加入我们的学习社区', members: '2.5k' },
                  { name: 'AI效率提升论坛', description: '分享AI应用经验', members: '8.2k' },
                  { name: '知识工作者联盟', description: '专业知识工作者交流', members: '5.1k' },
                  { name: '未来工作方式研究', description: '探讨工作方式变革', members: '3.8k' }
                ].map((community, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{community.name}</div>
                      <div className="text-sm text-gray-600">{community.description}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Users className="h-3 w-3" />
                        <span>{community.members}</span>
                      </div>
                      
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        加入
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            获取完整学习包
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            升级到高级会员，解锁所有资源和专属内容
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              升级高级会员
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              了解更多
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}