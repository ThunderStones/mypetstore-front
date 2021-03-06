module.exports = {
    content: ['./src/page/**/*.*', './src/view/**/*.*'],
    theme: {
        flex: {
            'costom-1': '1 0 auto',
        },
        zIndex: {
            '10': '10',
            '20': '20',
            '30': '30',
            '40': '40',
            '50': '50',
            '60': '60',
            '70': '70',
            '80': '80',
            '90': '90',
            '100': '100',
            '110': '110',
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
                '31': '8.75rem',
                '13': '3.75rem',
                '17': '4.25rem',
                '18': '4.5rem',
                '19': '4.75rem',
                '84': '21rem',
                '75screen': '75vh',
                '1000': '1000px',
                '806': '806px',
            },
            lineHeight: {
                '12': '3rem',
                '16': '4rem',
                '32': '8rem',
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
