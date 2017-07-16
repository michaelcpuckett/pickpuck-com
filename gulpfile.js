const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssVariables = require('postcss-custom-properties');
const customMedia = require('postcss-custom-media');
const mustache = require('gulp-mustache-plus');
const del = require('del');
const shell = require('gulp-shell');
const rename = require('gulp-rename');
const templateData = require('./src/index.json');

const HeadlessChrome = require('simple-headless-chrome');

async function navigateWebsite(cb) {
  const browser = new HeadlessChrome({
    headless: true
  });
  await browser.init();
  await browser.goTo('http://localhost:3000');
  await browser.printToPDF();
  await browser.close();
  cb();
}

gulp.task('resume', (cb) => {
    return navigateWebsite(cb);
});

gulp.task('clean', (cb) => {
    return del(['./public/'], cb);
});

gulp.task('styles', () => {
    return gulp.src(['./src/style.css','./src/print.css'])
        .pipe(postcss([
            cssVariables(),
            customMedia(),
            autoprefixer({
                browsers: ['> 1%']
            })
        ]))
        .pipe(gulp.dest('./public/'));
});

gulp.task('markup', () => {
    return gulp.src('./src/*.mustache')
        .pipe(mustache(templateData))
        .pipe(gulp.dest('./public/'));
});

gulp.task('assets', () => {
    return gulp.src(['./src/*.png', './src/*.jpg', './src/*.html', './src/*.pdf'])
        .pipe(gulp.dest('./public/'))
});

gulp.task('public', ['styles', 'markup', 'assets']);

gulp.task('default', ['public']);

gulp.task('watch', () => {
    gulp.watch(['./src/*'], ['public']);
});
