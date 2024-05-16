/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'med': '800px',
      'lil': '500px',
      'gg' : '420px',
      'smal': '370px',
    },
    extend: {},
  },
  plugins: [],
}