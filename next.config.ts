import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/science-livelab",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
