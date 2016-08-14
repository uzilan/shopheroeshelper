'use strict';

/**
 * @ngdoc directive
 * @name shopheroesApp.directive:miniWorker
 * @description
 * # miniWorker
 */
angular.module('shopheroesApp')
  .directive('miniWorker', function () {
    return {
      restrict: 'E',
      template: '<div>{{worker.title}}</div>'
    };
  });
