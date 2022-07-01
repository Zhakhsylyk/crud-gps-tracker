/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'box': '650px',
      },
      margin: {
        'form': '500px',
      },
      colors: { 
        backgroundColor: '#242a38',
        containerColor: '#1a1c28',
        cardColor : '#203e4a',
      },
    },
  },
  plugins: [],
}
