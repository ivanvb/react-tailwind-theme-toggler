const shouldPurge = process.argv[process.argv.length - 1] === 'purge';

module.exports = {
    purge: {
        enabled: shouldPurge,
        content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.jsx', './src/**/*.js'],
    },
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-background)',
                secondary: 'var(--secondary-background)',
                contrast: 'var(--text-color)',
                'contrast-hover': 'var(--text-color-hover)',
            },
            spacing: {
                '1/4': '0.0625rem',
                '1/2': '0.125rem',
                '1/1': '100%',
            },
        },
    },
    variants: {},
    plugins: [],
};
