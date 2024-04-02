module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                'tma-blue': {
                    400: '#4999d7',
                    DEFAULT: '#248BDA',
                    700: '#1a70b2',
                },
                'tma-gray': {
                    100: '#8e99a1',
                    300: '#96a2af',
                    400: '#313A43',
                    450: '#364452',
                    DEFAULT: '#242E38',
                    600: '#212A33',
                    800: '#161c23',
                },
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}