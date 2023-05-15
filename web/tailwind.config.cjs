/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'ace-sc': ['"Bruno Ace SC"', 'cursive']
    },
    extend: {
      backgroundImage: {
        'banner-img': "url('https://github.com/thales-sz/make-py/blob/development/web/src/assets/banner.png')"
      }
    }
  },
  plugins: []
}
