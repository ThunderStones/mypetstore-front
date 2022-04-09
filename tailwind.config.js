module.exports = {
    content: ['./src/page/**/*.*', './src/view/**/*.*'],
    theme: {
        flex: {
            'costom-1': '1 0 auto',
        },
        extend: {
            transitionDuration: {
                '3000': '3000ms'
            },
            height: {
                'img': '1080px',
                'form': '700px'
            },
            width: {
                '1920': '1920px',
                'form': '450px',
                '3/10': '30%',
            },
            spacing: {
                '19': '4.75rem',
                '31': '8.75rem'
            },
            lineHeight: {
                '12': '3rem',
                '16': '4rem',
            }
        },
        screens: {
            '2xl': {'max': '1535px'},
            // => @media (max-width: 1535px) { ... }
      
            'xl': {'max': '1279px'},
            // => @media (max-width: 1279px) { ... }
      
            'lg': {'max': '1023px'},
            // => @media (max-width: 1023px) { ... }
      
            'md': {'max': '767px'},
            // => @media (max-width: 767px) { ... }
      
            'sm': {'max': '639px'},
            // => @media (max-width: 639px) { ... }
          }

    },
    variants: {
        extend: {
            borderColor: ['active']
        }
    },
    plugins: [],
}
