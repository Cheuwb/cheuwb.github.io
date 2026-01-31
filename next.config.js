/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  basePath: '/rian-website', 
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;