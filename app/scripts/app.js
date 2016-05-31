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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
