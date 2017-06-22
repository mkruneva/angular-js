//IIFE
(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.lunchText = "";

		$scope.displayMessage = function () {
		var number = countItems($scope.lunchText);
		//$scope.count = number;
		if (isEmpty($scope.lunchText)) {
			$scope.message = "Please enter data first";
		} 
			else if (number>5) {
					$scope.message = "Waay too much!";
				} 
					else if (number>3) {
						$scope.message = "Too much!";
					}
						else if (number>0) {
							$scope.message = "Enjoy!";
						}
							else {
								$scope.message = "Have you eaten at all?!?"
							};
			};

		function countItems (string) {
			var res = string.split(",");
			var number = 0;
			for (var i = res.length - 1; i >= 0; i--) {
				if(!isEmpty(res[i])) {
					number++;
				}
			};
			return number;
		}


		function isEmpty (string) {
			return (string === undefined || string == null || string.length <= 0) ? true : false;
		}
			
	})
})();