module.exports = {
  theme: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif']
    },
    purge: [],
    darkMode: false, // or 'media' or 'class'
    extend: {
      colors: {
        primary: 'rgba(120, 203, 201)',
      }
    },
    variants: {
      extend: {
        borderWidth: ['last'],
      }
    },
    plugins: []
  }
}