/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
      padding:'16px',
  },
    extend: {
      colors:{
        primary:'#fda4af',
        secondary:'#64748b',
        dark : '#fb7185',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
