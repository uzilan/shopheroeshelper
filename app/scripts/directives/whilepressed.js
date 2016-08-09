'use strict';

/**
 * @ngdoc directive
 * @name shopheroesApp.directive:whilePressed
 * @description
 * # whilePressed
 */
angular.module('shopheroesApp')
  .directive('whilePressed', function ($parse, $interval) {
    var TICK_LENGTH = 100;
    return {
      restrict: 'A',
      link: function postLink(scope, elem, attrs) {

        var action = $parse(attrs.whilePressed);
        var intervalPromise = null;

        function bindWhilePressed() {
          elem.on('mousedown', beginAction);
        }

        function bindEndAction() {
          elem.on('mouseup', endAction);
          elem.on('mouseleave', endAction);
        }

        function unbindEndAction() {
          elem.off('mouseup', endAction);
          elem.off('mouseleave', endAction);
        }

        function beginAction(e) {
          e.preventDefault();
          tickAction();
          intervalPromise = $interval(tickAction, TICK_LENGTH);
          bindEndAction();
        }

        function endAction() {
          $interval.cancel(intervalPromise);
          unbindEndAction();
        }

        function tickAction() {
          action(scope);
        }

        bindWhilePressed()
      }
    };
  });
