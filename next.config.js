const withPlugins = require('next-compose-plugins');
const bundleAnalyzer = require('@next/bundle-analyzer');

// Modules
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.ANALYZE === 'true',
});

// Config
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: [
      'pages',
      'components',
      'pages-content',
      'shared',
      'store',
      'styles',
      'types',
    ],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dummyjson.com',
      },
    ],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/offer': { page: '/offer' },
      '/contacts': { page: '/contacts' },
    };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
