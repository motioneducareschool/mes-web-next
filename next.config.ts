import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.youtube.com"], // Add YouTube's image domain
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/launch",
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
