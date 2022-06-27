module.exports = { 
  purge: {
   node: 'layers',
   content: ['./public/**/*.html','./../../abin/Practise-apps/app/Modules/test/practice.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: { screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
   extend: {
   color: {}
  },
 },
 variants: {
  extend: {},
 },
 plugins: [],
 }
