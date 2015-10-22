'use strict';

/**
 * @ngdoc function
 * @name taskboardApp.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the taskboardApp
 */
angular.module('taskboardApp')
	.controller('LoginCtrl', function ($scope, authFactory, userDb) {

    window.localStorage.clear();
    $scope.error = '';
		$scope.login = function (user) {
      if ($scope.userForm.$valid) {
        authFactory.login(user).success(function (data) {
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("username", user.username);
          userDb.getUserByUsername(window.localStorage.getItem("username"))
            .then(function(res) {
              if (res.data.team !== undefined) {
                window.localStorage.setItem("teamId", res.data.team.id);
              }
              window.location.href = '#/team';
            });


        }).error(function () {
          $scope.error = 'Wrong username or password';
        });
      }
		};

    $scope.newUser = function (user) {
      if ($scope.userForm.$valid) {
        authFactory.createUser(user).success(function (data) {
          window.location.href = '#/login';
        });
      }
    };

    $scope.newUserPage = function () {
      window.location.href = '#/new-user';
    };

	});
