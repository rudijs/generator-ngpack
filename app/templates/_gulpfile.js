var gulp = require('gulp');
var argv = require('yargs').argv;
var webpack = require('webpack-stream');
var fse = require('fs-extra');
var eslint = require('gulp-eslint');

var $ = require('gulp-load-plugins')({ lazy: true });

gulp.task('default', $.taskListing);
gulp.task('help', $.taskListing);

gulp.task('serve', () => {
  var browserSync = require('browser-sync');
  var browserSyncConfig = require('./bs-config');
  // start the server
  browserSync(browserSyncConfig);
});

gulp.task('webpack', () => {
  var webpackConfig = require('./webpack.config.js');

  // if -w watch files
  if (argv.w) {
    webpackConfig.watch = true;
  }

  return gulp.src('./src/**/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('assets', () => {
  $.watch('src/index.html', vinyl => {
    var src = vinyl.path;
    var dest = vinyl.path.replace(/\/src\//, '/dist/');

    fse.copy(src, dest, err => {
      if (err) {
        return console.error(err);
      }
      console.log('Copied src:  ', src);
      console.log('Copied dest: ', dest);
    });
  });
});

gulp.task('lint', () => {
  var src = [
    'src/**/*.js',
    './gulpfile.js'
  ];

  // if -w watch files
  if (argv.w) {
    // set -w to false so this task can call itself and run the linting below
    argv.w = false;
    return gulp.watch(src, ['lint']);
  }

  return gulp.src(src).pipe(eslint({
    extends: 'google'
  }))
    .pipe(eslint.format())
		// Brick on failure to be super strict
    .pipe(eslint.failOnError());
});
