'use strict';

/**
 * @ngdoc directive
 * @name shopheroesApp.directive:spec
 * @description
 * # spec
 */
angular.module('shopheroesApp')
  .directive('spec', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/specTemplate.html'
    };
  });
