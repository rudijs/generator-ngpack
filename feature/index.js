'use strict';

var generators = require('yeoman-generator'),
  _ = require('lodash');

module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    this.argument('featureName', { type: String, required: true });

    this.featureTitle = _.startCase(this.featureName);
    this.folderName = _.kebabCase(this.featureName);
    this.fileName = _.snakeCase(this.featureName);
    this.ngFunctionName = _.camelCase(this.featureName);
    this.ngControllerName = _.capitalize(this.ngFunctionName);
    this.ngRouteName = this.featureName.toLowerCase();

    console.log('inside sub generator feature: ', this.featureName);
    console.log('this.folderName', this.folderName);
    console.log('this.fileName', this.fileName);
    console.log('this.ngFunctionName', this.ngFunctionName);
    console.log('this.ngControllerName', this.ngControllerName);
    console.log('this.ngRouteName', this.ngRouteName);

  },
  writing: function () {
    this.copy('feature.html', `src/${this.folderName}/${this.fileName}.html`);
    this.copy('feature.styl', `src/${this.folderName}/${this.fileName}.styl`);
    this.copy('feature.controller.js', `src/${this.folderName}/${this.fileName}.controller.js`);
    this.copy('index.js', `src/${this.folderName}/index.js`);
    this.copy('routes.js', `src/${this.folderName}/routes.js`);
  }
});
