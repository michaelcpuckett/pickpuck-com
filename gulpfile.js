var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVariables = require('postcss-custom-properties');
var customMedia = require('postcss-custom-media');
var mustache = require('gulp-mustache-plus');
var del = require('del');
var shell = require('gulp-shell');
var rename = require('gulp-rename');

var templateData = require('./src/index.json');

var generatePdf = require('./generate-pdf-resume');

gulp.task('clean', function (cb) {
    return del(['./public/','./phantom/.'], cb);
});

gulp.task('styles', function () {
    return gulp.src(['./src/style.css','./src/print.css'])
        .pipe(postcss([
            cssVariables(),
            customMedia(),
            // autoprefixer({
            //     browsers: ['> 1%']
            // })
        ]))
        .pipe(gulp.dest('./public/'))
        .pipe(gulp.dest('./phantom/'))
});

gulp.task('phantom:styles', ['public'], function () {
    return gulp.src(['./src/phantom.css'])
        .pipe(rename('print.css'))
        .pipe(postcss([
            cssVariables(),
            customMedia(),
            // autoprefixer({
            //     browsers: ['> 1%']
            // })
        ]))
        .pipe(gulp.dest('./phantom/'))
});

gulp.task('markup', function () {
    return gulp.src('./src/*.mustache')
        .pipe(mustache(templateData))
        .pipe(gulp.dest('./public/'))
        .pipe(gulp.dest('./phantom/'));
});

gulp.task('assets', function () {
    return gulp.src(['./src/*.png', './src/*.jpg', './src/*.html', './src/*.pdf'])
        .pipe(gulp.dest('./public/'))
        .pipe(gulp.dest('./phantom/'));
});

gulp.task('public', ['styles', 'markup', 'assets']);

gulp.task('phantom:generate', ['phantom:styles'], function () {
    generatePdf();
});

gulp.task('phantom', ['phantom:generate'])

gulp.task('default', ['phantom']);

gulp.task('watch', function () {
    gulp.watch(['./src/*'], ['public']);
});
