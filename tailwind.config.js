module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        'raleway' : ['Raleway'],
      },
      backgroundImage: {
        'bgimage': "url('./images/bg-mobile.png')",
       },
       backgroundColor: {
        'color1': '#1E2D69',
        'color2': '#0C122C',
       },
       borderRadius: {
        '10px' : '0.625rem',
        '100px': '6.25rem',
       },
       padding: {
        '127px': '7.938rem',
        '25px': '1.563rem',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
