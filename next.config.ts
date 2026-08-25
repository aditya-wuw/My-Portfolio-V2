import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/**"),
      new URL("https://ik.imagekit.io/**"),
    ],
  },
};

export default nextConfig;
