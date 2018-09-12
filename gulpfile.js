var gulp = require('gulp'),
    // concat = require('gulp-concat'),
    // uglify = require('gulp-uglify'),
    $ = require('gulp-load-plugins')();
    // gemini-david 🌴 : npm i gulp-ng-annotate -D


gulp.task('default', function(){
    console.log('Gulp running...');
    // gulp.src('app/src/**/*.js')
    gulp.src('app/*.js')
    // .pipe($.ngAnonate())
    .pipe($.ngAnnotate())
    .pipe($.concat('bundle.js'))
    // .pipe($.uglify())
    .pipe(gulp.dest('./out'))
})