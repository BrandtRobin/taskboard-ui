'use strict';
angular.module('taskboardApp')
  .factory('workItemDb', function () {
    var meaningOfLife = 42;

    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });