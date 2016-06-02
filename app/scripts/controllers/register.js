'use strict';

/**
 * @ngdoc function
 * @name authenticationDemoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the authenticationDemoApp
 */
angular.module('authenticationDemoApp')
  .controller('RegisterCtrl', ['$scope', function ($scope) {
    
    // Define the maximum number of characters for a forename or surname
    $scope.nameInputMax = 100;
  }]);
