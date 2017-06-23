//IIFE
(function () {
	'use strict';

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', messageDisplay);
	messageDisplay.$inject = ['$scope'];

	function messageDisplay ($scope) {
		$scope.lunchText = "";

		$scope.displayMessage = function () {
		var number = countItems($scope.lunchText);
		// $scope.count = number;
		if (isEmpty($scope.lunchText)) {
			$scope.message = "Have you eaten at all ? Please enter data first";
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
			
	}
})();

//Minified code: 
//!function(){"use strict";function e(e){function c(e){for(var c=e.split(","),t=0,l=c.length-1;l>=0;l--)o(c[l])||t++;return t}function o(e){return void 0===e||null==e||e.length<=0||""==e||" "==e?!0:!1}e.lunchText="",e.displayMessage=function(){var t=c(e.lunchText);o(e.lunchText)?(e.message="Have you eaten at all ? Please enter data first",e.messageStyle={color:"#cc0000",border:"2px solid #cc0000","border-radius":"10px"}):t>5?(e.message="Waay too much !",e.messageStyle={color:"#cc0000"}):t>3?(e.message="Too much !",e.messageStyle={color:"#cc4800"}):(e.message="Enjoy !",e.messageStyle={color:"#10cc00"})}}angular.module("LunchCheck",[]).controller("LunchCheckController",e),e.$inject=["$scope"]}();