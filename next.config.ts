import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ahmedsoumri.com",
          },
        ],
        destination: "https://www.ahmedsoumri.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
