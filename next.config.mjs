import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import rehypeExternalLinks from "rehype-external-links";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

if (process.env.NODE_ENV === "development") {
  await setupDevPlatform();
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [[remarkGfm, { singleTilde: true }]],
    rehypePlugins: [
      [rehypeShiki, { theme: "dark-plus" }],
      [
        rehypeExternalLinks,
        { rel: ["nofollow", "noopener"], target: "_blank" },
      ],
    ],
  },
});

export default withMDX(nextConfig);
