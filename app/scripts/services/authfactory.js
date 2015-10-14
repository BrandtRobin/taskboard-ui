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

    var authFactory = {
      authData: undefined
    };

    authFactory.login = function (user) {
      return $http.post('http://localhost/api/auth/', user);
    };

    return authFactory;
  }])