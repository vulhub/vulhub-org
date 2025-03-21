import Link from "next/link";
import { Globe } from "lucide-react";
import { Github, Twitter } from "@/components/icons";
import { getI18n } from "@/locales/server";

export async function Footer() {
  const t = await getI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">Vulhub</h2>
            <p className="text-slate-300 mb-4">
              {t('subtitle')}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vulhub/vulhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/vulhub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://vulhub.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.resources')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/environments"
                  className="text-slate-300 hover:text-white"
                >
                  {t('footer.allEnvironments')}
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-started"
                  className="text-slate-300 hover:text-white"
                >
                  {t('footer.gettingStarted')}
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/vulhub/vulhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white"
                >
                  {t('footer.githubRepo')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white">
                  {t('footer.aboutVulhub')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/vulhub/vulhub/graphs/contributors"
                  target="_blank"
                  className="text-slate-300 hover:text-white"
                >
                  {t('footer.contributors')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/vulhub/vulhub/blob/master/LICENSE"
                  target="_blank"
                  className="text-slate-300 hover:text-white"
                >
                  {t('footer.mitLicense')}
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.gg/bQCpZEK"
                  target="_blank"
                  className="text-slate-300 hover:text-white"
                >
                  {t('footer.contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Vulhub. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Vulhub is released under the MIT License. Use for educational
            purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
