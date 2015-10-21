'use strict';
angular.module('taskboardApp')
  .factory('teamFactory', function ($http) {
    var teamServiceUrl = "http://localhost:8080/web-service/teams/";
    return {
      addUserToTeam: function (teamId, username) {
        return $http.put(teamServiceUrl + 'id/' + teamId + 'username/' + username);
      },
      addUserToTeamByTeamName: function (teamId, username) {
        return $http.put(teamServiceUrl + 'id/' + teamId + '/username/' + username);
      },
      createTeam: function(team) {
        return $http.post(teamServiceUrl, team);
      },
      findTeamByTeamName: function(teamName) {
        return $http.get(teamServiceUrl + 'team/' + teamName);
      },
      getTeams: function() {
        return $http.get(teamServiceUrl);
      },
      getTeamById: function(teamId) {
        return $http.get(teamServiceUrl + 'id/' + teamId);
      }
    };
  });
