module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      green: {
        lime: '#B2CB17',
        DEFAULT: '#1BB799',
      },
      blue: {
        DEFAULT: '#0195C4'
      }
    },
    fontFamily: {
      'display': ['dillan'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
