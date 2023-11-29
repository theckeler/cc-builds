/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cubcadet.com",
      },
      {
        protocol: "https",
        hostname: "staging-na01-mtd.demandware.net",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|md|mdx)$/],
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
