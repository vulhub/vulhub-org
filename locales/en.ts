export default {
  hello: "Hello",
  "hello.world": "Hello world!",
  welcome: "Hello {name}!",
  
  // Homepage
  title: "Vulhub - Open-Source Vulnerable Docker Environments",
  subtitle: "Vulhub is an open-source collection of pre-built vulnerable docker environments for security researchers and educators.",
  exploreEnvironments: "Explore Environments",
  github: "GitHub",
  stats: {
    stars: "18.4k+ Stars",
    forks: "4.5k+ Forks",
    environments: "{count} Environments"
  },
  codeSnippet: {
    cloneRepo: "# Clone the repository",
    enterDir: "# Enter the directory",
    startEnv: "# Start the environment"
  },
  whyUseVulhub: "Why Use Vulhub?",
  features: {
    dockerBased: {
      title: "Docker Based",
      description: "All environments are built with Docker and Docker Compose, making them easy to deploy and isolate."
    },
    realVulnerabilities: {
      title: "Real Vulnerabilities",
      description: "Practice with real-world vulnerabilities in a safe, controlled environment for learning and research."
    },
    wellDocumented: {
      title: "Well Documented",
      description: "Each vulnerability comes with detailed documentation explaining the vulnerability and exploitation steps."
    }
  },
  latestEnvironments: "Latest Environments",
  viewAllEnvironments: "View all environments",
  environmentCard: {
    exploreAndLearn: "Explore the {name} vulnerability and learn how to exploit it.",
    learnMore: "Learn more",
    na: "N/A"
  },
  cta: {
    ready: "Ready to start your security research?",
    description: "Explore our collection of vulnerable environments and enhance your security skills today.",
    getStarted: "Get Started",
    starOnGithub: "Star on GitHub"
  }
} as const;
