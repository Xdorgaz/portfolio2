/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{ 
      oswald: ["Oswald", "Sans-serif"],
      chines: ["Noto Sans Japanese", "Sans-serif"],
      gordo: ["Alfa Slab One", "Sans-serif"]
      }
    },
  },
  plugins: [],
}

