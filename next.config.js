/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.edigitalagency.com.au"],
  },
};

module.exports = nextConfig;
