/** @type {import('next').NextConfig} */
const dev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: (!dev) ? "/anime-soundboard" : "",
};

module.exports = nextConfig
