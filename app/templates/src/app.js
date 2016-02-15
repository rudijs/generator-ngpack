'use strict';

import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-aria';
// import 'angular-messages.min.js';

/* eslint-disable */
import ngRedux from 'ng-redux';
/* eslint-enable */
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import 'angular-material';
import 'angular-material/angular-material.min.css';

if (ON_TEST) {
  require('angular-mocks');
}

const ngModule = angular
  .module('app', [
    'ui.router',
    'ngMaterial',
    'ngRedux'
  ])

/* eslint-disable */
  .config( // @ngInject
    /* eslint-enable */
    $locationProvider => {
      // use the HTML5 History API
      $locationProvider.html5Mode(true);
    })
/* eslint-disable */
  .config( // @ngInject
    /* eslint-enable */
    $mdThemingProvider => {
      $mdThemingProvider.theme('default')
        .primaryPalette('light-green');
    })
/* eslint-disable */
  .config( // @ngInject
    /* eslint-enable */
    $locationProvider => {
      // Enable HTML5 Location Mode
      $locationProvider.hashPrefix('!');
    })
/* eslint-disable */
  .config( // @ngInject
    $ngReduxProvider => {
      /* eslint-enable */
      $ngReduxProvider.createStoreWith(rootReducer, [thunk]);
    });

// font faces and icons available site wide
// .styl files will use the font-faces
// .html file will use the icons
// webpack will url-inline them into bundle.js
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
