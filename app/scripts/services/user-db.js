'use strict';
angular.module('taskboardApp')
  .factory('userDb', function ($http) {
    var userServiceUrl = "http://localhost:8080/web-service/users/";
    return {
      getUsersByTeamId: function (teamId) {
        return $http.get(userServiceUrl + 'team/' + teamId);
      },
      createUser: function(user) {
        return $http.post(userServiceUrl);
      }
    };
  });
