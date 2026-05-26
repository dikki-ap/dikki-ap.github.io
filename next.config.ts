import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  ...(isProd ? { output: "export" } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // If your repo is NOT named "username.github.io", uncomment and set your repo name:
  // basePath: isProd ? "/your-repo-name" : "",
  // assetPrefix: isProd ? "/your-repo-name" : "",
};

export default nextConfig;
