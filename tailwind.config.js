/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232164",
        secondary: "#00f6ff",
        
      },
      fontFamily: {
        poppins:["Poppins","san-serif"],
        karla:["Karla","san-serif"],
        lato:["Lato","san-serif"],
        Montserrat:["Montserrat","san-serif"],
       
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
