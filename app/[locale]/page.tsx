import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Shield, ArrowRight, Box, Bug } from "lucide-react";
import { getLatestEnvironments, getAllEnvironments } from "@/lib/environments";
import { Github } from "@/components/icons";
import { RelativeTime } from "@/components/time";
import { Metadata } from "next";
import { getI18n } from '@/locales/server';
import { GithubStats } from "@/components/github-stats";

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  
  return {
    title: t('title'),
    description: t('subtitle'),
    keywords: ["vulhub", "docker", "security", "vulnerability", "CVE", "penetration testing", "cybersecurity"],
    openGraph: {
      title: t('title'),
      description: t('subtitle'),
      type: "website",
    },
  };
}

export default async function Home() {
  const latestEnvironments = getLatestEnvironments();
  const t = await getI18n();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Vulhub
              </h1>
              <p className="text-xl text-slate-300">
                {t('subtitle')}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  <Link href="/environments">{t('exploreEnvironments')}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white hover:bg-white/10 hover:text-white"
                >
                  <a
                    href="https://github.com/vulhub/vulhub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    {t('github')}
                  </a>
                </Button>
              </div>
              <GithubStats />
            </div>
            <div className="md:w-1/2 w-full overflow-x-auto">
              <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 shadow-xl min-w-[300px]">
                <pre className="text-slate-200 overflow-x-auto font-mono">
                  <code>
                    <span className="text-slate-400">
                      {t('codeSnippet.cloneRepo')}
                    </span>
                    {"\n"}
                    <span className="text-emerald-400">
                      git clone --depth 1 https://github.com/vulhub/vulhub.git
                    </span>
                    {"\n"}
                    {"\n"}
                    <span className="text-slate-400">
                      {t('codeSnippet.enterDir')}
                    </span>
                    {"\n"}
                    <span className="text-emerald-400">
                      cd vulhub/spring/CVE-2022-22947
                    </span>
                    {"\n"}
                    {"\n"}
                    <span className="text-slate-400">
                      {t('codeSnippet.startEnv')}
                    </span>
                    {"\n"}
                    <span className="text-emerald-400">
                      docker compose up -d
                    </span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {t('whyUseVulhub')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Box className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.dockerBased.title')}</h3>
              <p className="text-slate-600">
                {t('features.dockerBased.description')}
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="bg-green-100 text-green-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Bug className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {t('features.realVulnerabilities.title')}
              </h3>
              <p className="text-slate-600">
                {t('features.realVulnerabilities.description')}
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-100">
              <div className="bg-purple-100 text-purple-700 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('features.wellDocumented.title')}</h3>
              <p className="text-slate-600">
                {t('features.wellDocumented.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">{t('latestEnvironments')}</h2>
            <Link
              href="/environments"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              {t('viewAllEnvironments')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestEnvironments.map((env) => (
              <div
                key={env.path}
                className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-wrap gap-1">
                      {env.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs font-medium px-2.5 py-0.5 rounded bg-red-100 text-red-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <RelativeTime
                      date={env.date}
                      className="text-slate-500 text-xs"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{env.name}</h3>
                  <p className="text-slate-600">{t('environmentCard.exploreAndLearn', { name: env.name })}</p>
                  <div className="flex justify-between items-center mt-auto pt-4">
                    <Link
                      href={`https://github.com/vulhub/vulhub/tree/master/${env.path}`}
                      target="_blank"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      {t('environmentCard.learnMore')}
                    </Link>
                    <div className="flex items-center text-slate-500 text-sm gap-1">
                      {env.cve.length > 0 ? (
                        env.cve.map((cve, index) => (
                          <span
                            key={index}
                            className="bg-slate-100 px-2 py-1 rounded"
                          >
                            {cve}
                          </span>
                        ))
                      ) : (
                        <span className="bg-slate-100 px-2 py-1 rounded">
                          {t('environmentCard.na')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t('cta.ready')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/getting-started">{t('cta.getStarted')}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <a
                href="https://github.com/vulhub/vulhub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                {t('cta.starOnGithub')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
