/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        movie: {
          red: '#E50914',
          black: '#141414',
          dark: '#221F1F',
          gray: '#B3B3B3',
        },
      },
    },
  },
  plugins: [],
}

