'use strict';

/**
 * @ngdoc directive
 * @name taskboardApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('taskboardApp')
	.directive('myCard', function () {
		return {
			template: '<div class="card-group card-inverse">' +
				'<div class="card card-primary">' +
				'<div class="card-block">' +
				'<h3 class="card-title">{{workItem.title}}</h3>' +
				'<p class="card-text">{{workItem.description}}</p>' +
				'<p class="card-text"><small>{{workItem.status}}</small></p>' +
				'</div>' +
				'</div>' +
				'<div class="card card-danger">' +
				'<div class="card-block">' +
				'<h3 class="card-title">{{workItem.title}}</h3>' +
				'<p class="card-text">{{workItem.description}}</p>' +
				'<p class="card-text"><small>{{workItem.status}}</small></p>' +
				'</div>' +
				'</div>' +
				'<div class="card card-info">' +
				'<div class="card-block">' +
				'<h3 class="card-title">{{workItem.title}}</h3>' +
				'<p class="card-text">{{workItem.description}}</p>' +
				'<p class="card-text"><small>{{workItem.status}}</small></p>' +
				'</div>' +
				'</div>',
			restrict: 'E',
			scope: {
				workItem: '='
			},
			link: function postLink(scope, element) {
				element.text();
			}
		};
	})
	.directive('myCreateCard', function () {
		return {
			restrict: 'E',
			template: '<div class="card">' +
				'<h3>Create Card<h3>' +
				'<select id="cardColor" class="form-control" ng-model="cardColor">' +
				'<option>Yellow<option> ' +
				'<option>Blue<option> ' +
				'<option>Green<option> ' +
				'<option>Orange<option> ' +
				'</select>' +
				'<form ng-submit="addCard()">' +
				'<input text="text" ng-model="">' +
				'</form>' +
				'</div>',

			link: function postLink(scope, element) {
				element.text();
			}


		};
	});