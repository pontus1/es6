const gulp = require('gulp')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const clean = require('gulp-clean')

gulp.task('default', function () {
  // Run ESLint
  gulp.src(['src/**/*.js', 'public/src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
  // Node source
  gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'))
  // browser source
  gulp.src('public/src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'))
})
// clean dist folders
gulp.task('clean', function () {
  gulp.src('dist/*.js', {read: false})
    .pipe(clean())
  gulp.src('public/dist/*.js', {read: false})
    .pipe(clean())
})
