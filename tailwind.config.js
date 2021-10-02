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
       fontSize:{
        '10px': '2.5rem',
        
       },
       lineHeight: {
        'lh14px': '0.875rem',
       },
       letterSpacing:{
        '1px': '0.063rem',
       },
       translate: {

       },
       padding: {
        '127px': '7.938rem',
        '25px': '1.563rem',
        '41px': '2.563rem',
        '33px': '2.063rem',
        '108px': '6.75rem',
        '3px': '0.188rem',
        '52px': '3.25rem',
        '74px': '4.625rem',
        '9px': '0.563rem',
        '10px': '0.625rem',

       },
       margin:{
        '73px': '4.563rem',
       },
       colors: {
        'color1': '#1E2D69',
        'color2': '#0C122C',
        'color3': '#DBD9FF',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
