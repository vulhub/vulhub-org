export default {
  hello: "你好",
  "hello.world": "你好，世界！",
  welcome: "你好，{name}！",
  
  // 首页
  title: "Vulhub - 开源的漏洞Docker环境",
  subtitle: "Vulhub是一个面向安全研究人员和教育工作者的开源预构建漏洞Docker环境集合。",
  exploreEnvironments: "探索环境",
  github: "GitHub",
  stats: {
    stars: "18.4k+ 星标",
    forks: "4.5k+ 复刻",
    environments: "{count} 个环境"
  },
  codeSnippet: {
    cloneRepo: "# 克隆仓库",
    enterDir: "# 进入目录",
    startEnv: "# 启动环境"
  },
  whyUseVulhub: "为什么使用Vulhub？",
  features: {
    dockerBased: {
      title: "基于Docker",
      description: "所有环境都是用Docker和Docker Compose构建的，使其易于部署和隔离。"
    },
    realVulnerabilities: {
      title: "真实漏洞",
      description: "在安全、受控的环境中练习真实世界的漏洞，用于学习和研究。"
    },
    wellDocumented: {
      title: "详尽文档",
      description: "每个漏洞都附有详细的文档，解释漏洞和利用步骤。"
    }
  },
  latestEnvironments: "最新环境",
  viewAllEnvironments: "查看所有环境",
  environmentCard: {
    exploreAndLearn: "探索{name}漏洞并学习如何利用它。",
    learnMore: "了解更多",
    na: "暂无"
  },
  cta: {
    ready: "准备开始您的安全研究了吗？",
    description: "立即探索我们的漏洞环境集合，提升您的安全技能。",
    getStarted: "开始使用",
    starOnGithub: "在GitHub上点赞"
  }
} as const;
