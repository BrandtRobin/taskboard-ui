'use strict';

/**
 * @ngdoc directive
 * @name taskboardApp.directive:modalDirective
 * @description
 * # modalDirective
 */
angular.module('taskboardApp')
	.directive('modalDirective', function () {
		return {
			restrict: 'A',
			link: function (scope, element, attrs) {
				scope.$watch(attrs.modalDirective, function (value) {
					if (value) {
						element.modal('show');
					} else {
						element.modal('hide');
					}
				});
			}
		};
	});