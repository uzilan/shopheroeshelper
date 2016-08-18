'use strict';

/**
 * @ngdoc function
 * @name shopheroesApp.controller:WorkerCtrl
 * @description
 * # WorkerCtrl
 * Controller of the shopheroesApp
 */
angular.module('shopheroesApp')
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('shopheroeshelper');
  })
  .controller('WorkerCtrl', ['$scope', 'workerStructure', 'localStorageService',
    function ($scope, workerStructure, localStorageService) {

      $scope.workerStructure = workerStructure;
      $scope.tier1Workers = _.filter(workerStructure.workers, {'tier': 1});
      $scope.tier2Workers = _.filter(workerStructure.workers, {'tier': 2});
      $scope.tier3Workers = _.filter(workerStructure.workers, {'tier': 3});
      $scope.tierxWorkers = _.filter(workerStructure.workers, function (w) {
        return w.tier > 3
      });
      $scope.workersTier1 = new Array(6);
      $scope.workersTier2 = new Array(6);
      $scope.workersTier3 = new Array(6);
      $scope.workersTierx = new Array(2);

      fetchWorkers();

      // find out if a given specialization is among the ones that the selected workers have
      $scope.isSpecSelected = function (specialization) {

        var workers = _.concat($scope.workersTier1, $scope.workersTier2, $scope.workersTier3, $scope.workersTierx);

        // take the list of all workers: {name: 'Armorer',tier: 1,specializations: [spec.armor, spec.metal]}...
        return _.chain(workerStructure.workers)
        // zip it with the list of selected workers: [[{name: 'Armorer'...}, false], [{name: 'Blacksmith'...}, true]...]
          .zip(workers)
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
      };

      $scope.selectedWorkers = function () {
        var workers = _.concat($scope.workersTier1, $scope.workersTier2, $scope.workersTier3, $scope.workersTierx);

        // take the list of all workers: {name: 'Armorer',tier: 1,specializations: [spec.armor, spec.metal]}...
        return _.chain(workerStructure.workers)
        // zip it with the list of selected workers: [[{name: 'Armorer'...}, false], [{name: 'Blacksmith'...}, true]...]
          .zip(workers)
          // filter it so that only the selected workers are left: [[{name: 'Blacksmith'...}, true]...]
          .filter(function (pair) {
            return pair[1]; // that is, if the second element in the array (which indicates selection) exists and is true
          })
          .map(function (pair) {
            return pair[0];
          })
          .flatten()
          // voila! (oh, and when chaining, lodash wants us to call the value() function at the end)
          .value();
      };

      $scope.showPoints = function (worker, spec) {
        return _.find(worker.specializations, {'name': spec.name});
      };

      $scope.getSpecPoints = function (spec) {
        return _.sumBy($scope.selectedWorkers(), function (w) {
          return w.points[spec.name] ? Number(w.points[spec.name]) : 0;
        });
      };

      $scope.changePoints = function (worker, spec, amount) {
        worker.points[spec.name] = Number(worker.points[spec.name]) + Number(amount);
        $scope.saveWorkers();
      };

      $scope.getPoints = function (worker) {

        var craftingBaselinePoints = 0;
        var masteryBaselinePoints = 0;
        var pointsPerLevel = 0;

        if (worker.tier === 1) {
          craftingBaselinePoints = 10;
          masteryBaselinePoints = 1;
          pointsPerLevel = 5;
        } else if (worker.tier === 2) {
          craftingBaselinePoints = 20;
          masteryBaselinePoints = 7;
          pointsPerLevel = 7;
        } else if (worker.tier === 3) {
          craftingBaselinePoints = 60;
          masteryBaselinePoints = 15;
          pointsPerLevel = 10;
        } else if (worker.tier === 4) {
          craftingBaselinePoints = 100;
          masteryBaselinePoints = 25;
          pointsPerLevel = 12;
        } else if (worker.tier === 5) {
          craftingBaselinePoints = 13;
          masteryBaselinePoints = 0;
          pointsPerLevel = 15;
        }

        return (craftingBaselinePoints + masteryBaselinePoints) + pointsPerLevel * (worker.level - 1);
      };

      $scope.pointsToSpend = function (worker) {
        var sum = 0;

        _.forEach(worker.specializations, function (s) {
          sum += Number(worker.points[s.name]);
        });

        return $scope.getPoints(worker) - sum;
      };

      $scope.saveWorkers = function () {
        var workers = _.chain($scope.selectedWorkers())
          .map(function (w) {
            return {
              name: w.name,
              level: w.level,
              points: w.points
            };
          })
          .value();

        localStorageService.set("workers", workers);
        localStorageService.set("workersTier1", $scope.workersTier1);
        localStorageService.set("workersTier2", $scope.workersTier2);
        localStorageService.set("workersTier3", $scope.workersTier3);
        localStorageService.set("workersTierx", $scope.workersTierx);
      };

      function fetchWorkers() {
        var workersTier1 = localStorageService.get("workersTier1");
        var workersTier2 = localStorageService.get("workersTier2");
        var workersTier3 = localStorageService.get("workersTier3");
        var workersTierx = localStorageService.get("workersTierx");
        var workers = localStorageService.get("workers");

        if (workersTier1) {
          $scope.workersTier1 = workersTier1;
        }

        if (workersTier2) {
          $scope.workersTier2 = workersTier2;
        }

        if (workersTier3) {
          $scope.workersTier3 = workersTier3;
        }

        if (workersTierx) {
          $scope.workersTierx = workersTierx;
        }

        if (workers) {
          _.forEach(workers, function (w) {
            var currentWorker = _.find(workerStructure.workers, {'name': w.name});
            currentWorker.level = w.level;
            currentWorker.points = w.points;
          });
        }
      }


    }]);
