'use strict';
angular.module('taskboardApp')
  .controller('TeamCtrl', function ($scope, teamFactory) {

    var teamId = window.localStorage.getItem("teamId");
    $scope.newTeam = function (team) {
      if ($scope.teamForm.$valid) {
        teamFactory.createTeam(team).success(function (data, status, headers) {

          var username = window.localStorage.getItem("username");
          var location = headers('Location');
          var newTeamId = location.substr(location.lastIndexOf('/') + 1);
          window.localStorage.setItem("teamId", newTeamId);
          addUserToTeam(newTeamId, username);
        });

      }
    };

    function addUserToTeam(teamId, username) {
      teamFactory.addUserToTeamByTeamName(teamId, username);
    }

    $scope.addUserToMyTeam = function (username) {
      var teamId = window.localStorage.getItem("teamId");
      teamFactory.addUserToTeamByTeamName(teamId, username);
    };



    function getTeams() {
      teamFactory.getTeams()
        .then(function (res) {
          $scope.teams = res.data;
        });
    }

    function getTeamById() {
      teamFactory.getTeamById(teamId)
        .then(function (res) {
          $scope.myTeams = [];
          $scope.myTeams.push(res.data);
        });
    }

    $scope.mainPage = function () {
      window.location.href = '#/main';
    };

    if (teamId !== null) {
      getTeamById(teamId);
    }

  });

