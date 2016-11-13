var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVariables = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var mustache = require('gulp-mustache-plus');
var del = require('del');

var templateData = require('./src/index.json');

gulp.task('clean', function (cb) {
    return del('./public/', cb);
});

gulp.task('styles', function () {
    return gulp.src('./src/*.css')
        .pipe(postcss([
            cssVariables(),
            customMedia(),
            // autoprefixer({
            //     browsers: ['> 1%']
            // })
        ]))
        .pipe(gulp.dest('./public/'))
});

gulp.task('markup', function () {
    return gulp.src('./src/*.mustache')
        .pipe(mustache(templateData))
        .pipe(gulp.dest('./public/'));
});

gulp.task('assets', function () {
    return gulp.src(['./src/*.png', './src/*.jpg', './src/*.html', './src/*.pdf'])
        .pipe(gulp.dest('./public/'));
});

gulp.task('default', ['styles', 'markup', 'assets']);
