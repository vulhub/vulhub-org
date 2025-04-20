export default {
  hello: "Hello",
  "hello.world": "Hello world!",
  welcome: "Hello {name}!",
  
  // Common UI elements
  navigation: {
    home: "Home",
    gettingStarted: "Getting Started",
    environments: "Environments",
    documentation: "Documentation",
    about: "About",
    github: "GitHub",
    languageSwitcher: "Change language"
  },

  footer: {
    resources: "Resources",
    allEnvironments: "All Environments",
    gettingStarted: "Getting Started",
    githubRepo: "GitHub Repository",
    about: "About",
    aboutVulhub: "About Vulhub",
    contributors: "Contributors",
    mitLicense: "MIT License",
    contact: "Contact",
  },
  
  // Documentation
  documentation: {
    title: "Documentation",
    previous: "Previous",
    next: "Next",
    redirecting: "Redirecting...",
    notFound: {
      title: "Document Not Found",
      description: "The requested documentation page could not be found"
    }
  },
  
  // Homepage
  title: "Vulhub - Open-Source Vulnerable Docker Environments",
  subtitle: "Vulhub is an open-source collection of pre-built vulnerable docker environments for security researchers and educators.",
  exploreEnvironments: "Explore Environments",
  github: "GitHub",
  stats: {
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
  },
  
  // Getting Started Page
  gettingStarted: {
    title: "Getting Started with Vulhub",
    description: "Follow this guide to set up and run your first vulnerable environment with Vulhub. All environments are containerized with Docker, making them easy to deploy and isolate.",
    meta: {
      title: "Getting Started | Vulhub",
      description: "Learn how to set up and run your first vulnerable environment with Vulhub, an open-source collection of pre-built vulnerable docker environments"
    },
    prerequisites: {
      title: "Prerequisites",
      description: "Before you begin, make sure you have Docker installed on your system. Vulhub environments are designed to run in isolated containers."
    },
    tabs: {
      dockerSetup: "Docker Setup",
      quickStart: "Quick Start",
      advanced: "Advanced Usage"
    },
    dockerSetup: {
      title: "Docker Setup",
      description: "Vulhub requires Docker to run. Follow these instructions to set up Docker on your system.",
      install: "Install Docker",
      linux: "Linux",
      linuxDesc: "Install Docker using the convenience script:",
      macosWindows: "MacOS & Windows",
      macosWindowsDesc: "Download and install Docker Desktop from the official website.",
      downloadDocker: "Download Docker Desktop",
      verifyInstall: "Verify Installation",
      verifyDesc: "Verify that Docker is installed correctly:",
      composeDesc: "Also verify that Docker Compose is available:",
      composeWarning: "If the compose command is not found, you may be using an older version of Docker. Please upgrade to the latest version of Docker which includes Docker Compose as a built-in command."
    },
    quickStart: {
      title: "Quick Start Guide",
      steps: {
        clone: {
          step: "Clone the repository",
        },
        choose: {
          step: "Choose a vulnerability environment",
          desc: "Browse the repository and select a vulnerability you want to explore. Each directory represents a different vulnerable application."
        },
        start: {
          step: "Start the environment",
          desc: "Use Docker Compose to build and start the vulnerable environment."
        },
        access: {
          step: "Access the application",
          desc: "Once the environment is running, access the vulnerable application through your browser."
        },
        explore: {
          step: "Explore and learn",
          desc: "Follow the documentation in the README file to understand and exploit the vulnerability."
        }
      }
    },
    advanced: {
      title: "Advanced Usage",
      managing: {
        title: "Managing Environments",
        description: "Here are some useful commands for managing your Vulhub environments:",
        stop: "Stop an environment",
        rebuild: "Rebuild an environment",
        logs: "View logs",
        shell: "Access a container's shell"
      },
      customizing: {
        title: "Customizing Environments",
        description: "You can customize environments by modifying the docker-compose.yml file. This allows you to:",
        options: [
          "Change exposed ports",
          "Add persistent volumes",
          "Modify environment variables",
          "Link with other containers"
        ]
      },
      securityWarning: {
        title: "Security Warning",
        description: "Remember that these environments contain real vulnerabilities. Always run them in isolated networks and never expose them to the internet."
      }
    },
    nextSteps: {
      title: "Next Steps",
      browseEnvironments: {
        title: "Browse Environments",
        description: "Explore our collection of pre-built vulnerable environments."
      },
      joinCommunity: {
        title: "Join Our Community",
        description: "Connect with other security researchers in the Vulhub Discord community."
      },
      contribute: {
        title: "Contribute on GitHub",
        description: "Help improve Vulhub by contributing to the project."
      },
      about: {
        title: "About the Project",
        description: "Learn about the history and mission of Vulhub."
      }
    }
  },
  
  // Environments Page
  environments: {
    title: "Vulnerable Environments",
    description: "Browse our collection of pre-built vulnerable environments for security research and education. Each environment is containerized with Docker and comes with detailed documentation.",
    meta: {
      title: "Vulnerable Environments | Vulhub",
      description: "Browse our collection of pre-built vulnerable environments for security research and education, organized by technology and vulnerability type"
    },
    searchForm: {
      allTags: "All Categories",
      searchPlaceholder: "Search environments...",
      searchButton: "Search"
    },
    results: {
      count: "{count} Results",
      for: "for",
      in: "in",
      noResults: "No environments found matching your criteria.",
      clearFilters: "Clear filters",
      moreTag: "+{count} more"
    },
    viewAll: "View all {count} {tag} environments"
  },
  
  // About Page
  about: {
    title: "About Vulhub",
    meta: {
      title: "About Vulhub | Project History and Team",
      description: "Learn about the Vulhub project, our mission, team members, and how to contribute to this open-source collection of vulnerable docker environments"
    },
    introduction: "Vulhub is an open-source collection of pre-built vulnerable docker environments. It's designed to be an easy-to-use platform for security researchers, educators, and students to learn about, practice, and teach vulnerability assessment and exploitation.",
    mission: {
      title: "Our Mission",
      description: "Our mission is to make security education accessible to everyone. By providing pre-built vulnerable environments, we aim to lower the barrier to entry for security research and education. We believe that understanding vulnerabilities is the first step to building more secure software."
    },
    features: {
      title: "Key Features",
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
    history: {
      title: "Project History",
      p1: "Vulhub was created in 2017 by a group of security researchers who wanted to make it easier for people to learn about and practice exploiting vulnerabilities in a safe, controlled environment.",
      p2: "Since then, the project has grown to include over 100 different vulnerable environments, covering a wide range of technologies and vulnerability types. It has been used by thousands of security professionals, educators, and students around the world."
    },
    team: {
      title: "Our Team",
      members: {
        phith0n: {
          name: "phith0n",
          role: "Project Lead"
        },
        ar3h: {
          name: "Ar3h",
          role: "Founder of Java-Chains"
        },
        xcxmiku: {
          name: "小晨曦",
          role: "Core Contributor"
        }
      }
    },
    contributing: {
      title: "Contributing",
      description: "Vulhub is an open-source project, and we welcome contributions from everyone. Whether you're fixing a bug, adding a new vulnerable environment, or improving documentation, your help is appreciated.",
      github: "Contribute on GitHub",
      contact: "Contact Us"
    },
    license: {
      title: "License",
      description: "Vulhub is released under the MIT License. This means you are free to use, modify, and distribute the project, as long as you include the original copyright notice.",
    }
  }
} as const;
