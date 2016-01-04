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
  },
  end: function() {
    console.log(`\n==> Code help samples and tips <==`);
    console.log(`==================================`);

    console.log(`\n==> Javascript code snippet for index.js to load the '${this.featureTitle}' feature:`);
    var snippet = `import ${this.ngFunctionName} from './${this.fileName}';\n${this.ngFunctionName}(ngModule);\n`;
    console.log(snippet);

    var tip = `==> Update route url \'/${this.ngRouteName}\' in \'src/${this.folderName}/routes.js\' as required.\n`
    console.log(tip);

    console.log('==> HTML href tag code snippet:');
    var htmlHref = `<a href="#!/${this.ngRouteName}">${this.featureTitle}</a>`;
    console.log(htmlHref);

    console.log(`\n==> Done <==`);
    console.log(`============`);
  }
});
