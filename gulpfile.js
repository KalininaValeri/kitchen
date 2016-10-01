var gulp = require('gulp');
var ejs = require("gulp-ejs");
var gutil = require('gulp-util');
var less = require('gulp-less');

var ejsData = require('./ejs-data');

gulp.task('default', ['watch']);

gulp.task('less', function () {
    return gulp.src('./src/less/style.less')
        .pipe(less())
        .pipe(gulp.dest('build/css'));
});

gulp.task('ejs', function(){
    return gulp.src(['src/ejs/*.ejs', './ejs-data.js'])
        .pipe(ejs({data: ejsData()}, {ext:'.html'}))
        .pipe(gulp.dest('build/html/'));
});

gulp.task('watch', function () {
    // gulp.watch('assets/js/libs/**/*.js', ['squish-jquery']);
    // gulp.watch('assets/js/*.js', ['build-js']);
    gulp.start('less', 'ejs');

    gulp.watch('./src/less/**/*.less', ['less']);
    gulp.watch('./src/**/*.ejs', ['ejs']);
});