module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    extend: {
      width: {
        920: '920px'
      },
      height: {
        1: '1px',
        200: '200px'
      },
      fontSize: {
        base: '16px',
        lg: '24px',
        xl: '36px'
      },
      margin: {
        sm: '8px',
        10: '10px',
        md: '16px',
        lg: '24px',
        40: '40px',
        xl: '48px',
        251: '251px',
        347: '347px'
      },
      fontFamily: {
        helvetica: ['Helvetica']
      },
      borderRadius: {
        none: '0',
        sm: '4px;',
        md: '10px;',
        lg: '20px;',
        full: '9999px'
      },
      colors: {
        lightGreen: '#CFF37D',
        darkGreen: '#7DE88C'
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        footer: '200px minmax(900px, 1fr) 100px'
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17'
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17'
      }
    }
  },
  variants: {},
  plugins: []
}
