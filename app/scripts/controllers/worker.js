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
    // find out if a given specialization is among the ones that the selected workers have
    $scope.isSpecSelected = function (specialization) {

      // take the list of all workers: {name: 'Armorer',tier: 1,specializations: [spec.armor, spec.metal]}...
      return _.chain(workerStructure.workers)
        // zip it with the list of selected workers: [[{name: 'Armorer'...}, false], [{name: 'Blacksmith'...}, true]...]
        .zip($scope.workers)
        // filter it so that only the selected workers are left: [[{name: 'Blacksmith'...}, true]...]
        .filter(function (pair) {
          return pair[1]; // that is, if the second element in the array (which indicates selection) exists and is true
        })
        // flatmap it to get a single list of chosen specializations: [spec.armor, spec.metal]
        .flatMap(function (f) {
          return f[0].specializations;
        })
        // try to find the given specialization among the list above
        .find({'name': specialization.name})
        // voila! (oh, and when chaining, lodash wants us to call the value() function at the end)
        .value();

    }
  }]);
