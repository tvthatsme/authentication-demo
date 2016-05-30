'use strict';

/**
 * @ngdoc directive
 * @name authenticationDemoApp.directive:footer
 * @description
 * # footer
 */
angular.module('authenticationDemoApp')
  .directive('footer', function () {
    return {
      templateUrl: 'views/footer.html'
    };
  });
