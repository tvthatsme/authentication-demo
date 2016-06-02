'use strict';

/**
 * @ngdoc function
 * @name authenticationDemoApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the authenticationDemoApp
 */
angular.module('authenticationDemoApp')
  .controller('LoginCtrl', ['$scope', function ($scope) {
    
    // Define the maximum allowable number of characters for the username
    $scope.usernameInputMax = 100;
    
    // Define the minimum allowable number of characters for the password
    $scope.passwordInputMin = 7;
    
    // Define the maximum allowable number of characters for the password
    $scope.passwordInputMax = 25;
    
    // Define an empty username for the login form
    $scope.usersname = '';
    
    // Define an empty password for the login form
    $scope.password = '';
  }]);
