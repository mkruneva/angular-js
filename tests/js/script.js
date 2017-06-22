//IIFE
(function () {
	"use strict";
	
	angular.module('MyFirstApp', [])

	.controller('MyFirstController', function($scope, $filter){
		// $scope.name = "Marta";
		
		// $scope.upper = function () {
		// 	var upCase = $filter('uppercase');
		// 	$scope.name = upCase($scope.name);
		// }
		var hungry = "http://imageenvision.com/450/23634-clip-art-graphic-of-a-hungry-brown-hound-dog-cartoon-character-licking-his-chops-and-holding-a-yellow-food-bowl-by-toons4biz.jpg";
		var full = "https://us.123rf.com/450wm/worldion/worldion1507/worldion150700183/42555008-hungry-fat-man-with-cola-and-burger-head-where-is-my-burger-hand-drawn-vector-illustration-propagand.jpg?ver=6";

		$scope.buttonText = "Feed me!"
		$scope.stateOfBeing = hungry;

		$scope.feedMe = function () {

			var text = $scope.buttonText;
			var state = $scope.stateOfBeing;
				if (state == full) {
					state = hungry
					text = "Feed me!";
				} 
				else {
					state = full;
					text = "I am full!";
				}
				$scope.stateOfBeing = state;
				$scope.buttonText = text;
		}
	});


})();