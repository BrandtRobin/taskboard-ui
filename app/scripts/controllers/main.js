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
					console.log('items');
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
			workItemDb.addStatus(status, workItemId);
		}

		$scope.dragControlListeners = {
			itemMoved: function (event) {
				var status = event.dest.sortableScope.element.context.id;
				var workItemId = event.source.itemScope.workItem.id;

				addStatusToWorkItem(status, workItemId);
			}
		};

		getWorkItems();

	});