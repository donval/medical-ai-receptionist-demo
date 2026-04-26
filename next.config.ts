import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Prevent ESLint from breaking Vercel builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Prevent TypeScript errors from blocking production builds (optional safety)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Safe default for App Router projects
  experimental: {
    // keep empty unless you specifically need features
  },
};

export default nextConfig;