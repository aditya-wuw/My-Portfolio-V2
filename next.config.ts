import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites() {
    return [
      {
        source: "/store/:path*",
        destination: `${process.env.SUPABASE_URL}/storage/v1/object/public/assets/:path*`,
      },
    ];
  },
  typescript: {
    // ignoreBuildErrors: true, // testing and migration only remove later
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**/**",
      },
    ],
  },
};

export default nextConfig;
