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
        'banner-img': "url('https://images.unsplash.com/photo-1449710146567-1e282fa41f2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
      }
    }
  },
  plugins: []
}
