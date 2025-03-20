import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import catalog from "@/components/doc/catalog";

export function generateStaticParams() {
  return catalog.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const document = catalog.find((doc) => doc.slug === slug);

  if (!document) {
    return {
      title: "Document Not Found",
      description: "The requested documentation page could not be found",
    };
  }

  return {
    title: `${document.title} | Vulhub Documentation`,
    description: document.description || `Documentation about ${document.title} for Vulhub - an open-source collection of pre-built vulnerable docker environments`,
    keywords: document.keywords || ["vulhub", "documentation", "security", "docker", "vulnerability"],
    openGraph: {
      title: `${document.title} | Vulhub Documentation`,
      description: document.description || `Documentation about ${document.title} for Vulhub`,
      type: "article",
    },
  };
}

export default async function DocumentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the current document in the catalog
  const currentDocIndex = catalog.findIndex((doc) => doc.slug === slug);

  // If document not found, return 404
  if (currentDocIndex === -1) {
    notFound();
  }

  try {
    const { default: Post } = await import(`@/components/doc/${slug}.mdx`);

    // Get previous and next documents
    const prevDoc = currentDocIndex > 0 ? catalog[currentDocIndex - 1] : null;
    const nextDoc =
      currentDocIndex < catalog.length - 1
        ? catalog[currentDocIndex + 1]
        : null;

    return (
      <div className="max-w-4xl mx-auto">
        <article className="prose prose-slate max-w-none prose-p:text-lg prose-p:text-slate-600 prose-li:text-lg">
          <Post />
        </article>

        <div className="mt-16 flex justify-between border-t border-slate-200 pt-8">
          {prevDoc ? (
            <Link
              href={`/documentation/${prevDoc.slug}`}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <div>
                <div className="text-sm text-slate-500">Previous</div>
                <div className="font-medium">{prevDoc.title}</div>
              </div>
            </Link>
          ) : (
            <div className="invisible">Placeholder</div>
          )}

          {nextDoc ? (
            <Link
              href={`/documentation/${nextDoc.slug}`}
              className="flex items-center text-blue-600 hover:text-blue-800 text-right"
            >
              <div>
                <div className="text-sm text-slate-500">Next</div>
                <div className="font-medium">{nextDoc.title}</div>
              </div>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <div className="invisible">Placeholder</div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error(`Failed to load document: ${slug}`, error);
    notFound();
  }
}
