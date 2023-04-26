/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.tsx', './index.html'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      'ace-sc': ['"Bruno Ace SC"', 'cursive']
    },
    extend: {
      animation: {
        scroll: 'scroll 40s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(500)' }
        }
      }
    }
  },
  plugins: []
}
