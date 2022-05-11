const { src, dest } = require('gulp');
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const cssFiles = ['./src/styles/style.css', './src/styles/responsive.css'];

const cleanCss = () => src(cssFiles)
  .pipe(minifyCSS())
  .pipe(concat('style.min.css'))
  .pipe(dest('./src/styles/'));

exports.cleanCss = cleanCss;
