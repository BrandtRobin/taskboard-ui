'use strict';
angular.module('taskboardApp')
  .factory('teamFactory', function ($http) {
    var teamServiceUrl = "http://localhost:8080/web-service/teams/";
    return {
      addUserToTeam: function (teamId, userId) {
        return $http.get(teamServiceUrl + 'id' + teamId + 'user' + userId);
      },
      createTeam: function(team) {
        return $http.post(teamServiceUrl, team);
      }
    };
  });
