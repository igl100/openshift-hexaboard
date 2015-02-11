'use strict';

var connect = require('gulp-connect')
  , open    = require('open')
  ;

module.exports = function(gulp, opts) {
  gulp.task('connect', function() {
    connect.server({
      root: 'src',
      livereload: true
    });
    open('http://localhost:8080');
  });

  gulp.task('html', function () {
    gulp.src('./src/**/*.html')
      .pipe(connect.reload());
  });

  gulp.task('js', function () {
    gulp.src('./src/**/*.js')
      .pipe(connect.reload());
  });

  gulp.task('css', function () {
    gulp.src('./src/**/*.css')
      .pipe(connect.reload());
  });

  gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html'], ['html']);
    gulp.watch(['./src/**/*.js'], ['js']);
    gulp.watch(['./src/**/*.css'], ['css']);
  });
};