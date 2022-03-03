module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        mode: 'all',
        content: ['./src/**/*.{jsx,tsx}', './public/index.html'],
        options: {
            keyframes: true,
        },
    },
    darkMode: false,
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
