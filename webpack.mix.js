// Mix Dependency
let mix = require('laravel-mix');

// Environment Variables
require('dotenv').config();
let proxy_url = process.env.APP_URL;

// Mix -------------------------------------------------------------------------
mix.webpackConfig({
    resolve: {
        alias: {
            'popper.js' : "popper.js/dist/umd/popper.js"
        }
    }
})
.autoload({
    'popper.js': ['window.Popper', 'Popper'],
    axios      : 'window.axios',
    jquery     : ['$', 'window.jQuery', 'jQuery', 'window.$', 'jquery', 'window.jquery'],
    lodash     : 'window._',
    vue        : ['window.Vue', 'Vue']
})
.js('resources/assets/js/app.js', 'public/js')
.sass('resources/assets/sass/app.scss', 'public/css')
.sass('resources/assets/sass/admin.scss', 'public/css')
.extract([
    'lodash',
    'jquery',
    'popper.js',
    'bootstrap',
    'axios',
    'vue'
])
.browserSync({
    proxy: proxy_url,
    files: [
        'app/Http/**/*.php',
        'resources/views/**/*.php',
        'resources/assets/{js,sass}/**/*'
    ],
    notify: false
})
.disableNotifications();

if (mix.inProduction()) {
    mix.version();
}
