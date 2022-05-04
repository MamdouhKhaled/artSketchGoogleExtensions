// tailwind.config.js
module.exports = {
    content: [
        './src/js/tabs/components/*.vue',
        './src/js/*.js',
        './src/scss/*.scss',
        './src/*.html',
    ],     // This key was called 'purge' in Tailwind CSS v2
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}