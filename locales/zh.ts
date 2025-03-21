export default {
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
  },
  
  // 入门页面
  gettingStarted: {
    title: "Vulhub入门指南",
    description: "按照本指南设置并运行您的第一个Vulhub漏洞环境。所有环境都使用Docker容器化，使其易于部署和隔离。",
    meta: {
      title: "入门指南 | Vulhub",
      description: "学习如何使用Vulhub设置和运行您的第一个漏洞环境，Vulhub是一个开源的预构建漏洞Docker环境集合"
    },
    prerequisites: {
      title: "前提条件",
      description: "在开始之前，请确保您的系统上已安装Docker。Vulhub环境设计为在隔离的容器中运行。"
    },
    tabs: {
      dockerSetup: "Docker设置",
      quickStart: "快速入门",
      advanced: "高级用法"
    },
    dockerSetup: {
      title: "Docker设置",
      description: "Vulhub需要Docker才能运行。按照以下说明在您的系统上设置Docker。",
      install: "安装Docker",
      linux: "Linux",
      linuxDesc: "使用便捷脚本安装Docker：",
      macosWindows: "MacOS和Windows",
      macosWindowsDesc: "从官方网站下载并安装Docker Desktop。",
      downloadDocker: "下载Docker Desktop",
      verifyInstall: "验证安装",
      verifyDesc: "验证Docker是否正确安装：",
      composeDesc: "还要验证Docker Compose是否可用：",
      composeWarning: "如果找不到compose命令，您可能使用的是较旧版本的Docker。请升级到最新版本的Docker，其中包含Docker Compose作为内置命令。"
    },
    quickStart: {
      title: "快速入门指南",
      steps: {
        clone: {
          step: "克隆仓库",
        },
        choose: {
          step: "选择漏洞环境",
          desc: "浏览仓库并选择您想要探索的漏洞。每个目录代表一个不同的漏洞应用程序。"
        },
        start: {
          step: "启动环境",
          desc: "使用Docker Compose构建并启动漏洞环境。"
        },
        access: {
          step: "访问应用程序",
          desc: "环境运行后，通过浏览器访问漏洞应用程序。"
        },
        explore: {
          step: "探索和学习",
          desc: "按照README文件中的文档理解和利用漏洞。"
        }
      }
    },
    advanced: {
      title: "高级用法",
      managing: {
        title: "管理环境",
        description: "以下是一些用于管理Vulhub环境的有用命令：",
        stop: "停止环境",
        rebuild: "重建环境",
        logs: "查看日志",
        shell: "访问容器的shell"
      },
      customizing: {
        title: "定制环境",
        description: "您可以通过修改docker-compose.yml文件来定制环境。这允许您：",
        options: [
          "更改暴露的端口",
          "添加持久卷",
          "修改环境变量",
          "与其他容器链接"
        ]
      },
      securityWarning: {
        title: "安全警告",
        description: "请记住，这些环境包含真实的漏洞。始终在隔离的网络中运行它们，绝不要将它们暴露在互联网上。"
      }
    },
    nextSteps: {
      title: "后续步骤",
      browseEnvironments: {
        title: "浏览环境",
        description: "探索我们的预构建漏洞环境集合。"
      },
      joinCommunity: {
        title: "加入我们的社区",
        description: "在Vulhub Discord社区中与其他安全研究人员交流。"
      },
      contribute: {
        title: "在GitHub上贡献",
        description: "通过参与项目来帮助改进Vulhub。"
      },
      about: {
        title: "关于项目",
        description: "了解Vulhub的历史和使命。"
      }
    }
  },
  
  // 环境页面
  environments: {
    title: "漏洞环境",
    description: "浏览我们的预构建漏洞环境集合，用于安全研究和教育。每个环境都使用Docker容器化，并配有详细的文档。",
    meta: {
      title: "漏洞环境 | Vulhub",
      description: "浏览我们的预构建漏洞环境集合，按技术和漏洞类型组织，用于安全研究和教育"
    },
    searchForm: {
      allTags: "所有类别",
      searchPlaceholder: "搜索环境...",
      searchButton: "搜索"
    },
    results: {
      count: "{count} 个结果",
      for: "搜索",
      in: "分类",
      noResults: "没有找到符合您条件的环境。",
      clearFilters: "清除筛选条件",
      moreTag: "还有 {count} 个"
    },
    viewAll: "查看全部 {count} 个 {tag} 环境"
  }
} as const;
