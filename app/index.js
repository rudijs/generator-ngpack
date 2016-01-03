'use strict';

var generators = require('yeoman-generator'),
  _ = require('lodash');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('appname', { type: String, required: true });

    // And you can then access it later on this way; e.g. CamelCased
    this.viewName = _.startCase(this.appname);
    this.appname = _.camelCase(this.appname);
  },

  writing: function () {
    this.copy('_bs-config.js', 'bs-config.js');
    this.copy('_eslintrc', '.eslintrc');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_package.json', 'package.json');
    this.copy('_webpack.config.js', 'webpack.config.js');
    this.copy('_karma.conf.js', 'karma.conf.js');
    this.copy('gitignore', '.gitignore');

    this.copy('src/_index.html', 'src/index.html');
    this.copy('src/_index.html', 'dist/index.html');
    this.copy('src/_index.js', 'src/index.js');
    this.directory('src/common', 'src/common');
    this.directory('src/home', 'src/home');
  }
});
