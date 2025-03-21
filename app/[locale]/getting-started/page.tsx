import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Info, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { getI18n } from "@/locales/server";
import { Github } from "@/components/icons";

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  
  return {
    title: t('gettingStarted.meta.title'),
    description: t('gettingStarted.meta.description'),
    keywords: ["vulhub", "docker", "security", "installation", "setup", "vulnerable environments", "cybersecurity"],
    openGraph: {
      title: t('gettingStarted.title'),
      description: t('gettingStarted.description'),
      type: "article",
    },
  };
}

export default async function GettingStartedPage() {
  const t = await getI18n();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('gettingStarted.title')}</h1>
        <p className="text-slate-600 mb-8">
          {t('gettingStarted.description')}
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
          <div className="flex">
            <Info className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-blue-800 font-medium">{t('gettingStarted.prerequisites.title')}</h3>
              <p className="text-blue-700">
                {t('gettingStarted.prerequisites.description')}
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="docker" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="docker">{t('gettingStarted.tabs.dockerSetup')}</TabsTrigger>
            <TabsTrigger value="quickstart">{t('gettingStarted.tabs.quickStart')}</TabsTrigger>
            <TabsTrigger value="advanced">{t('gettingStarted.tabs.advanced')}</TabsTrigger>
          </TabsList>
          <TabsContent value="docker" className="p-4 border rounded-md mt-2">
            <h2 className="text-xl font-semibold mb-4">{t('gettingStarted.dockerSetup.title')}</h2>
            <div className="space-y-4">
              <p className="text-slate-600">
                {t('gettingStarted.dockerSetup.description')}
              </p>

              <h3 className="font-medium mt-4">{t('gettingStarted.dockerSetup.install')}</h3>
              <div className="grid gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      {t('gettingStarted.dockerSetup.linux')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-2">
                      {t('gettingStarted.dockerSetup.linuxDesc')}
                    </p>
                    <pre className="bg-slate-800 text-slate-100 p-3 rounded-md text-xs sm:text-sm overflow-x-auto w-full whitespace-pre-wrap">
                      <code>{`curl -fsSL https://get.docker.com | sh`}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center">
                      {t('gettingStarted.dockerSetup.macosWindows')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-2">
                      {t('gettingStarted.dockerSetup.macosWindowsDesc')}
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://www.docker.com/products/docker-desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {t('gettingStarted.dockerSetup.downloadDocker')}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <h3 className="font-medium mt-4">{t('gettingStarted.dockerSetup.verifyInstall')}</h3>
              <p className="text-slate-600">
                {t('gettingStarted.dockerSetup.verifyDesc')}
              </p>
              <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 text-xs sm:text-sm overflow-x-auto w-full whitespace-pre-wrap">
                <code>{`docker version`}</code>
              </pre>

              <p className="text-slate-600 mt-4">
                {t('gettingStarted.dockerSetup.composeDesc')}
              </p>
              <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 text-xs sm:text-sm overflow-x-auto w-full whitespace-pre-wrap">
                <code>{`docker compose version`}</code>
              </pre>
              <p className="text-yellow-700 mt-2">
                {t('gettingStarted.dockerSetup.composeWarning')}
              </p>
            </div>
          </TabsContent>
          <TabsContent
            value="quickstart"
            className="p-4 border rounded-md mt-2"
          >
            <h2 className="text-xl font-semibold mb-4">{t('gettingStarted.quickStart.title')}</h2>
            <ol className="space-y-4">
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  1
                </span>
                <div className="w-full">
                  <h3 className="font-medium">{t('gettingStarted.quickStart.steps.clone.step')}</h3>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>
                      git clone --depth 1 https://github.com/vulhub/vulhub.git
                    </code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  2
                </span>
                <div className="w-full">
                  <h3 className="font-medium">
                    {t('gettingStarted.quickStart.steps.choose.step')}
                  </h3>
                  <p className="text-slate-600 mt-1">
                    {t('gettingStarted.quickStart.steps.choose.desc')}
                  </p>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>cd vulhub/spring/CVE-2022-22947</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  3
                </span>
                <div className="w-full">
                  <h3 className="font-medium">{t('gettingStarted.quickStart.steps.start.step')}</h3>
                  <p className="text-slate-600 mt-1">
                    {t('gettingStarted.quickStart.steps.start.desc')}
                  </p>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>docker compose up -d</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  4
                </span>
                <div className="w-full">
                  <h3 className="font-medium">{t('gettingStarted.quickStart.steps.access.step')}</h3>
                  <p className="text-slate-600 mt-1">
                    {t('gettingStarted.quickStart.steps.access.desc')}
                  </p>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-2 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>http://your-ip:8080</code>
                  </pre>
                </div>
              </li>
              <li className="flex">
                <span className="bg-green-100 text-green-800 font-medium rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  5
                </span>
                <div className="w-full">
                  <h3 className="font-medium">{t('gettingStarted.quickStart.steps.explore.step')}</h3>
                  <p className="text-slate-600 mt-1">
                    {t('gettingStarted.quickStart.steps.explore.desc')}
                  </p>
                </div>
              </li>
            </ol>
          </TabsContent>
          <TabsContent value="advanced" className="p-4 border rounded-md mt-2">
            <h2 className="text-xl font-semibold mb-4">{t('gettingStarted.advanced.title')}</h2>
            <div className="space-y-4">
              <h3 className="font-medium">{t('gettingStarted.advanced.managing.title')}</h3>
              <p className="text-slate-600">
                {t('gettingStarted.advanced.managing.description')}
              </p>
              <div className="space-y-3">
                <div className="w-full">
                  <h4 className="text-sm font-medium">{t('gettingStarted.advanced.managing.stop')}</h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>docker compose down -v</code>
                  </pre>
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-medium">
                    {t('gettingStarted.advanced.managing.rebuild')}
                  </h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>docker compose build --no-cache</code>
                  </pre>
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-medium">{t('gettingStarted.advanced.managing.logs')}</h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>docker compose logs -f</code>
                  </pre>
                </div>
                <div className="w-full">
                  <h4 className="text-sm font-medium">
                    {t('gettingStarted.advanced.managing.shell')}
                  </h4>
                  <pre className="bg-slate-800 text-slate-100 p-3 rounded-md mt-1 text-xs sm:text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>docker compose exec [service_name] bash</code>
                  </pre>
                </div>
              </div>

              <h3 className="font-medium mt-4">{t('gettingStarted.advanced.customizing.title')}</h3>
              <p className="text-slate-600">
                {t('gettingStarted.advanced.customizing.description')}
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>{t('gettingStarted.advanced.customizing.options.0')}</li>
                <li>{t('gettingStarted.advanced.customizing.options.1')}</li>
                <li>{t('gettingStarted.advanced.customizing.options.2')}</li>
                <li>{t('gettingStarted.advanced.customizing.options.3')}</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <div className="flex">
                  <AlertCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-yellow-800 font-medium">
                      {t('gettingStarted.advanced.securityWarning.title')}
                    </h3>
                    <p className="text-yellow-700">
                      {t('gettingStarted.advanced.securityWarning.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="border rounded-lg p-6 bg-slate-50">
          <h2 className="text-xl font-semibold mb-4">{t('gettingStarted.nextSteps.title')}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/environments"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                {t('gettingStarted.nextSteps.browseEnvironments.title')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t('gettingStarted.nextSteps.browseEnvironments.description')}
              </p>
            </Link>
            <a
              href="https://discord.gg/bQCpZEK"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                {t('gettingStarted.nextSteps.joinCommunity.title')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t('gettingStarted.nextSteps.joinCommunity.description')}
              </p>
            </a>
            <a
              href="https://github.com/vulhub/vulhub"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                {t('gettingStarted.nextSteps.contribute.title')}
                <Github className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t('gettingStarted.nextSteps.contribute.description')}
              </p>
            </a>
            <Link
              href="/about"
              className="block p-4 border rounded-md bg-white hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <h3 className="font-medium flex items-center">
                {t('gettingStarted.nextSteps.about.title')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t('gettingStarted.nextSteps.about.description')}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
