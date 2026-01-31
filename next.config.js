/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/rian-website",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
