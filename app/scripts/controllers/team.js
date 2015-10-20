'use strict';
angular.module('taskboardApp')
  .controller('TeamCtrl', function ($scope, teamFactory) {

    function newTeam(team) {
      if ($scope.teamForm.$valid) {
        teamFactory.createTeam(team)
          .then(teamFactory.addUserToTeam());
          console.log(data);
          //window.location.href = '#/team';
      }
    }

  });
