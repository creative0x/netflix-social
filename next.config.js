const withTM = require("next-transpile-modules")([
  "@stripe/firestore-stripe-payments",
]); // pass the modules you would like to see transpiled

module.exports = withTM({
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
});
