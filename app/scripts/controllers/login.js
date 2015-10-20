'use strict';

/**
 * @ngdoc function
 * @name taskboardApp.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the taskboardApp
 */
angular.module('taskboardApp')
	.controller('LoginCtrl', function ($scope, authFactory) {

    $scope.error = '';
		$scope.login = function (user) {
      if ($scope.userForm.$valid) {
        authFactory.login(user).success(function (data) {
          $scope.user = user.username;
          $scope.token = data.token;
          window.localStorage.setItem("token", data.token);
          window.localStorage.setItem("username", user.username);
          console.log(data.token);
          window.location.href = '#/team';


        }).error(function () {
          $scope.error = 'Wrong username or password';
        });
      }
		};

    $scope.newUser = function (user) {
      if ($scope.userForm.$valid) {
        authFactory.createUser(user).success(function (data) {
          console.log(data);
          window.location.href = '#/login';
        })
      }
    };

    $scope.newUserPage = function () {
      window.location.href = '#/new-user';
    }

	});
