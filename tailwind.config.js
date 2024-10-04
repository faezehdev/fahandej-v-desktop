/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './**/*.{html,js}',
    './css/**/*.css',
    './js/**/*.js',
  
  ],
  darkMode: 'class',

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'main':'#8F993C',
      'white':'#FFFFFF',
      'lightGray':'#D1D3D4',
      'dark':'#262627',
      'dark2':'#48494A',
      'dark3':'#636466'
        
    },
    fontFamily: {
      'Ravi300': ['Ravi300', 'Ravi300'],
      'Ravi400': ['Ravi400', 'Ravi400'],
      'Ravi500': ['Ravi500', 'Ravi500'],
      'Ravi700': ['Ravi700', 'Ravi700'],
      'Ravi800': ['Ravi800', 'Ravi800'],
    },
    extend: {
      spacing: {
        '1.5': '1.5em',
        '2.5': '2.5em',
        
      },
      content:{
  'content1':' '
      },
      lineHeight: {
        '18.78': '18.78px',
        '64': '64px',
        '23':'23px',
        '25.4':'25.04px',
        '57.97':'57.97px',
        '17.96': '17.96px',
        '21.91': '21.91px',
        '32.03':'32.03px',
        '56.35':'56.35px',
        '25.04':'25.04px',
        '37.97':'37.97px',
        '37.57':'37.57px',
        '31.03':'31.03px',
        '28.17':'28.17px',
        '18.78':'18.78px',
         '20.25':'20.25px',
         '24':'24px',
         '46.96':'46.96px',
         '16.41':'16.41px',
         '14.06':'14.06px',
       

      },

      width:{
        '85':'85%'
      },
      maxWidth: {
        'x100': '100%',
      },
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',

      }
    },
    translate: {
      '100': '-100%',
    }
  },
  
  
}