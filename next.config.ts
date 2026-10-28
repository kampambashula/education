import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography from Unsplash; every src is built by `unsplash()` in app/content/photos.ts
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "?auto=format&fit=crop&w=2400&q=80",
      },
    ],
  },
};

export default nextConfig;
