module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '60': '60rem'
    },
    // height: {
    //   fit: 'fit-content',
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
