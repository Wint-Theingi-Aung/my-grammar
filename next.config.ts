import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,

  experimental: {
    allowedDevOrigins: [
      "http://localhost:3000",
      "http://192.168.100.15:3000",
    ],
  },
};

export default nextConfig;
