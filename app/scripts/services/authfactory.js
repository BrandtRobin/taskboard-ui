'use strict';

/**
 * @ngdoc service
 * @name taskboardApp.authFactory
 * @description
 * # authFactory
 * Factory in the taskboardApp.
 */
angular.module('taskboardApp')
  .factory('authFactory', ['$rootScope', '$http', function ($rootScope, $http) {

    var loginServiceUrl = "http://localhost:8080/web-service/login/";

    var authFactory = {
      authData: undefined
    };

    authFactory.login = function (user) {
      return $http.post(loginServiceUrl, user);
    };

    authFactory.createUser = function (user) {
      return $http.post(loginServiceUrl + "new-user", user);
    };

    authFactory.createTeam = function (team) {
      return $http.post(loginServiceUrl + "new-team", team);
    };

    return authFactory;
  }]);
