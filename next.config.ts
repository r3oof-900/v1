import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images: use unoptimized for Cloudflare Workers compatibility
  images: {
    unoptimized: true,
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  // Ensure no Vercel-specific features are used
  // Static generation will be used for public pages
};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
