/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1fb6ff',
        purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      },
      fontFamily:{
        montserrat:["Montserrat","sans-serif"]
      }
    },
    screens:{
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1220px",
      xl: "1700px",
      
    }
  },
  plugins: [],
}