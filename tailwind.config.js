/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-dark": "#0f0f0f",
        "gray-light": "#e5e7eb",
        primary: "#ff5c8a",
      },
      dropShadow: {
        star: "0 0 8px rgba(255,215,0,0.7)",
        flat: "2px 2px 0 rgba(0,0,0,0.3)",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
    },
  },
  plugins: [],
};
