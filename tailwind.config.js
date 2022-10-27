/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   white: "#FEFDFF",
    //   gray: "#818D92",
    //   yellow: "#FFD23F",
    //   blue: "#1E3888",
    //   orange: "#FC440F",
    // },
  },
  plugins: [require("@tailwindcss/forms")],
};
