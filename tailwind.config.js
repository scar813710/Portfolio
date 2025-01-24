/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure to include all JSX and TSX files in the src directory
  ],

  theme: {
    extend: {},
    screens: {
      "2xl": "1440px",
    },
  },
  plugins: [],
};
