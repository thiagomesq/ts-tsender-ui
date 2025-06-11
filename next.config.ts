import { NextConfig } from "next/dist/types";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  trailingSlash: true,
};

export default nextConfig;
