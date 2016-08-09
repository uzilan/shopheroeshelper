'use strict';

/**
 * @ngdoc directive
 * @name shopheroesApp.directive:points
 * @description
 * # points
 */
angular.module('shopheroesApp')
  .directive('points', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/pointsTemplate.html'
    };
  });
