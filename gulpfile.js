var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');
var minifycss = require('csswring');
var mustache = require('gulp-mustache-plus');
var templateData = require('./src/mustache/_templateData.json');
var del = require('del');

gulp.task('clean', function (cb) {
    return del('./public/', cb);
});

gulp.task('styles', function () {
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init({
            inline: true
        }))
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({
                browsers: ['> 2%']
            })
        ]))
        .pipe(gulp.dest('./public/css/'))
});

gulp.task('markup', function () {
    return gulp.src('./src/mustache/*.mustache')
        .pipe(mustache(templateData, {}, templateData['_partials']))
        .pipe(gulp.dest('./public/'));
});

gulp.task('assets', function () {
    return gulp.src('./src/assets/**')
        .pipe(gulp.dest('./public/assets/'));
});

gulp.task('default', ['styles', 'markup', 'assets']);

gulp.task('watch', ['default'], function () {
    gulp.watch('./src/scss/**', ['styles']);
    gulp.watch('./src/mustache/**', ['markup']);
    gulp.watch('./src/assets/**', ['assets']);
});
