/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        sora: "sora",
        sansita: "sansita",
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};