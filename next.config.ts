import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/AMDigitalMarketing",
  assetPrefix: "/AMDigitalMarketing/",
  trailingSlash: true,
};

export default nextConfig;
