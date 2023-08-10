const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    'postcss-preset-env',
    tailwindcss,
    process.env.NODE_ENV === 'production'
      && purgecss({
        content: ['./src/**/*.html', './src/**/*.js'], // Paths to your HTML and JavaScript files
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
    process.env.NODE_ENV === 'production'
      && cssnano({
        preset: 'default',
      }),
  ],
};
