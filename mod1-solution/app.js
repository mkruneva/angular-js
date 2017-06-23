//IIFE
(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', function ($scope) {
		$scope.lunchText = "";

		$scope.displayMessage = function () {
		var number = countItems($scope.lunchText);
		// $scope.count = number;
		if (isEmpty($scope.lunchText)) {
			$scope.message = "Have you eaten at all? Please enter data first";
			$scope.messageStyle = {
				        "color" : "#cc0000", 
				        "border": "2px solid #cc0000",
				        "border-radius" : "10px"
				    }
		} 
			else if (number>5) {
					$scope.message = "Waay too much !";
					$scope.messageStyle = {
				        "color" : "#cc0000"
				    }
				} 
					else if (number>3) {
						$scope.message = "Too much !";
						$scope.messageStyle = {
				        	"color" : "#cc4800"
				    	}
					}
						else {
							$scope.message = "Enjoy !";
							$scope.messageStyle = {
					        	"color" : "#10cc00"
					    	}
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
			return (string === undefined || string == null || string.length <= 0 || string == "" || string == " ") ? true : false;
		}
			
	})
})();