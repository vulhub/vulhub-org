import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Users, Award, Heart, Box, Bug, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About Vulhub</h1>

        <div className="prose max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Vulhub is an open-source collection of pre-built vulnerable docker
            environments. It's designed to be an easy-to-use platform for
            security researchers, educators, and students to learn about,
            practice, and teach vulnerability assessment and exploitation.
          </p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-slate-600">
              Our mission is to make security education accessible to everyone.
              By providing pre-built vulnerable environments, we aim to lower
              the barrier to entry for security research and education. We
              believe that understanding vulnerabilities is the first step to
              building more secure software.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <div className="grid gap-6">
              <div className="flex items-start p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                  <Box className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Docker Based</h3>
                  <p className="text-slate-600 mt-1">
                    All environments are built with Docker and Docker Compose,
                    making them easy to deploy and isolate.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-4">
                  <Bug className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Real Vulnerabilities</h3>
                  <p className="text-slate-600 mt-1">
                    Practice with real-world vulnerabilities in a safe,
                    controlled environment for learning and research.
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Well Documented</h3>
                  <p className="text-slate-600 mt-1">
                    Each vulnerability comes with detailed documentation
                    explaining the vulnerability and exploitation steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Project History</h2>
            <p className="text-slate-600 mb-4">
              Vulhub was created in 2017 by a group of security researchers who
              wanted to make it easier for people to learn about and practice
              exploiting vulnerabilities in a safe, controlled environment.
            </p>
            <p className="text-slate-600">
              Since then, the project has grown to include over 100 different
              vulnerable environments, covering a wide range of technologies and
              vulnerability types. It has been used by thousands of security
              professionals, educators, and students around the world.
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <Image
                      src={member.avatar || "/logo/512x512.png"}
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
              Vulhub is an open-source project, and we welcome contributions
              from everyone. Whether you're fixing a bug, adding a new
              vulnerable environment, or improving documentation, your help is
              appreciated.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <a
                  href="https://github.com/vulhub/vulhub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Contribute on GitHub
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://discord.gg/bQCpZEK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">License</h2>
            <p className="text-slate-600">
              Vulhub is released under the MIT License. This means you are free
              to use, modify, and distribute the project, as long as you include
              the original copyright notice.
            </p>
            <div className="bg-slate-50 p-4 rounded-md mt-4 text-sm font-mono">
              <p className="mb-4">The MIT License</p>
              <p className="mb-4">
                Copyright (c) 2017-{new Date().getFullYear()},{" "}
                <a
                  href="https://www.leavesongs.com"
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  phith0n
                </a>{" "}
                and Vulhub contributors
              </p>
              <p className="mb-4">
                Permission is hereby granted, free of charge, to any person
                obtaining a copy of this software and associated documentation
                files (the "Software"), to deal in the Software without
                restriction, including without limitation the rights to use,
                copy, modify, merge, publish, distribute, sublicense, and/or
                sell copies of the Software, and to permit persons to whom the
                Software is furnished to do so, subject to the following
                conditions:
              </p>
              <p className="mb-4">
                The above copyright notice and this permission notice shall be
                included in all copies or substantial portions of the Software.
              </p>
              <p className="mb-4">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
                OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
                NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
                HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
                WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
                FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                OTHER DEALINGS IN THE SOFTWARE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: "phith0n",
    role: "Project Lead",
    avatar: "/contributors/phith0n.png",
  },
  {
    name: "Ar3h",
    role: "Founder of Java-Chains",
    avatar: "/contributors/ar3h.jpg",
  },
  {
    name: "小晨曦",
    role: "Core Contributor",
    avatar: "/contributors/xcxmiku.jpg",
  },
];
