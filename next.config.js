/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
        port: "",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
      },
    ],
  },
};
