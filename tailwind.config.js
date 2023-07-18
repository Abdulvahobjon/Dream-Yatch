/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {

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
      }
    },
  },
  plugins: [],
}

