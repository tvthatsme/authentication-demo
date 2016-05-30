'use strict';

/**
 * @ngdoc overview
 * @name authenticationDemoApp
 * @description
 * # authenticationDemoApp
 *
 * Main module of the application.
 */
angular
  .module('authenticationDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
