module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Space Grotesk', 'sans-serif'],
      body: ['Space Grotesk', 'sans-serif'],//'Open Sans'
    },
    textColor: (theme) => ({
      default: '#1F363D', 
      ...theme('colors'),
    }),
    extend: {
      fontFamily: {
        'HelpMe': ['HelpMe', 'sans']
      },
      fontSize: {
        14: '14px',
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'main-blue': 'hsla(217, 100%, 50%, 1)',
        'main-dark': '#0C1821',
        'main-gray': '#7D8CA3',
        'other-blue': '#648DE5',
      },
      textColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'main-blue': 'hsla(217, 100%, 50%, 1)',
        'main-dark': '#0C1821',
        'main-gray': '#7D8CA3',
        'other-blue': '#648DE5',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
        'main-bg': '#f8f9fa',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'main-blue': 'hsla(217, 100%, 50%, 1)',
        'main-dark': '#0C1821',
        'main-gray': '#7D8CA3',
        'other-blue': '#648DE5',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'thomasDark': "url('/src/assets/thomasBgDark.jpeg')",
        'thomasLight': "url('/src/assets/thomasBgLight.jpg')" 
      },
      maxWidth: {
        '2/3': 'calc(2/3 * 100%)',
      },
    },
  },
  plugins: [],
};
