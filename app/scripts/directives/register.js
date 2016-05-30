'use strict';

/**
 * @ngdoc directive
 * @name authenticationDemoApp.directive:register
 * @description
 * # register
 */
angular.module('authenticationDemoApp')
  .directive('register', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the register directive');
        console.log(attrs);
      }
    };
  });
