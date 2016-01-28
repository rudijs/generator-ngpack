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
    this.ngControllerName = _.capitalize(this.ngFunctionName) + 'Ctrl';
    this.ngControllerFunction = _.camelCase(this.featureName) + 'Ctrl';
    this.ngRouteName = this.featureName.toLowerCase();
  },
  writing: function () {
    this.copy('feature.html', `${this.folderName}/${this.fileName}.html`);
    this.copy('feature.styl', `${this.folderName}/${this.fileName}.styl`);
    this.copy('feature.controller.js', `${this.folderName}/${this.fileName}.controller.js`);
    this.copy('feature.controller_spec.js', `${this.folderName}/${this.fileName}.controller_spec.js`);
    this.copy('index.js', `${this.folderName}/index.js`);
    this.copy('feature.routes.js', `${this.folderName}/${this.fileName}.routes.js`);
    this.copy('feature.routes_spec.js', `${this.folderName}/${this.fileName}.routes_spec.js`);
  },
  end: function() {
    console.log(`\n==================================`);
    console.log(`==> Code help samples and tips <==`);
    console.log(`==================================`);

    console.log(`\n==> Javascript code snippet for app.js to load the '${this.featureTitle}' feature:`);
    var snippet = `import ${this.ngFunctionName} from './${this.folderName}';\n${this.ngFunctionName}(ngModule);\n`;
    console.log(snippet);

    var tip = `==> Update route url \'/${this.ngRouteName}\' in \'${this.folderName}/routes.js\' as required.\n`
    console.log(tip);

    console.log('==> HTML href tag code snippet:');
    var htmlHref = `<a href="#!/${this.ngRouteName}">${this.featureTitle}</a>`;
    console.log(htmlHref);

    console.log(`\n============`);
    console.log(`==> Done <==`);
    console.log(`============`);
  }
});
