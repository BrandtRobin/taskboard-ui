'use strict';
angular.module('taskboardApp')
	.controller('MainCtrl', function ($scope, workItemDb) {
		var teamId = 1;

		function addWorkItemToTeam(workItemId) {
			workItemDb.addToTeam(workItemId, teamId)
				.then(getWorkItems);
		}

		function getWorkItems() {
			workItemDb.getAll(teamId)
				.then(function (res) {
					$scope.workItems = res.data;
				});
		}

		function createWorkItem(title, description) {
			var workItemId;
			var workItem = {
				title: title,
				description: description
			};

			workItemDb.add(workItem)
				.then(function (res) {
					workItemId = res.headers('Location').split('id/').pop();
					console.log(workItemId + "WOrkItemId");
					addWorkItemToTeam(workItemId);
					getWorkItems();
				});
		}

		function deleteWorkItem(workItemId) {
			workItemDb.deleteWorkItem(workItemId)
				.then(getWorkItems);
		}

		getWorkItems();
		createWorkItem("ViSkaÄta Thai", "Det ska bli gott");
	});