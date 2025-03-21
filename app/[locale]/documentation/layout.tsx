"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import catalog from "@/components/doc/catalog";

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Sidebar */}
        <aside className="md:w-64 flex-shrink-0">
          <div className="sticky top-24">
            <h2 className="text-lg font-bold mb-4 text-slate-800">Documentation</h2>
            <nav className="space-y-1">
              {catalog.map((item) => (
                <Link 
                  key={item.slug}
                  href={`/documentation/${item.slug}`} 
                  className={`block py-2 px-3 rounded-md ${
                    pathname === `/documentation/${item.slug}`
                    ? "bg-blue-50 text-blue-600 font-medium"
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.title}
              </Link>
            ))}
            </nav>
          </div>
        </aside>
        
        {/* Main content */}
        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
} 