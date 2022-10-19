/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.15) 15%,rgba(0,0,0,.35) 29%,rgba(0,0,0,.58) 44%,#111111 68%,#010101 100%);",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
