'use strict';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
// import 'angular-messages.min.js';

import ngRedux from 'ng-redux'; // eslint-disable-line no-unused-vars
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import 'angular-material';
import 'angular-material/angular-material.min.css';

import 'angulartics';
import 'angulartics-google-analytics';
// import 'angulartics/src/angulartics-debug';

if (ON_TEST) {
  require('angular-mocks');
}

const ngModule = angular
  .module('app', [
    'ui.router',
    'ngMaterial',
    'ngRedux',
    'angulartics',
  // 'angulartics.debug',
    'angulartics.google.analytics'
  ])
  .config(['$locationProvider',
    $locationProvider => {
      $locationProvider.html5Mode(true);
    }])
  .config(['$mdThemingProvider', $mdThemingProvider => {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green');
  }])
  .config(['$ngReduxProvider', $ngReduxProvider => {
    $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
  }])
  .config(['$analyticsProvider', $analyticsProvider => {
    if (window.location.href.match(/local/)) {
      $analyticsProvider.developerMode(true);
    }
  }]);

/*
font faces and icons available site wide
.styl files will use the font-faces
.html file will use the icons
webpack will url-inline them into bundle.js */
import './assets/fonts/font_faces.styl';
import './assets/icons/flaticon/flaticon.css';

import commonComponents from './common/components';
commonComponents(ngModule);

import commonDirectives from './common/directives';
commonDirectives(ngModule);

import commonServices from './common/services';
commonServices(ngModule);

import home from './home';
home(ngModule);

import about from './about';
about(ngModule);

import contact from './contact';
contact(ngModule);
