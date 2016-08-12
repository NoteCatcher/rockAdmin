'use strict';

/**
 * @ngdoc function
 * @name rockadminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the rockadminApp
 */
angular.module('rockadminApp')
  .controller('MainCtrl', ['auth', '$scope', '$location', function (auth, $scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logout = function () {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

  }]);
