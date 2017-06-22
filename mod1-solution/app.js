//IIFE
(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.test = "it works";
	})
})();