'use strict';

var gulp = require('gulp');

gulp.task('foundationCompile', function () {
    var sass = require('gulp-sass');
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./asset/sass/foundation/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            includePaths: ['node_modules/foundation-sites/scss']
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./asset/precss'));
});

gulp.task('foundationPrefix', function () {
    var postcss = require('gulp-postcss');
    var prefixer = require('postcss-prefixer');

    var processors = [prefixer({ prefix: 'f-' })];

    return gulp.src('./asset/precss/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./asset/css'));
});

gulp.task('css', function () {
    var sass = require('gulp-sass');
    var postcss = require('gulp-postcss');
    var autoprefixer = require('autoprefixer');

    return gulp.src('./asset/sass/theme/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            includePaths: ['node_modules/foundation-sites/scss']
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest('./asset/css'));
});

gulp.task('css:watch', function () {
    gulp.watch('./asset/sass/*.scss', gulp.parallel('css'));
});
