import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import catalogByLocale from "@/components/doc/catalog";
import { getI18n, getCurrentLocale } from "@/locales/server";

type Props = {
  params: Promise<{ slug: string; locale: string }>;
};

export function generateStaticParams() {
  // Generate paths for all locales and slugs
  const params: { locale: string; slug: string }[] = [];
  
  Object.entries(catalogByLocale).forEach(([locale, catalog]) => {
    catalog.forEach((item) => {
      params.push({ locale, slug: item.slug });
    });
  });
  
  return params;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const catalog = catalogByLocale[locale as "en" | "zh"];
  const document = catalog.find((doc) => doc.slug === slug);
  const t = await getI18n();

  if (!document) {
    return {
      title: t('documentation.notFound.title'),
      description: t('documentation.notFound.description'),
    };
  }

  return {
    title: `${document.title} | ${t('documentation.title')}`,
    description: document.description || `Documentation about ${document.title} for Vulhub - an open-source collection of pre-built vulnerable docker environments`,
    keywords: document.keywords || ["vulhub", "documentation", "security", "docker", "vulnerability"],
    openGraph: {
      title: `${document.title} | ${t('documentation.title')}`,
      description: document.description || `Documentation about ${document.title} for Vulhub`,
      type: "article",
    },
  };
}

export default async function DocumentPage({ params }: Props) {
  const { slug } = await params;
  const locale = await getCurrentLocale();
  const t = await getI18n();
  
  // Get catalog for the current locale
  const catalog = catalogByLocale[locale as "en" | "zh"];

  // Find the current document in the catalog
  const currentDocIndex = catalog.findIndex((doc) => doc.slug === slug);

  // If document not found, return 404
  if (currentDocIndex === -1) {
    notFound();
  }

  try {
    // Try to import the MDX file for the current locale first
    let Post;
    try {
      const localeModule = await import(`@/components/doc/${locale}/${slug}.mdx`);
      Post = localeModule.default;
    } catch (error) {
      notFound();
    }

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
              href={`/${locale}/documentation/${prevDoc.slug}`}
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <div>
                <div className="text-sm text-slate-500">{t('documentation.previous')}</div>
                <div className="font-medium">{prevDoc.title}</div>
              </div>
            </Link>
          ) : (
            <div className="invisible">Placeholder</div>
          )}

          {nextDoc ? (
            <Link
              href={`/${locale}/documentation/${nextDoc.slug}`}
              className="flex items-center text-blue-600 hover:text-blue-800 text-right"
            >
              <div>
                <div className="text-sm text-slate-500">{t('documentation.next')}</div>
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
