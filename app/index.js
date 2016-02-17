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
    this.copy('_eslintrc.json', '.eslintrc.json');
    this.copy('_package.json', 'package.json');
    this.copy('_webpack.config.js', 'webpack.config.js');
    this.copy('_karma.conf.js', 'karma.conf.js');
    this.copy('gitignore', '.gitignore');
    this.copy('_README.md', 'README.md');
    this.copy('_server.js', 'server.js');
    this.directory('src', 'src');
    this.directory('httpd', 'httpd');
    this.directory('log', 'log');

    this.copy('_docker-build.sh', 'docker-build.sh');
    this.copy('_docker-compose.yml', 'docker-compose.yml');
    this.copy('_Dockerfile', 'Dockerfile');
    this.copy('_docker-start.sh', 'docker-start.sh');
    this.copy('_logrotate.conf', 'logrotate.conf');
    this.copy('_filebeat.yml', 'filebeat.yml');
  },

  install: function() {
    this.installDependencies({
      bower: false,
      npm: true
    });
  }
});
