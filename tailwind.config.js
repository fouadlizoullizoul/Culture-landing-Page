/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },

    extend: {
      fontFamily: {
        Oswald: ['Black Ops One', 'sans-serif'],
        montserrat: ['Orbitron', 'sans-Orbitron']
    },
    colors: {
      'primary': "#ECEEFF",
    },
    boxShadow: {
      '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
    },
    backgroundImage: {
      'hero': '#000',
    },
    screens: {
      "wide": "1440px"
    }
  },

  },
  plugins: [],
}