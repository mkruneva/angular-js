//IIFE
(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.lunchText = "";
		$scope.lunchItems = 0;
		//$scope.test = "it works";

		expressOpinion(0);

		$scope.countItems = function () {
			var totalNumItems = calculateComas ($scope.lunchText); // get the total number of items by counting comas 
			$scope.lunchItems = totalNumItems;
			// body...
		}


		function calculateComas (string) {
			var commas = 0;
			for (var i = string.length - 1; i >= 0; i--) {
				if ((((string[i]).match(/,/g) || []).length)) {
					commas++;
				};
			};
			return commas; 
		}

			function expressOpinion (number) {
			if (number>5) {
				$scope.test = "Waay too much!";
			} 
				else if (number>3) {
					$scope.test = "Too much!";
				}
					else if (number>0) {
						$scope.test = "Enjoy!";
					}
						else {
							$scope.test = "Have you eaten at all?!?"
						};
			};
	})
})();