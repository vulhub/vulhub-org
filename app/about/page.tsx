import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Users, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Vulhub</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Vulhub is an open-source collection of pre-built vulnerable docker environments. It's designed to be an
            easy-to-use platform for security researchers, educators, and students to learn about, practice, and teach
            vulnerability assessment and exploitation.
          </p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-slate-600">
              Our mission is to make security education accessible to everyone. By providing pre-built vulnerable
              environments, we aim to lower the barrier to entry for security research and education. We believe that
              understanding vulnerabilities is the first step to building more secure software.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-4">
              <li className="flex">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium">Docker-Based Environments</h3>
                  <p className="text-slate-600">
                    All environments are containerized with Docker, making them easy to deploy and isolate.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">Community-Driven</h3>
                  <p className="text-slate-600">
                    Vulhub is maintained by a community of security researchers and enthusiasts.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-purple-100 p-2 rounded-full mr-4">
                  <Heart className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium">Educational Focus</h3>
                  <p className="text-slate-600">
                    Each environment comes with documentation explaining the vulnerability and how to exploit it.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Project History</h2>
            <p className="text-slate-600 mb-4">
              Vulhub was created in 2017 by a group of security researchers who wanted to make it easier for people to
              learn about and practice exploiting vulnerabilities in a safe, controlled environment.
            </p>
            <p className="text-slate-600">
              Since then, the project has grown to include over 100 different vulnerable environments, covering a wide
              range of technologies and vulnerability types. It has been used by thousands of security professionals,
              educators, and students around the world.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Contributing</h2>
            <p className="text-slate-600 mb-4">
              Vulhub is an open-source project, and we welcome contributions from everyone. Whether you're fixing a bug,
              adding a new vulnerable environment, or improving documentation, your help is appreciated.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <a href="https://github.com/vulhub/vulhub" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Contribute on GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">License</h2>
            <p className="text-slate-600">
              Vulhub is released under the MIT License. This means you are free to use, modify, and distribute the
              project, as long as you include the original copyright notice.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mt-4 text-sm font-mono">
              <p>MIT License</p>
              <p>Copyright (c) 2017-{new Date().getFullYear()} Vulhub Contributors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const team = [
  {
    name: "phithon",
    role: "Project Lead",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Contributor 2",
    role: "Core Developer",
    avatar: "/placeholder.svg?height=96&width=96",
  },
  {
    name: "Contributor 3",
    role: "Security Researcher",
    avatar: "/placeholder.svg?height=96&width=96",
  },
]

