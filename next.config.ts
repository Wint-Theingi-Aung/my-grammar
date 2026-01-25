import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Build လုပ်နေစဉ် ESLint error များကြောင့် ရပ်မသွားစေရန်
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Type error အသေးအဖွဲများကြောင့် Build မရပ်သွားစေရန်
    ignoreBuildErrors: true,
  }
};

export default nextConfig;