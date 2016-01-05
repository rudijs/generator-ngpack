'use strict';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
// import 'angular-messages.min.js';
import 'angular-material';

import 'angular-material/angular-material.min.css';

if (ON_TEST) {
  require('angular-mocks');
}

const ngModule = angular
  .module('app', [
    'ui.router',
    'ngMaterial'
  ])
  /* This config block requires manual ng-annotation with an array or @ngInject.
    The build pipeline requires this, else it errors out. */
  .config( // @ngInject
   $locationProvider => {
    // Enable HTML5 Location Mode
    $locationProvider.hashPrefix('!');
  });

import commonDirectives from './common/directives';
commonDirectives(ngModule);

import commonServices from './common/services';
commonServices(ngModule);

import home from './home';
home(ngModule);

/**
 * Add new feature folders here
 * Example: About Us
 */
// import aboutUs from './about-us';
// aboutUs(ngModule);
