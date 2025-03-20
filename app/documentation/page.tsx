import { redirect } from "next/navigation";

export const metadata = {
  title: "Documentation - Vulhub",
  description: "Official documentation for the Vulhub project",
};

export default function DocumentationPage() {
  redirect("/documentation/getting-started");
}