import { redirect } from "next/navigation";
import { Metadata } from "next";
import { getI18n } from "@/locales/server";
import { getCurrentLocale } from "@/locales/server";

export const runtime = 'edge';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  
  return {
    title: `${t('documentation.title')} | Vulhub`,
    description: "Official documentation for Vulhub - learn how to use and contribute to this open-source collection of vulnerable docker environments",
    keywords: ["vulhub", "documentation", "guide", "security", "docker", "tutorial"],
    openGraph: {
      title: `Vulhub ${t('documentation.title')}`,
      description: "Comprehensive guides and documentation for the Vulhub project",
      type: "website",
    },
  };
}

export default function DocumentationPage() {
  const locale = getCurrentLocale();
  redirect(`/${locale}/documentation/getting-started`);
}