module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor:{
        yellow:{
          DEFAULT:'#b69100'
        }
      },
      backgroundColor:theme =>({
        'primary':'#b69100',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
