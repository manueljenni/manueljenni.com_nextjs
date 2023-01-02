/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      colors: {
        main: "#85c4d5",
        accent: "#ed8936",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
