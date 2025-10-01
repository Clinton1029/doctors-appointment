/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // main blue
        secondary: "#1e293b", // dark slate
      },
    },
  },
  plugins: [],
};
