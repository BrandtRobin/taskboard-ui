'use strict';
angular.module('taskboardApp')
	.controller('MainCtrl', function ($scope, workItemDb) {
		var teamId = 1;
		$scope.backlog = [{}];
		$scope.done = [{}];


		function addWorkItemToTeam(workItemId) {
			workItemDb.addToTeam(workItemId, teamId)
				.then(getWorkItems);
		}

		function getWorkItems() {
			workItemDb.getAll(teamId)
				.then(function (res) {
					var workItems = res.data;
					for (var i = 0; i < workItems.length; i++) {
						var workItem = workItems[i];
						if (workItem.status === 'backlog') {
							$scope.backlog.push(workItem);
						} else if (workItem.status === 'done') {
							$scope.done.push(workItem);
						} else {

						}
					}
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

		function addIssueToWorkItem(issueId, workItemId) {
			workItemDb.addIssue(issueId, workItemId)
				.then(getWorkItems());
		}

		function addUserToWorkItem(userId, workItemId) {
			workItemDb.addUser(userId, workItemId)
				.then(getWorkItems());
		}

		function addStatusToWorkItem(status, workItemId) {
			workItemDb.addStatus(status, workItemId)
				.then(getWorkItems());
		}

		function updateStatusForWorkItems() {

		}

		$scope.dragControlListeners = {
			itemMoved: function (event) {
				console.log(event.dest.index);
			}
		};

		getWorkItems();

	});