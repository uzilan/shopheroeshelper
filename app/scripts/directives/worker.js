'use strict';

/**
 * @ngdoc directive
 * @name shopheroesApp.directive:worker
 * @description
 * # worker
 */
angular.module('shopheroesApp')
  .directive('worker', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/workerTemplate.html'
    };
  });
