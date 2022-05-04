module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: { 
        brand: {
          300: '#91e0F1',
          500: '#31e0F1',
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}
