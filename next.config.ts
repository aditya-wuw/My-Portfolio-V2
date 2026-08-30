import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ignoreBuildErrors: true, // testing and migration only remove later
  },
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/**"),
      new URL("https://ik.imagekit.io/**"),
      new URL("https://media1.tenor.com/**"),
    ],
  },
};

export default nextConfig;
