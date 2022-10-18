/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "www.edigitalagency.com.au",
      "upload.wikimedia.org",
      "image.tmdb.org",
      "api.themoviedb.org",
    ],
  },
};

module.exports = nextConfig;
