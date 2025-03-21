import dayjs from "dayjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  getEnvironmentsByTag,
  getAllTags,
  searchEnvironments,
} from "@/lib/environments";
import { SearchForm } from "@/components/search";
import { RelativeTime } from "@/components/time";
import { Metadata } from "next";
import { getI18n } from "@/locales/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getI18n();
  
  return {
    title: t('environments.meta.title'),
    description: t('environments.meta.description'),
    keywords: ["vulhub", "docker", "security", "vulnerable environments", "CVE", "exploits", "security research"],
    openGraph: {
      title: t('environments.meta.title'),
      description: t('environments.meta.description'),
      type: "website",
    },
  };
}

export const runtime = "edge";

export default async function EnvironmentsPage({
  searchParams,
  params: { locale },
}: {
  searchParams: Promise<{ q?: string; tag?: string }>;
  params: { locale: string };
}) {
  const { q = "", tag = "all" } = await searchParams;
  const allTags = getAllTags();
  const t = await getI18n();

  const shouldGroupByTag = !q && tag === "all";
  const filteredEnvironments = shouldGroupByTag
    ? []
    : searchEnvironments(q, tag);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">{t('environments.title')}</h1>
        <p className="text-slate-600 mb-8">
          {t('environments.description')}
        </p>

        <SearchForm
          initialQuery={q || ""}
          initialTag={tag || "all"}
          allTags={allTags}
        />

        {!shouldGroupByTag && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              {t('environments.results.count', { count: filteredEnvironments.length })}
              {q && <span> {t('environments.results.for')} "{q}"</span>}
              {tag !== "all" && <span> {t('environments.results.in')} {tag}</span>}
            </h2>

            {filteredEnvironments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500">
                  {t('environments.results.noResults')}
                </p>
                <Button variant="link" asChild>
                  <Link href="/environments">{t('environments.results.clearFilters')}</Link>
                </Button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filteredEnvironments.map((env) => (
                  <Link
                    key={env.path}
                    href={`https://github.com/vulhub/vulhub/tree/master/${env.path}`}
                    target="_blank"
                    className="block border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col h-full"
                  >
                    <div className="flex flex-wrap items-center gap-1 mb-2">
                      {env.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {env.tags.length > 3 && (
                        <span className="text-slate-500 text-xs">
                          {t('environments.results.moreTag', { count: env.tags.length - 3 })}
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium">{env.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      {t('environmentCard.exploreAndLearn', { name: env.name })}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs mt-auto">
                      <div className="flex flex-wrap gap-1">
                        {env.cve.length > 0 ? (
                          env.cve.map((cve, index) => (
                            <span
                              key={index}
                              className="text-xs bg-slate-100 px-2 py-1 rounded whitespace-nowrap"
                            >
                              {cve}
                            </span>
                          ))
                        ) : (
                          <span className="text-xs bg-slate-100 px-2 py-1 rounded whitespace-nowrap">
                            {t('environmentCard.na')}
                          </span>
                        )}
                      </div>
                      <RelativeTime
                        date={env.date}
                        className="text-slate-500"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {shouldGroupByTag && (
          <div className="space-y-6">
            {allTags.map((tag) => {
              const environments = getEnvironmentsByTag(tag);
              return (
                <div key={tag} className="space-y-4">
                  <h2 className="text-2xl font-semibold">{tag}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {environments.slice(0, 4).map((env) => (
                      <Link
                        key={env.path}
                        href={`https://github.com/vulhub/vulhub/tree/master/${env.path}`}
                        target="_blank"
                        className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col h-full"
                      >
                        <div className="flex flex-wrap items-center gap-1 mb-2">
                          {env.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="font-medium">{env.name}</h3>
                        <p className="text-sm text-slate-600 mb-3">
                          {t('environmentCard.exploreAndLearn', { name: env.name })}
                        </p>
                        <div className="flex flex-wrap items-center justify-between gap-1 text-xs mt-auto">
                          <span className="text-xs bg-slate-100 px-2 py-1 rounded whitespace-nowrap">
                            {env.cve[0] || t('environmentCard.na')}
                          </span>
                          <RelativeTime
                            date={env.date}
                            className="text-slate-500"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                  {environments.length > 4 && (
                    <div className="text-center mt-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={`/environments?tag=${encodeURIComponent(tag)}`}
                        >
                          {t('environments.viewAll', { count: environments.length, tag })}
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
