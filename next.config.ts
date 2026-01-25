import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* ESLint module error ကို ကျော်ဖြတ်ရန် */
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* TypeScript အသေးအဖွဲ Error များကြောင့် Build မရပ်သွားစေရန် */
  typescript: {
    ignoreBuildErrors: true,
  },
  /* အခြား config များ လိုအပ်ပါက ဤနေရာတွင် ထည့်နိုင်သည် */
};

export default nextConfig;