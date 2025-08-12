const { withContentlayer } = require('next-contentlayer');
const isAnalyze = process.env.ANALYZE === 'true';
const isTurbopack =
  process.env.TURBOPACK === '1' ||
  process.env.__NEXT_TURBOPACK === '1' ||
  process.env.NEXT_TURBOPACK === '1';

// Only enable bundle analyzer when ANALYZE=true and not using Turbopack
const withBundleAnalyzer =
  isAnalyze && !isTurbopack
    ? require('@next/bundle-analyzer')({ enabled: true })
    : (config) => config;

const basePath = process.env.BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization
  images: {
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Bundle optimization
  experimental: {
    scrollRestoration: true,
  },
  // Compression
  compress: true,
  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  env: {
    basePath,
  },
  // Explicit Turbopack section to avoid warnings when Webpack isn't configured for it
  turbopack: {},
};

module.exports = withBundleAnalyzer(withContentlayer(nextConfig));
