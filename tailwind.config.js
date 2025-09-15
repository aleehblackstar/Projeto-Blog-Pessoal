/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'polaroid': '#F1E5B1',
        'golden-tinsel': '#D19D56',
        'coal': '#262A2E',
        'mistletoe': '#6E3D34',
      },
    },
  },
  plugins: [],
}