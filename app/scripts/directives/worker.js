'use strict';

/**
 * @ngdoc directive
 * @name shopheroesApp.directive:worker
 * @description
 * # worker
 */
angular.module('shopheroesApp')
  .controller('workerDirectiveController', function() {

  })
  .directive('worker', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/workerTemplate.html'
    };
  });
