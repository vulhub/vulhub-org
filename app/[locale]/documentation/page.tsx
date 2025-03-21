import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation | Vulhub",
  description: "Official documentation for Vulhub - learn how to use and contribute to this open-source collection of vulnerable docker environments",
  keywords: ["vulhub", "documentation", "guide", "security", "docker", "tutorial"],
  openGraph: {
    title: "Vulhub Documentation",
    description: "Comprehensive guides and documentation for the Vulhub project",
    type: "website",
  },
};

export default function DocumentationPage() {
  redirect("/documentation/getting-started");
}