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
        'primary-30': 'rgba(120, 203, 201, 0.30)',
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