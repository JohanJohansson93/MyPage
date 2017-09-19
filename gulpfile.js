'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

//Styles task
gulp.task('styles', function () {
  gulp.src('./src/styles/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(changed('./src/styles/css'))
       .pipe(gulp.dest('./src/styles/css'))
});

gulp.task('html', function () {
   gulp.src('./src/*.html')
       .pipe(gulp.dest('src'))
});

gulp.task('scripts', function () {
   return gulp.src('./src/scripts/*.js')
        .pipe(gulp.dest('src/scripts'))
});

// Watch changes
gulp.task('watch', function() {
    gulp.watch('./src/index.html', ['html']);
    gulp.watch('./src/scripts/**', ['scripts']);
    gulp.watch('./src/styles/*.scss', ['styles']);
});

//Run tasks
gulp.task('default', ['watch']);