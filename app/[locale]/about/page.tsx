import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, Award, Heart, Box, Bug, BookOpen } from "lucide-react";
import { Github } from "@/components/icons";
import { Metadata } from "next";
import { getI18n } from "@/locales/server";

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const t = await getI18n();
  
  return {
    title: t('about.meta.title'),
    description: t('about.meta.description'),
    keywords: ["vulhub", "about", "team", "project history", "contribute", "open source", "security education"],
    openGraph: {
      title: t('about.meta.title'),
      description: t('about.meta.description'),
      type: "website",
    },
  };
}

export default async function AboutPage({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}) {
  const t = await getI18n();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('about.title')}</h1>

        <div className="max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            {t('about.introduction')}
          </p>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.mission.title')}</h2>
            <p className="text-slate-600">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.features.title')}</h2>
            <div className="grid gap-6">
              <div className="flex items-start p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
                  <Box className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t('about.features.dockerBased.title')}</h3>
                  <p className="text-slate-600 mt-1">
                    {t('about.features.dockerBased.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-md flex items-center justify-center mr-4">
                  <Bug className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t('about.features.realVulnerabilities.title')}</h3>
                  <p className="text-slate-600 mt-1">
                    {t('about.features.realVulnerabilities.description')}
                  </p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center mr-4">
                  <BookOpen className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{t('about.features.wellDocumented.title')}</h3>
                  <p className="text-slate-600 mt-1">
                    {t('about.features.wellDocumented.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.history.title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('about.history.p1')}
            </p>
            <p className="text-slate-600">
              {t('about.history.p2')}
            </p>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.team.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/contributors/phith0n.png"
                    alt="phith0n"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{t('about.team.members.phith0n.name')}</h3>
                <p className="text-sm text-slate-500">{t('about.team.members.phith0n.role')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/contributors/ar3h.jpg"
                    alt="Ar3h"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{t('about.team.members.ar3h.name')}</h3>
                <p className="text-sm text-slate-500">{t('about.team.members.ar3h.role')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <Image
                    src="/contributors/xcxmiku.jpg"
                    alt="小晨曦"
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{t('about.team.members.xcxmiku.name')}</h3>
                <p className="text-sm text-slate-500">{t('about.team.members.xcxmiku.role')}</p>
              </div>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.contributing.title')}</h2>
            <p className="text-slate-600 mb-4">
              {t('about.contributing.description')}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <Button asChild>
                <a
                  href="https://github.com/vulhub/vulhub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  {t('about.contributing.github')}
                </a>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://discord.gg/bQCpZEK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('about.contributing.contact')}
                </Link>
              </Button>
            </div>
          </div>

          <div className="my-8">
            <h2 className="text-2xl font-semibold mb-4">{t('about.license.title')}</h2>
            <p className="text-slate-600">
              {t('about.license.description')}
            </p>
            <div className="bg-slate-50 p-4 rounded-md mt-4 text-sm font-mono">
              <p className="mb-4">The MIT License</p>
              <p className="mb-4">
                Copyright (c) 2017-{currentYear},{" "}
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
