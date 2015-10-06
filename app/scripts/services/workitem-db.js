'use strict';
angular.module('taskboardApp')
  .factory('workItemDb', function ($http) {
    var workItemServiceUrl = "http://localhost:8080/web-service/workitems/";
    return {
      getAll: function (teamId) {
        return $http.get(workItemServiceUrl + 'team/' + teamId);
      },
      addToTeam: function (workItemId, teamId) {
        console.log(workItemServiceUrl + "id/" + workItemId + "/team/" + teamId);
        return $http.put(workItemServiceUrl + "id/" + workItemId + "/team/" + teamId, null);
      },
      add: function (workItem) {
        return $http.post(workItemServiceUrl, workItem);
      },
      delete: function (id) {
        return $http.delete(workItemServiceUrl + 'id/' + id);
      }
    };
  });