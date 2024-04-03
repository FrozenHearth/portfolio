const { withContentlayer } = require('next-contentlayer');

const basePath = process.env.BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
  },
  env: {
    basePath,
  },
};

module.exports = withContentlayer(nextConfig);
