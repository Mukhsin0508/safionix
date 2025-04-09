import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin("./src/lib/i18n/request.ts")

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* config options here */
  webpack: (config, {isServer}) => {
    config.module.rules.push({
      test: /\.node$/,
      use: 'node-loader',
    });
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }
    return config;
  },
}

export default withNextIntl(nextConfig)
