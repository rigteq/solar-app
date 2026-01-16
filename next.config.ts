import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.assettype.com',
      },
      {
        protocol: 'https',
        hostname: 'www.energetica-india.net',
      },
      {
        protocol: 'https',
        hostname: 'www.studyiq.com',
      },
    ],
  },
};

export default nextConfig;
