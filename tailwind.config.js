// tailwind.config.js
module.exports = {
    content: [
        './src/js/Components/Tabs/*.vue',
        './src/js/Components/*.vue',
        './src/js/*.js',
        './src/scss/*.scss',
        './src/*.html',
    ],     // This key was called 'purge' in Tailwind CSS v2
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: "#1a2236",
                secondary: "#2e364a",
                textColor: "#c0d7db",
                linesColor: "#f00"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}