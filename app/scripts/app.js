'use strict';

/**
 * @ngdoc overview
 * @name shopheroesApp
 * @description
 * # shopheroesApp
 *
 * Main module of the application.
 */
angular
  .module('shopheroesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/worker.html',
        controller: 'WorkerCtrl',
        controllerAs: 'wc'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
