// See https://tailwindcss.com/docs/configuration for details

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        soundClound: '#f50',
        'dark-charcoal': '#333',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
