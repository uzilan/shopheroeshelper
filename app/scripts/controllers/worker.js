'use strict';

/**
 * @ngdoc function
 * @name shopheroesApp.controller:WorkerCtrl
 * @description
 * # WorkerCtrl
 * Controller of the shopheroesApp
 */
angular.module('shopheroesApp')
  .controller('WorkerCtrl', ['$scope', 'workerStructure', function ($scope, workerStructure) {

    $scope.workerStructure = workerStructure;
    $scope.tier1Workers = _.filter(workerStructure.workers, {'tier': 1});
    $scope.tier2Workers = _.filter(workerStructure.workers, {'tier': 2});
    $scope.tier3Workers = _.filter(workerStructure.workers, {'tier': 3});
    $scope.workersTier1 = new Array(6);
    $scope.workersTier2 = new Array(6);
    $scope.workersTier3 = new Array(6);


    // find out if a given specialization is among the ones that the selected workers have
    $scope.isSpecSelected = function (specialization) {

      var workers = _.concat($scope.workersTier1, $scope.workersTier2, $scope.workersTier3);

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
      var workers = _.concat($scope.workersTier1, $scope.workersTier2, $scope.workersTier3);

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
        return w.points[spec.name];
      });
    };

    $scope.changePoints = function (worker, spec, amount) {

      var currentWorker = _.find($scope.selectedWorkers(), {'name': worker.name});

      var amountIsNotMinus = currentWorker.points[spec.name] + amount >= 0;
      var amountDoesNotBreachPointsLeftToSpend = $scope.pointsToSpend(worker) > 0 || amount < 0;
      var mastery = workerStructure.specializations.mastery;
      var specsWithoutMastery = _.without(worker.specializations, mastery);
      var maxSpec = _.maxBy(specsWithoutMastery, function (s) {
        return worker.points[s.name];
      });
      var maxPoints = worker.points[maxSpec.name];

      var masteryDoesNotExceedHeighstPoint = amount < 0 ||
        (spec.name !== mastery.name || currentWorker.points[mastery.name] < maxPoints);


      if (amountIsNotMinus && amountDoesNotBreachPointsLeftToSpend && masteryDoesNotExceedHeighstPoint) {
        currentWorker.points[spec.name] += amount;
      }
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
      }

      return (craftingBaselinePoints + masteryBaselinePoints) + pointsPerLevel * (worker.level - 1);
    };

    $scope.pointsToSpend = function (worker) {
      return $scope.getPoints(worker) - _.sumBy(worker.specializations, function (s) {
          return worker.points[s.name];
        });
    };

  }]);
