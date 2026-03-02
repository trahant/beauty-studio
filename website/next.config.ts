import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/hours-and-location", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
