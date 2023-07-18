/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
    
      colors: {
        "green": "#004542",
        "burlywood-400":"#E9E1D4",
        "burlywood-700":"#996E43"
      },
      maxWidth:{
        "mxl":"1400px"
      },
      fontFamily: {
        archivo: 'Archivo',
        autography: 'Autography',
      },
      boxShadow: {
        'card': '0px 3px 20px #00000029',
      },
      backgroundImage: {
        'card': "transparent linear-gradient(180deg, #00000000 0%, #00000080 100%) 0% 0% no-repeat padding-box;"
      },
      fontSize:{
        '46':["46px" , "57px"]
      }
    },
  },
  plugins: [],
}

