'use strict';

/**
 * @ngdoc directive
 * @name authenticationDemoApp.directive:login
 * @description
 * # login
 */
angular.module('authenticationDemoApp')
  .directive('login', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the login directive');
        console.log(attrs);
      }
    };
  });
