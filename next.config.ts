import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    console.log("Rewrites applied");
    return [
      {
        source: "/api/:path*",
        destination: "https://api.sepasangselamanya.tech/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
