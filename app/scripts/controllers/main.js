'use strict';
angular.module('taskboardApp')
  .controller('MainCtrl', function ($scope, workItemDb) {
    var teamId = 1;

    $scope.editorEnabled = false;

    function addWorkItemToTeam(workItemId, userId) {
      workItemDb.addToTeam(workItemId, teamId)
        .then(getWorkItems);

    }

    function getWorkItems() {
      workItemDb.getAll(teamId)
        .then(function (res) {
          $scope.backlog = [];
          $scope.done = [];
          $scope.active = [];
          var workItems = res.data;
          for (var i = 0; i < workItems.length; i++) {
            var workItem = workItems[i];
            if (workItem.status === 'backlog') {
              $scope.backlog.push(workItem);
            } else if (workItem.status === 'done') {
              $scope.done.push(workItem);
            } else if (workItem.status === 'active') {
              $scope.active.push(workItem);
            } else {}
          }
        });
    }

    function updateWorkItem(workItem) {
      workItemDb.update(workItem, workItem.id);
    }

    function createWorkItem(title, description, userId) {
      var workItemId;
      var status = 'backlog';
      var workItem = {
        title: title,
        description: description,
        status: status
      };

      console.log(userId);

      workItemDb.add(workItem)
        .then(function (res) {
          workItemId = res.headers('Location').split('id/').pop();
          addUserToWorkItem(userId, workItemId);
        });
    }

    function deleteWorkItem(workItemId) {
      workItemDb.delete(workItemId);
    }

    function addIssueToWorkItem(issueId, workItemId) {
      workItemDb.addIssue(issueId, workItemId)
        .then(getWorkItems());
    }

    function addUserToWorkItem(userId, workItemId) {
      workItemDb.addUser(userId, workItemId);
      addWorkItemToTeam(workItemId, userId);
    }

    function addStatusToWorkItem(status, workItemId) {
      workItemDb.addStatus(status, workItemId);
    }

    $scope.sendForm = function (workItemData) {
      if ($scope.workItemForm.$valid) {
        //console.log(workItemData.userId);
        console.log($scope.workItemData.user);
        createWorkItem($scope.workItemData.title, $scope.workItemData.description, $scope.workItemData.user);

        $('#myModal').modal('hide');

        $scope.workItemData.title = "";
        $scope.workItemData.description = "";
      }

    };

    $scope.removeActive = function (workItem) {
      $scope.active.splice($scope.active.indexOf(workItem), 1);
      workItemDb.delete(workItem.id);
    };

    $scope.removeBacklog = function (workItem) {
      $scope.backlog.splice($scope.backlog.indexOf(workItem), 1);
      workItemDb.delete(workItem.id);
    };

    $scope.removeDone = function (workItem) {
      $scope.done.splice($scope.done.indexOf(workItem), 1);
      workItemDb.delete(workItem.id);
    };

    $scope.enableEditor = function (workItem, titleUpdate, descUpdate) {
      $scope.editorEnabled = true;
      $scope.editableWorkItem = workItem;
      $scope.editableTitle = titleUpdate;
      $scope.editableDescription = descUpdate;
    };

    $scope.disableEditor = function () {
      $scope.editorEnabled = false
    };

    $scope.save = function (workItem, titleUpdate, descUpdate) {
      var workItemUpdate = workItem;
      workItemUpdate.title = titleUpdate;
      workItemUpdate.description = descUpdate;
      updateWorkItem(workItemUpdate);
      $scope.disableEditor();
    };

    $scope.dragControlListeners = {
      itemMoved: function (event) {
        var status = event.dest.sortableScope.element.context.title;
        var workItemId = event.source.itemScope.workItem.id;
        addStatusToWorkItem(status, workItemId);

      }
    };

    getWorkItems();
  });
