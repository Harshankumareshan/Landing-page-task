/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#241711',
        customorange: '#fab24d',
        customsandal: '#ffe8a3',
        customsand: '#cfa84c',
        
      },
    },
  },
  plugins: [],
}
