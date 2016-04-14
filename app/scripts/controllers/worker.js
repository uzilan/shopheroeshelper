'use strict';

/**
 * @ngdoc function
 * @name shopheroesApp.controller:WorkerCtrl
 * @description
 * # WorkerCtrl
 * Controller of the shopheroesApp
 */
angular.module('shopheroesApp')
  .controller('WorkerCtrl', ['$scope', 'workerConstants', 'workerStructure', 'workerService', function ($scope, workerConstants, workerStructure, workerService) {

    $scope.workerConstants = workerConstants;
    $scope.workerStructure = workerStructure;
    $scope.numberOfWorkers = 3;
    $scope.workers = [];
    $scope.getWorkerSpecializations = function (worker) {
      return _.chain(worker.specializations)
        .map('name')
        .join(', ')
        .value();
    };
    $scope.isSpecSelected = function (specialization) {

      var zip = _.zip(workerStructure.workers, $scope.workers);
      var filtered = _.filter(zip, function (pair) {
        return pair[1];
      });
      var specList = _.flatMap(filtered, function (f) {
        return f[0].specializations;
      });
      var found = _.find(specList, {'name': specialization.name});

      return found;
    }
  }]);
