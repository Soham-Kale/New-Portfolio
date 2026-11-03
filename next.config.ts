import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits plain HTML/CSS/JS into /out.
  output: "export",
  trailingSlash: true,
  images: {
    // No image server in a static export; ship pre-sized assets from /public.
    unoptimized: true,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
