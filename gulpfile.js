const {watch, series, src, dest} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

const clean = (cb) => cb();
const build = (cb) => {
  return src('./src/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('./build'));
};

exports.build = build;
exports.default = () => {
  watch('src/**/*.sass', build);
};
