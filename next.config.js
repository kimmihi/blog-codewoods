/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "https://kimmihi.github.io/blog-codewoods/",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

module.exports = nextConfig;
