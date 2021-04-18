module.exports = {
  purge: ['./client/**/*.html', './client/**/*.jsx', './client/**/*.js'],
  theme: {
    extend: {
      width: {
        920: '920px'
      },
      height: {
        1: '1px',
        145: '145px',
        200: '200px'
      },
      fontSize: {
        base: '16px',
        lg: '24px',
        xl: '36px'
      },
      padding: {
        2: '2px',
        sm: '8px',
        lg: '24px',
        xl: '48px'
      },
      margin: {
        5: '5px',
        6: '6px',
        sm: '8px',
        10: '10px',
        14: '14px',
        16: '16px',
        18: '18px',
        19: '19px',
        24: '24px',
        28: '28px',
        40: '40px',
        xl: '48px',
        56: '56px',
        251: '251px',
        347: '347px'
      },
      fontFamily: {
        helvetica: ['Helvetica']
      },
      fontSize: {
        16: '16px',
        24: '24px',
        36: '36px'
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
        darkGreen: '#7DE88C',
        blue: '#186DD6',
        lightRed: '#FFB199',
        red: '#FF0844'
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
