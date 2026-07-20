import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
