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
  /* eslint-disable */
  .config( // @ngInject
  /* eslint-enable */
    $locationProvider => {
      // Enable HTML5 Location Mode
      $locationProvider.hashPrefix('!');
    });

// font faces and icons available site wide
// .styl files will use the font-faces
// .html file will use the icons
// webpack will url-inline them into bundle.js
import './assets/fonts/font_faces.styl';
import './assets/icons/flaticon/flaticon.css';

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
// import about from './about';
// about(ngModule);
