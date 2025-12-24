// Vibe Working 十二式数据
import { 
  Sparkles, Wrench, FolderOpen, FileText, 
  Globe, Split, Layout, Server, Database, 
  Workflow, BarChart3, Users 
} from 'lucide-react';

export interface Method {
  id: number;
  title: string;
  subtitle: string;
  verse: string; // 口诀
  icon: any;
  color: string;
  description: string;
  keyPoints: string[];
  details: {
    concept?: string;
    installation?: Array<{ step: string; description: string; command?: string }>;
    tools?: Array<{ name: string; description: string; pros: string[]; cons: string[] }>;
    principles?: string[];
    examples?: string[];
    syntax?: Array<{ name: string; example: string }>;
    comparison?: { title: string; items: Array<{ name: string; description: string }> };
    workflow?: Array<{ step: string; description: string }>;
    roles?: Array<{ name: string; description: string; category: string }>;
  };
}

export const twelveMethods: Method[] = [
  {
    id: 1,
    title: 'Vibe Working氛围工作法',
    subtitle: '第一式',
    verse: '自然语言说需求，AI自动开始跑，\n沉浸氛围创意中，内容无需手动敲。\n人机协作如对话，验证结果做优化，\n零基础也能创造，工作方式新进化。',
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-500',
    description: '完全投入到"氛围"中，忘记代码本身的存在，忘记工作是怎么干的。以自然语言描述问题和目标，由AI自动生成完整可运行的代码以及其他工作。',
    keyPoints: [
      '沉浸于思考与创造，而非具体操作',
      '用自然语言描述需求',
      '观察和验证AI的运行结果',
      '零基础也能创造',
      '这是一种工作方式的进化'
    ],
    details: {
      concept: 'Vibe Working不仅仅是编程，本质上是一种工作方式。这就是氛围工作法——一种AI时代的先进工作方法。通过Vibe Working，哪怕您没有任何编程背景，也可以轻松将自己的创意转化为实实在在的软件或工具。'
    }
  },
  {
    id: 2,
    title: '工具选择方法',
    subtitle: '第二式',
    verse: '选工具先看需求，技术背景要摸透；\nTrae 重中文易上手，Claude 终端协作优；\nCursor 专业强集成，Kiro 结构设计牛；\n没有最好唯最适，不求顶尖求顺手！',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    description: '选择Vibe Coding工具时，关键是明确您的主要需求和技术背景。',
    keyPoints: [
      '根据需求和技术背景选择工具',
      'Trae适合中文环境和初学者',
      'Claude Code适合终端操作和跨文件协作',
      'Cursor适合专业开发者',
      'Kiro适合需要结构化需求文档的场景'
    ],
    details: {
      tools: [
        {
          name: 'Trae',
          description: '字节跳动推出的免费AI编程工具，全中文界面，对国内用户非常友好。',
          pros: ['全中文界面', 'Builder模式和Chat模式', '内置多种AI模型', '无需复杂配置', '适合初学者'],
          cons: ['功能相对基础', '专业功能有限']
        },
        {
          name: 'Claude Code',
          description: 'Anthropic推出的基于命令行的AI编程工具，跨文件理解和协作能力强。',
          pros: ['跨文件理解能力强', '自动分析项目结构', '智能更新相关文件', '适合技术背景强的开发者'],
          cons: ['需要命令行操作', '对初学者不友好']
        },
        {
          name: 'Cursor',
          description: '基于VS Code改造的专业AI编程环境，深度集成GPT-4和Claude等先进模型。',
          pros: ['专业IDE体验', '精准代码补全', '智能调试和重构', '适合专业开发者'],
          cons: ['学习曲线较陡', '需要一定技术基础']
        },
        {
          name: 'Kiro',
          description: '通过Spec模式将需求转化为结构化文档和任务列表，帮助明确项目规划。',
          pros: ['需求结构化', '项目规划清晰', '适合流程规范要求高的场景'],
          cons: ['流程略繁琐', '不适合快速编码']
        }
      ]
    }
  },
  {
    id: 3,
    title: '一件事一个文件夹',
    subtitle: '第三式',
    verse: '独立文件夹，任务不交叉；\n结构层次清，AI思路明！',
    icon: FolderOpen,
    color: 'from-green-500 to-emerald-500',
    description: '一个独立任务，就用一个独立的文件夹来管理。',
    keyPoints: [
      '每个任务使用独立文件夹',
      '清晰的文件夹结构帮助AI理解项目',
      '避免任务交叉和混乱',
      '方便管理和维护'
    ],
    details: {
      principles: [
        '一个逻辑清晰的文件夹结构能为AI提供明确的上下文',
        '让AI助手更准确地理解您的项目结构',
        '使AI更能生成准确的建议和修改',
        '使用IDE工具的第一步，就是创建一个项目专用的文件夹，并"打开文件夹"'
      ],
      examples: [
        '待办事项系统 → 创建"待办事项系统"文件夹',
        '数据分析报告 → 创建"数据分析报告"文件夹',
        '每个项目独立，互不干扰'
      ]
    }
  },
  {
    id: 4,
    title: '使用Markdown与AI交互',
    subtitle: '第四式',
    verse: 'Markdown 语言很简单，AI 协作更高效：\n标题分级更清晰，关键需求更醒目；\n数据整齐又直观，模块之间划分开；\n人机沟通无歧义，Vibe Working效率高！',
    icon: FileText,
    color: 'from-orange-500 to-red-500',
    description: '熟练运用Markdown语言是高效利用AI的基础。',
    keyPoints: [
      'Markdown是带格式的纯文本文件',
      'IDE工具可以直接修改Markdown文件',
      '结构清晰，便于AI理解',
      '学习门槛低，易于掌握'
    ],
    details: {
      syntax: [
        { name: '一级标题', example: '# 标题' },
        { name: '二级标题', example: '## 标题' },
        { name: '无序列表', example: '- 列表项\n* 列表项' },
        { name: '有序列表', example: '1. 列表项1\n2. 列表项2' },
        { name: '加粗文本', example: '**加粗文本** 或 __加粗文本__' },
        { name: '斜体文本', example: '*斜体文本* 或 _斜体文本_' },
        { name: '链接', example: '[链接文本](URL)' },
        { name: '图片', example: '![图片描述](图片URL)' }
      ],
      principles: [
        'Markdown格式最能适应IDE工具的修改方式',
        'txt文件缺乏结构，无法明确区分标题和段落',
        'word文件是二进制编码，无法直接交互',
        'Markdown是最简洁且高效的方式'
      ]
    }
  },
  {
    id: 5,
    title: '应用分类',
    subtitle: '第五式',
    verse: 'Web 轻便浏览器，端分电脑移动端；\n先定类型再开发，AI 生成不跑偏；',
    icon: Globe,
    color: 'from-indigo-500 to-blue-500',
    description: '在开发应用前，要先确定自己要开发的是哪一类软件。',
    keyPoints: [
      'Web端应用：通过浏览器访问',
      '客户端应用：分为电脑客户端和移动端',
      '每种类型有特定的开发环境和工具',
      '选择合适的技术栈对性能至关重要'
    ],
    details: {
      comparison: {
        title: '应用类型对比',
        items: [
          {
            name: 'Web端应用',
            description: '通过浏览器访问，无需下载安装。前端技术：HTML、CSS、JavaScript。后端技术：Node.js、Python、PHP、Java等。'
          },
          {
            name: '电脑客户端',
            description: 'PC端应用，如英雄联盟、QQ等。通常用C++、Java、.NET等开发。'
          },
          {
            name: '移动端应用',
            description: 'iOS应用用Swift或Objective-C开发，Android应用用Java或Kotlin开发。'
          }
        ]
      }
    }
  },
  {
    id: 6,
    title: '前后端分离',
    subtitle: '第六式',
    verse: '前端后端职责分，前端界面后逻辑；\n部署独立多端用，并行开发效率高！',
    icon: Split,
    color: 'from-teal-500 to-cyan-500',
    description: '现代应用开发普遍采用"前后端分离"架构。',
    keyPoints: [
      '前端：用户能看到并与之直接交互的部分',
      '后端：处理数据、执行核心逻辑、与数据库交互',
      '前后端通过API通信',
      '可以独立升级和部署'
    ],
    details: {
      concept: '前后端分离架构的协作流程有点像餐厅的运营。前端就像是餐厅的服务员和菜单，负责接待顾客、展示界面、接收输入、展示输出。后端则像是餐厅的厨房，接收订单、处理业务逻辑和计算、与数据库交互。',
      workflow: [
        { step: '用户操作', description: '用户在前端界面进行操作' },
        { step: '发送请求', description: '前端通过API向后端发送请求' },
        { step: '处理逻辑', description: '后端处理业务逻辑，与数据库交互' },
        { step: '返回结果', description: '后端返回处理结果给前端' },
        { step: '展示结果', description: '前端展示结果给用户' }
      ]
    }
  },
  {
    id: 7,
    title: '前端',
    subtitle: '第七式',
    verse: '前端建界面，不碰数据库；\n前端三剑客，分工边界明；\nHTML 筑骨架，CSS 添衣服；\nJS 管行为，交互逻辑强！',
    icon: Layout,
    color: 'from-pink-500 to-rose-500',
    description: '前端是用户能看到并与之直接交互的部分。',
    keyPoints: [
      '前端三剑客：HTML、CSS、JavaScript',
      'HTML负责结构，CSS负责样式，JavaScript负责行为',
      '前端不能直接访问数据库',
      '前端不能处理敏感业务逻辑'
    ],
    details: {
      comparison: {
        title: '前端能力边界',
        items: [
          {
            name: '能做什么',
            description: '创建网页界面和用户交互元素、处理用户输入、发送网络请求、在浏览器中存储少量简单数据'
          },
          {
            name: '不能做什么',
            description: '直接访问或操作数据库、处理敏感或核心的业务逻辑、执行复杂的计算任务、直接操作服务器的文件系统'
          }
        ]
      },
      workflow: [
        { step: 'HTML', description: '超文本标记语言，是网页的骨架。定义页面的基本结构和内容。' },
        { step: 'CSS', description: '层叠样式表，是网页的皮肤与服饰。负责美化页面，控制布局、颜色、字体等视觉效果。' },
        { step: 'JavaScript', description: '是网页的大脑。负责实现所有的交互逻辑和动态功能，让网页"活"起来。' }
      ]
    }
  },
  {
    id: 8,
    title: '后端',
    subtitle: '第八式',
    verse: '后端工作在幕后，逻辑数据一肩挑；\n语言框架选趁手，业务计算安全守',
    icon: Server,
    color: 'from-violet-500 to-purple-500',
    description: '后端是应用程序的"引擎"和"大脑"，负责处理前端无法完成的重任。',
    keyPoints: [
      '处理业务逻辑、数据管理、用户认证、系统安全',
      '使用服务器端语言：Java、Python、PHP、Go等',
      '后端不等于数据存储，存储只是其功能的一部分',
      '还可以处理纯计算、缓存、消息队列等任务'
    ],
    details: {
      workflow: [
        { step: '接收请求', description: '接收来自前端的API请求' },
        { step: '处理业务逻辑', description: '执行核心业务逻辑和计算' },
        { step: '数据交互', description: '与数据库进行数据交互' },
        { step: '安全验证', description: '进行用户认证和权限验证' },
        { step: '返回响应', description: '将处理结果返回给前端' }
      ]
    }
  },
  {
    id: 9,
    title: '数据存储',
    subtitle: '第九式',
    verse: '数据存储两条路，文件简单库强大；\n安全意识很重要，结构规范要记牢；\n数据查询不用怕，AI帮你写SQL；\n后端接口传指令，增删改查自运行！',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    description: '数据需要被持久化保存，常见方式包括数据库和文件存储。',
    keyPoints: [
      '本地存储：简单易用，但难以共享和进行复杂查询',
      '数据库：功能强大的"智能Excel表格"',
      '数据库结构：库、表、字段、记录',
      '使用SQL语言进行数据操作'
    ],
    details: {
      comparison: {
        title: '存储方式对比',
        items: [
          {
            name: '文件存储',
            description: '将数据保存在本地文件中（如JSON、CSV格式）。简单易用，但难以共享和进行复杂查询，存在并发问题和数据丢失风险。'
          },
          {
            name: '数据库',
            description: '专门为高效管理大量数据而设计的系统。常见数据库：MySQL、SQLite、PostgreSQL、Oracle等。支持主键、索引、加锁等机制。'
          }
        ]
      },
      workflow: [
        { step: '库（Database）', description: '存放多个表的容器' },
        { step: '表（Table）', description: '存储特定类型数据的基本单位（如"用户表"）' },
        { step: '字段（Field/Column）', description: '表的列，定义数据的属性（如"姓名"、"年龄"）和格式' },
        { step: '记录（Record/Row）', description: '表中的行，是具体的一条数据' },
        { step: '主键（Primary Key）', description: '表中每行数据的唯一标识，不可重复，不能为空' },
        { step: 'SQL操作', description: '使用SELECT（查询）、INSERT（插入）、UPDATE（更新）、DELETE（删除）操作数据' }
      ]
    }
  },
  {
    id: 10,
    title: '数据处理流程',
    subtitle: '第十式',
    verse: 'OLTP 忙生产，实时事务处理强；\nETL 是搬运工，清洗转换入数仓；\nOLAP 深分析，洞察决策有方向；\n三者协作流水线，数据驱动自闭环！',
    icon: Workflow,
    color: 'from-emerald-500 to-teal-500',
    description: '一个典型的数据处理流程包含三个核心概念：OLTP、ETL、OLAP。',
    keyPoints: [
      'OLTP：负责处理日常的业务操作，是数据的生产者',
      'ETL：负责将OLTP系统中的数据清洗和转换，传输到数据仓库',
      'OLAP：基于数据仓库进行复杂的分析和查询，支持商业决策',
      '数据在OLTP中产生，通过ETL整理，最后在OLAP中被分析使用'
    ],
    details: {
      workflow: [
        { step: 'OLTP（联机事务处理）', description: '负责处理日常的业务操作，如下单、支付、注册。特点是大量、并发、快速的小事务操作，是数据的生产者。' },
        { step: 'ETL（提取、转换、加载）', description: '负责将OLTP系统中分散的、原始的、杂乱的数据，经过清洗和转换，变成整洁、统一的格式，然后传输到数据仓库。' },
        { step: 'OLAP（联机分析处理）', description: '基于数据仓库中的整洁数据，进行复杂的、多维度的分析和查询，生成报表和洞察，支持商业决策，是数据的消费者。' }
      ]
    }
  },
  {
    id: 11,
    title: '数据分析理论',
    subtitle: '第十一式',
    verse: '数据分析多维看，上卷下钻挖根因；\n洞察数据做决策，业务赋能价值深！',
    icon: BarChart3,
    color: 'from-cyan-500 to-blue-500',
    description: '从多角度分析数据，从而获取有价值的洞察。',
    keyPoints: [
      '时间维度：分析趋势和周期',
      '地理或区域维度：分析不同地区之间的差异',
      '用户或客户维度：用户画像分析',
      '产品或商品维度：产品表现分析',
      '渠道或来源维度：流量来源分析',
      '行为或事件维度：用户动作分析'
    ],
    details: {
      workflow: [
        { step: '单一维度分析', description: '只关注一个维度，例如查看年销售额的趋势' },
        { step: '交叉分析', description: '结合多个维度来获得更深入的见解，比如同时考虑"时间×产品"' },
        { step: '下钻或上卷', description: '在维度的不同粒度之间切换，例如从"年"下钻到"月"，或者从"中国"下钻到"北京"' }
      ],
      principles: [
        '紧扣业务目标：明确您想要解决的问题',
        '确保数据的可得性：是否有这些维度的数据可供分析',
        '避免过度复杂：通常建议同时分析的维度不超过三个'
      ]
    }
  },
  {
    id: 12,
    title: 'BMAD方法论',
    subtitle: '第十二式',
    verse: 'BMAD 框架新，AI 团队分工明；\n分析师来定方向，产品经理编文档；\n架构师设计蓝图，开发师再写代码；\n测试负责保质量，敏捷教练促流程；\n人类担任 CEO，AI 团队高效跑！',
    icon: Users,
    color: 'from-rose-500 to-pink-500',
    description: '突破性敏捷AI驱动开发（Breakthrough Method of Agile AI-driven Development）。',
    keyPoints: [
      '让使用者成为"Vibe CEO"，指挥一个由多个专业AI角色构成的虚拟研发团队',
      '实现专业化分工与协作',
      '每个AI角色有明确的职责和工作流程',
      '极简工作流程：analyst → pm → architect → dev → qa',
      '在Trae、Cursor等IDE中轻松安装和使用'
    ],
    details: {
      concept: 'BMAD是一套突破性的敏捷AI驱动开发方法论，通过多个专业化的AI代理角色，模拟真实软件开发团队的协作流程。使用者成为"Vibe CEO"，指挥整个虚拟研发团队，实现高效的软件开发。',
      installation: [
        {
          step: '打开IDE工具',
          description: '在Trae、Cursor等AI编程工具中打开您的项目文件夹。确保已经为项目创建了独立的文件夹。'
        },
        {
          step: '在终端中安装BMAD',
          description: '在IDE底部打开终端（Terminal），输入以下命令安装BMAD技能包。',
          command: 'npx bmad-method install'
        },
        {
          step: '或者在Chat窗口安装',
          description: '如果不熟悉终端操作，也可以直接在IDE的Chat对话窗口中输入："帮我安装BMAD方法论"，AI会自动执行安装步骤。'
        },
        {
          step: '验证安装',
          description: '安装完成后，项目根目录会出现.bmad文件夹和配置文件。可以在Chat窗口输入"@analyst"测试是否安装成功。'
        },
        {
          step: '开始使用',
          description: '通过@角色名的方式调用不同的BMAD角色。例如：在Chat窗口输入"@analyst 帮我分析一下待办应用的市场"，或"@pm 制定产品开发计划"。'
        },
        {
          step: '工作流程',
          description: '按照分析→规划→设计→开发→测试的流程，依次使用@analyst、@pm、@architect、@dev、@qa等角色，让AI团队协作完成项目开发。'
        }
      ],
      roles: [
        { name: 'BMAD Orchestrator', description: '负责工作流协调、多代理任务以及角色切换指导', category: '编排层' },
        { name: 'BMAD Master', description: '具备综合专业知识，能够执行一次性任务', category: '编排层' },
        { name: 'BMAD Analyst', description: '负责市场研究、竞争分析和项目发现', category: '核心开发团队' },
        { name: 'BMAD PM', description: '主导产品战略、功能优先级和路线图规划', category: '核心开发团队' },
        { name: 'BMAD PO', description: '管理待办事项、细化故事和制定验收标准', category: '核心开发团队' },
        { name: 'BMAD Architect', description: '负责系统设计、架构文档和技术选型', category: '核心开发团队' },
        { name: 'BMAD Dev', description: '进行代码实现、调试和重构', category: '核心开发团队' },
        { name: 'BMAD QA', description: '专注于测试架构和质量保证', category: '核心开发团队' },
        { name: 'BMAD SM', description: '负责故事创建、史诗管理和敏捷流程指导', category: '流程支持团队' },
        { name: 'BMAD UX', description: '专注于UI/UX设计、线框图和用户体验优化', category: '流程支持团队' }
      ],
      workflow: [
        { step: '@analyst', description: '市场分析' },
        { step: '@pm', description: '产品规划' },
        { step: '@architect', description: '架构设计' },
        { step: '@dev', description: '代码实现' },
        { step: '@qa', description: '质量测试（可选）' }
      ]
    }
  }
];

