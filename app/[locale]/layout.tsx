import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { I18nProviderClient } from "@/locales/client";
import { GoogleAnalytics } from '@next/third-parties/google'

dayjs.extend(relativeTime);

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

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="light"
          enableSystem={false}
        >
          <I18nProviderClient locale={locale}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </I18nProviderClient>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-DS7WR22B2P" />
    </html>
  );
}
