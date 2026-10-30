import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server).
  output: "export",
  // Emit /privacy/index.html so Pages serves /privacy/ without extensions.
  trailingSlash: true,
  // next/image optimization needs a server; serve the images as-is.
  images: { unoptimized: true },
};

export default nextConfig;
