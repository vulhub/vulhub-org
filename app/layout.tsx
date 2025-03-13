import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vulhub - Pre-Built Vulnerable Environments",
  description:
    "An open-source collection of pre-built vulnerable docker environments for security researchers and educators.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/logo/32x32.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/logo/64x64.ico", sizes: "64x64", type: "image/x-icon" },
      { url: "/logo/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/logo/256x256.png", sizes: "256x256", type: "image/png" },
      { url: "/logo/512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/logo/128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/logo/256x256.png", sizes: "256x256", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" forcedTheme="light" enableSystem={false}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
