/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./public/view/**/*.{html,js}', './index.html'],
  },
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins'],
      },
      colors: {
        'primary': '#0558D4',
        'slate-100': '#F8F9FA',
        'slate-200': '#E9ECEF',
        'slate-300': '#DEE2E6',
        'slate-400': '#CED4DA',
        'slate-500': '#ADB5BD',
        'slate-600': '#6C757D',
        'slate-700': '#495057',
        'slate-800': '#343A40',
        'slate-900': '#212529',
      },
      letterSpacing: {
        wider : '.05em',
        widest : '.1em',
      },
      boxShadow: {
        'custom' :  '0px 2px 16px 0px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [
    require('taos/plugin')
  ],
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
}

