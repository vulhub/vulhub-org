import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Info, ArrowRight, Github } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Getting Started with Vulhub</h1>
        <p className="text-slate-600 mb-8">
          Follow this guide to set up and run your first vulnerable environment with Vulhub. All environments are
          containerized with Docker, making them easy to deploy and isolate.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <div className="flex">
            <Info className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-blue-800 font-medium">Prerequisites</h3>
              <p className="text-blue-700">
                Before you begin, make sure you have Docker and Docker Compose installed on your system. Vulhub
                environments are designed to run in isolated containers.
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="quickstart" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            <TabsTrigger value="docker">Docker Setup</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Usage</TabsTrigger>
          </TabsList>
          <TabsContent value="quickstart" className="p-4 border rounded-md mt-2">
            <h2 className="text-xl font-semibold mb-4">Quick Start Guide</h2>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                <div>
                  <h3 className="font-medium">Clone the repository</h3>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 overflow-x-auto">
                    <code>git clone https://github.com/vulhub/vulhub.git</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                <div>
                  <h3 className="font-medium">Choose a vulnerability environment</h3>
                  <p className="text-slate-600 mt-1">
                    Browse the repository and select a vulnerability you want to explore. Each directory represents a
                    different vulnerable application.
                  </p>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 overflow-x-auto">
                    <code>cd vulhub/flask/ssti</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                <div>
                  <h3 className="font-medium">Start the environment</h3>
                  <p className="text-slate-600 mt-1">
                    Use Docker Compose to build and start the vulnerable environment.
                  </p>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 overflow-x-auto">
                    <code>docker-compose up -d</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                <div>
                  <h3 className="font-medium">Access the application</h3>
                  <p className="text-slate-600 mt-1">
                    Once the environment is running, access the vulnerable application through your browser.
                  </p>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 overflow-x-auto">
                    <code>http://your-ip-address:8000</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  5
                </span>
                <div>
                  <h3 className="font-medium">Explore and learn</h3>
                  <p className="text-slate-600 mt-1">
                    Follow the documentation in the README file to understand and exploit the vulnerability.
                  </p>
                </div>
              </li>
            </ol>
          </TabsContent>
          <TabsContent value="docker" className="p-4 border rounded-md mt-2">
            <h2 className="text-xl font-semibold mb-4">Docker Setup</h2>
            <div className="space-y-4">
              <p className="text-slate-600">
                Vulhub requires Docker and Docker Compose to run. Follow these instructions to set up Docker on your
                system.
              </p>

              <h3 className="font-medium mt-4">Install Docker</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Linux</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-slate-800 text-slate-100 p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh`}</code>
                    </pre>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">macOS</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-2">
                      Download and install Docker Desktop from the official website.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://www.docker.com/products/docker-desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download Docker Desktop
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <h3 className="font-medium mt-4">Install Docker Compose</h3>
              <p className="text-slate-600">
                Docker Compose is included with Docker Desktop for macOS and Windows. For Linux:
              </p>
              <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 overflow-x-auto">
                <code>{`sudo curl -L "https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose`}</code>
              </pre>

              <h3 className="font-medium mt-4">Verify Installation</h3>
              <p className="text-slate-600">Verify that Docker and Docker Compose are installed correctly:</p>
              <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 overflow-x-auto">
                <code>{`docker --version
docker-compose --version`}</code>
              </pre>
            </div>
          </TabsContent>
          <TabsContent value="advanced" className="p-4 border rounded-md mt-2">
            <h2 className="text-xl font-semibold mb-4">Advanced Usage</h2>
            <div className="space-y-4">
              <h3 className="font-medium">Managing Environments</h3>
              <p className="text-slate-600">Here are some useful commands for managing your Vulhub environments:</p>
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Stop an environment</h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 overflow-x-auto">
                    <code>docker-compose down</code>
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Rebuild an environment</h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 overflow-x-auto">
                    <code>docker-compose build --no-cache</code>
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium">View logs</h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 overflow-x-auto">
                    <code>docker-compose logs -f</code>
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium">Access a container's shell</h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 overflow-x-auto">
                    <code>docker-compose exec [service_name] bash</code>
                  </pre>
                </div>
              </div>

              <h3 className="font-medium mt-4">Customizing Environments</h3>
              <p className="text-slate-600">
                You can customize environments by modifying the docker-compose.yml file. This allows you to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>Change exposed ports</li>
                <li>Add persistent volumes</li>
                <li>Modify environment variables</li>
                <li>Link with other containers</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <div className="flex">
                  <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-yellow-800 font-medium">Security Warning</h3>
                    <p className="text-yellow-700">
                      Remember that these environments contain real vulnerabilities. Always run them in isolated
                      networks and never expose them to the internet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="border rounded-lg p-6 bg-slate-50">
          <h2 className="text-xl font-semibold mb-4">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/environments"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                Browse Environments
                <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Explore our collection of pre-built vulnerable environments.
              </p>
            </Link>
            <Link
              href="/docs"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                Read Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">Learn more about how to use Vulhub effectively.</p>
            </Link>
            <a
              href="https://github.com/vulhub/vulhub"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                Contribute on GitHub
                <Github className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">Help improve Vulhub by contributing to the project.</p>
            </a>
            <Link
              href="/about"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                About the Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">Learn about the history and mission of Vulhub.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

