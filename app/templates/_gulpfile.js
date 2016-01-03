var gulp = require('gulp'),
  webpack = require('webpack-stream'),
  fse = require('fs-extra');

var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('default', $.taskListing);
gulp.task('help', $.taskListing);

gulp.task('serve', () => {
  var browserSync = require("browser-sync");
  var browserSyncConfig = require("./bs-config");
  // start the server
  browserSync(browserSyncConfig);
});

gulp.task('webpack', () => {
  var webpackConfig = require('./webpack.config.js');
  // increase compilation times
  webpackConfig.watch = true;

  return gulp.src('./src/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('assets', () => {
  $.watch('src/index.html', vinyl => {

    var src = vinyl.path;
    var dest = vinyl.path.replace(/\/src\//, '/dist/');

    fse.copy(src, dest, err => {
      if (err) return console.error(err);
      console.log("Copied src:  ", src);
      console.log("Copied dest: ", dest);
    });

  });
});
