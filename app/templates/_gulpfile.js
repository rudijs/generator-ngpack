'use strict';

var gulp = require('gulp');
var argv = require('yargs').argv;
var webpack = require('webpack-stream');
var fse = require('fs-extra');
var execSync = require('child_process').execSync;
var $ = require('gulp-load-plugins')({ lazy: true });
var rimraf = require('rimraf');
var runSequence = require('run-sequence');

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
    .pipe($.plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./build'));
});

gulp.task('assets', () => {
  var files = [
    'src/index.html'
  ];

  // if not watching files, then one time copy all
  if (!argv.w) {
    return gulp
      .src(files)
      .pipe($.print(file => {
        return `==> Copied to build/: ${file}`;
      }))
      .pipe(gulp.dest('build'));
  }

  $.watch(files, vinyl => {
    var src = vinyl.path;
    var dest = vinyl.path.replace(/\/src\//, '/build/');

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

  return gulp.src(src).pipe($.eslint({
    extends: 'google'
  }))
    .pipe($.eslint.format())
		// Brick on failure to be super strict
    .pipe($.eslint.failOnError());
});

gulp.task('karma', () => {
  var cmd = [
    'NODE_ENV=test',
    './node_modules/.bin/karma start karma.conf.js'
  ];

  if (argv.s) {
    cmd.push('--single-run');
    cmd.push('--reporters dots');
  }

  if (argv.p) {
    cmd.push('--browsers PhantomJS');
  }

  return execSync(cmd.join(' '), { stdio: [0, 1, 2] });
});

gulp.task('dist-clean', callback => {
  rimraf('dist', callback);
});

gulp.task('dist-webpack', () => {
  const envs = $.env.set({
    NODE_ENV: 'production'
  });

  const webpackConfig = require('./webpack.config.js');

  return gulp.src('./src/**/*.js')
    .pipe(envs)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('dist-assets', () => {
  const files = [
    'src/images/**/*.svg'
  ];

  return gulp
    .src(files)
    .pipe($.print(file => {
      return `==> Copied to build/: ${file}`;
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('dist-revision', () => {
  return gulp
    .src(['dist/bundle.js'])
    .pipe($.rev())
    .pipe(gulp.dest('dist'))
    .pipe($.rev.manifest())
    .pipe(gulp.dest('dist'));
});

gulp.task('dist-revreplace', () => {
  const manifest = gulp.src('dist/rev-manifest.json');

  return gulp
    .src('src/index.html')
    .pipe($.revReplace({ manifest: manifest }))
    .pipe(gulp.dest('dist'));
});

gulp.task('dist', callback => {
  runSequence(
    'dist-clean',
    'dist-webpack',
    // build in parallel
    [
      'dist-assets'
    ],
    'dist-revision',
    'dist-revreplace',
    callback
    );
});
