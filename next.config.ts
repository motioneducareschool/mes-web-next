import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/launch",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
