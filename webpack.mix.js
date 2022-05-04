let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */
mix
    .js('src/js/popup.js', 'dist/assets/js').vue()
    .js('src/js/tabs.js', 'dist/assets/js').vue()
    .sass('src/scss/popup.scss', 'dist/assets/css')
    .sass('src/scss/tabs.scss', 'dist/assets/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
        autoprefixer: {
            options: {
                browsers: [
                    'last 3 versions',
                ]
            }
        }
    })
    .copy('src/images/', 'dist/assets/images')
    .copy('src/icon/', 'dist/assets/icon')
    .copy('src/*.html', 'dist')
    .copy('src/manifest.json', 'dist')
    .setPublicPath('./')
;

