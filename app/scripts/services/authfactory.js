'use strict';

/**
 * @ngdoc service
 * @name taskboardApp.authFactory
 * @description
 * # authFactory
 * Factory in the taskboardApp.
 */
angular.module('taskboardApp')
  .factory('authFactory', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
