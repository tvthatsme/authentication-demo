'use strict';

/**
 * @ngdoc directive
 * @name authenticationDemoApp.directive:header
 * @description
 * # header
 */
angular.module('authenticationDemoApp')
  .directive('header', function () {
    return {
      templateUrl: 'views/header.html'
    };
  });
