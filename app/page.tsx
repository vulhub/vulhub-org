import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, BookOpen, Database, Shield, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Vulhub
              </h1>
              <p className="text-xl text-slate-300">
                Vulhub is an open-source collection of pre-built vulnerable docker environments for security researchers
                and educators.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/environments">Explore Environments</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <a href="https://github.com/vulhub/vulhub" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    GitHub
                  </a>
                </Button>
              </div>
              <div className="flex items-center text-slate-400 text-sm">
                <Shield className="mr-2 h-4 w-4" />
                <span>18.4k+ Stars</span>
                <span className="mx-2">•</span>
                <span>4.5k+ Forks</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-xl">
                <pre className="text-green-400 overflow-x-auto">
                  <code>
                    {`# Clone the repository
git clone https://github.com/vulhub/vulhub.git

# Enter the directory
cd vulhub/flask/ssti

# Start the environment
docker-compose up -d`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Use Vulhub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Database className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Docker-Based</h3>
              <p className="text-slate-600">
                All environments are built with Docker and Docker Compose, making them easy to deploy and isolate.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Vulnerabilities</h3>
              <p className="text-slate-600">
                Practice with real-world vulnerabilities in a safe, controlled environment for learning and research.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="bg-purple-100 text-purple-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Well Documented</h3>
              <p className="text-slate-600">
                Each vulnerability comes with detailed documentation explaining the vulnerability and exploitation
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Environments Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Environments</h2>
            <Link href="/environments" className="text-blue-600 hover:text-blue-800 flex items-center">
              View all environments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularEnvironments.map((env) => (
              <div
                key={env.id}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-red-100 text-red-800">
                      {env.category}
                    </span>
                    <span className="text-xs text-slate-500">{env.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{env.title}</h3>
                  <p className="text-slate-600 mb-4">{env.description}</p>
                  <div className="flex justify-between items-center">
                    <Link href={`/environments/${env.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      Learn more
                    </Link>
                    <div className="flex items-center text-slate-500 text-sm">
                      <span className="bg-slate-100 px-2 py-1 rounded">CVE-{env.cve}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your security research?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Explore our collection of vulnerable environments and enhance your security skills today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/getting-started">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="https://github.com/vulhub/vulhub" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

const popularEnvironments = [
  {
    id: "flask-ssti",
    title: "Flask Server-Side Template Injection",
    description: "Explore the SSTI vulnerability in Flask applications and learn how to exploit it.",
    category: "Web Application",
    cve: "2019-8341",
    date: "Updated 3 days ago",
  },
  {
    id: "apache-log4j",
    title: "Apache Log4j Remote Code Execution",
    description: "Practice exploiting the critical Log4Shell vulnerability that affected millions of applications.",
    category: "RCE",
    cve: "2021-44228",
    date: "Updated 2 months ago",
  },
  {
    id: "spring-rce",
    title: "Spring Framework RCE",
    description: "Learn about remote code execution vulnerabilities in the Spring Framework.",
    category: "RCE",
    cve: "2022-22965",
    date: "Updated 1 month ago",
  },
  {
    id: "coldfusion-rce",
    title: "ColdFusion Remote Code Execution",
    description: "Explore vulnerabilities in Adobe ColdFusion that allow for remote code execution.",
    category: "RCE",
    cve: "2023-26360",
    date: "Updated 2 months ago",
  },
  {
    id: "apache-struts2",
    title: "Apache Struts2 Remote Code Execution",
    description: "Practice with the infamous Struts2 vulnerability that led to major data breaches.",
    category: "Web Application",
    cve: "2017-5638",
    date: "Updated 6 months ago",
  },
  {
    id: "wordpress-rce",
    title: "WordPress Plugin Vulnerabilities",
    description: "Explore common security issues in WordPress plugins and how they can be exploited.",
    category: "CMS",
    cve: "2021-24867",
    date: "Updated 4 months ago",
  },
]

