'use strict';
angular.module('taskboardApp')
  .controller('UserCtrl', function ($scope, userDb) {
    //var teamId = 1;
    var teamId = window.localStorage.getItem("teamId");

    function getUsersByTeamId() {
      userDb.getUsersByTeamId(teamId)
        .then(function (res) {
          $scope.users = [];
          $scope.users = res.data;
        });
    }

    getUsersByTeamId();

  });
