'use strict';

/**
 * @ngdoc function
 * @name taskboardApp.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the taskboardApp
 */
angular.module('taskboardApp')
	.controller('LoginCtrl', ['$scope', 'authFactory', function LoginCtrl($scope, authFactory) {
		$scope.login = function (user) {
			authFactory.login(user).success(function (data) {        
				authFactory.setAuthData(data);            // Redirect etc.
				       
			}).error(function () {          // Error handling
				       });
		};
	}]);
