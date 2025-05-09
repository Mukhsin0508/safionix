import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// ─── next-intl ────────────────────────────────────────────────────────────────
const withNextIntl = createNextIntlPlugin('./src/lib/i18n/request.ts');

// ─── Next.js config ───────────────────────────────────────────────────────────
const nextConfig: NextConfig = {
  /**
   * Static export: turns `next build` into “dump everything into /out”.
   * See https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: 'export',
  trailingSlash: true,          // keeps links working on Hostinger
  reactStrictMode: true,

  images: {
    domains: ['img.youtube.com'],
    unoptimized: true,          // needed for static export (no on-the-fly optimizer)
  },

  webpack: (config, { isServer }) => {
    // allow native *.node addons if any
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });

    // strip fs on the client bundle
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }

    return config;
  },
};

export default withNextIntl(nextConfig);
