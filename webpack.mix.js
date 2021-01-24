const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
mix.styles([
    'resources/css/animate.css',
    'resources/css/bootstrap.min.css',
    'resources/css/core-style.css',
    'resources/css/font-awesome.min.css',
    'resources/css/jquery-ui.min.css',
    'resources/css/magnific-popup.css',
    'resources/css/nouislider.css',
    'resources/css/owl.carousel.css',
    'resources/css/responsive.css',
    'resources/css/themify-icons.css',
], 'public/css/all.css');