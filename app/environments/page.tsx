import dayjs from "dayjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getEnvironmentsByTag, getAllTags, searchEnvironments } from "@/lib/environments";
import { SearchForm } from "@/components/search";

export default function EnvironmentsPage({
  searchParams,
}: {
  searchParams: { q?: string; tag?: string };
}) {
  const allTags = getAllTags();
  const query = searchParams.q || "";
  const tag = searchParams.tag || "all";
  
  const shouldGroupByTag = !query && tag === "all";  
  const filteredEnvironments = shouldGroupByTag ? [] : searchEnvironments(query, tag);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Vulnerable Environments</h1>
        <p className="text-slate-600 mb-8">
          Browse our collection of pre-built vulnerable environments for
          security research and education. Each environment is containerized
          with Docker and comes with detailed documentation.
        </p>

        <SearchForm initialQuery={query} initialTag={tag} allTags={allTags} />

        {!shouldGroupByTag && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">
              {filteredEnvironments.length} Results
              {query && <span> for "{query}"</span>}
              {tag !== "all" && <span> in {tag}</span>}
            </h2>
            
            {filteredEnvironments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500">No environments found matching your criteria.</p>
                <Button 
                  variant="link" 
                  asChild
                >
                  <Link href="/environments">Clear filters</Link>
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
                          +{env.tags.length - 3} more
                        </span>
                      )}
                    </div>
                    <h3 className="font-medium">{env.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Explore the {env.name} vulnerability and learn how to
                      exploit it.
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs mt-auto">
                      <span className="text-xs bg-slate-100 px-2 py-1 rounded whitespace-nowrap">
                        {env.cve[0] || "N/A"}
                      </span>
                      <span
                        className="text-slate-500"
                        title={env.date.format()}
                      >
                        Created {env.date.fromNow()}
                      </span>
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
                    {environments
                      .slice(0, 4)
                      .map((env) => (
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
                            Explore the {env.name} vulnerability and learn how to
                            exploit it.
                          </p>
                          <div className="flex flex-wrap items-center justify-between gap-1 text-xs mt-auto">
                            <span className="text-xs bg-slate-100 px-2 py-1 rounded whitespace-nowrap">
                              {env.cve[0] || "N/A"}
                            </span>
                            <span
                              className="text-slate-500"
                              title={env.date.format()}
                            >
                              Created {env.date.fromNow()}
                            </span>
                          </div>
                        </Link>
                      ))}
                  </div>
                  {environments.length > 4 && (
                    <div className="text-center mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                      >
                        <Link href={`/environments?tag=${encodeURIComponent(tag)}`}>
                          View all {environments.length} {tag}{" "}
                          environments
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
