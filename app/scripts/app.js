'use strict';

/**
 * @ngdoc overview
 * @name taskboardApp
 * @description
 * # taskboardApp
 *
 * Main module of the application.
 */
angular
  .module('taskboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'as.sortable'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl',
        controllerAs: 'team'
      })
      .when('/new-user', {
        templateUrl: 'views/new-user.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/login'
      });
      $httpProvider.interceptors.push(function() {
        return {
          request: function(req) {
            req.headers.Authorization = window.localStorage.getItem("token");
            return req;
          }
        }
      })
  });
