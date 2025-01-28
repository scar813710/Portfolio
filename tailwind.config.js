/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure to include all JSX and TSX files in the src directory
  ],

  theme: {
    extend: {},
    screens: {
      "esm":"425px",
      "sm":"640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
