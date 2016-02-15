'use strict';

var generators = require('yeoman-generator'),
  _ = require('lodash');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('appname', { type: String, required: true });

    this.viewName = _.startCase(this.appname);
    this.appname = _.camelCase(this.appname);
    this.kebabName = _.kebabCase(this.appname);
  },

  writing: function () {
    this.copy('_bs-config.js', 'bs-config.js');
    this.copy('_eslintrc', '.eslintrc');
    this.copy('_package.json', 'package.json');
    this.copy('_webpack.config.js', 'webpack.config.js');
    this.copy('_karma.conf.js', 'karma.conf.js');
    this.copy('gitignore', '.gitignore');
    this.copy('_README.md', 'README.md');
    this.copy('_server.js', 'server.js');
    this.directory('src', 'src');
    this.directory('httpd', 'httpd');
    this.directory('log', 'log');
  },

  install: function() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
});
