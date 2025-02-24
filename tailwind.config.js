/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tedx-red': '#e62b1e',  // TED red color
        'tedx-black': '#000000',
        'tedx-white': '#ffffff',
      },
    },
  },
  plugins: [],
}