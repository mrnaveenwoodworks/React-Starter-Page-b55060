/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Indigo 600
          light: "#6366F1",   // Indigo 500
          dark: "#4338CA",    // Indigo 700
        },
        secondary: {
          DEFAULT: "#10B981", // Emerald 500
          light: "#34D399",   // Emerald 400
          dark: "#059669",    // Emerald 600
        },
        accent: {
          DEFAULT: "#F59E0B", // Amber 500
          light: "#FBBF24",   // Amber 400
          dark: "#D97706",    // Amber 600
        },
        neutral: {
          light: "#F3F4F6", // Gray 100
          DEFAULT: "#6B7280", // Gray 500
          dark: "#1F2937",  // Gray 800
        },
      },
    },
  },
  plugins: [],
};