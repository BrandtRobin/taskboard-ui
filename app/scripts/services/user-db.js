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
      },
      getUserByUsername: function(username) {
        return $http.get(userServiceUrl + 'username/' +  username);
      },
      findUsersByTeam: function(teamName) {
        return $http.get(userServiceUrl + 'teamname/' + teamName);
      }
    };
  });
