/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    
  ],
  theme: {
    colors:{
      black:{
        1: '#000000',
      },
      green:{
        1: '#50E18A',
      },
      gray:{
        1: '#D9D9D9',
      },
      white:{
        1:'#FFFFFF',
      },
    },
    extend: {
      opacity:{
        '80': '.80',
        '95': '.95',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'back-header': "url('/public/back-header-map-V3.jpg')",
        'back-ambiente-conscientizacao': "url('/public/back-cont.png')"
      },
    },
  },
  plugins: [],
}

