(function (argument) {	
'use strict';

var shoppingListStart = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "IceCream",
    quantity: "10"
  }

];

var shoppingListEnd = [];

var isListStartEmpty = 0;
var isListEndEmpty = 1;


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
//Test controller
.controller('TestController', TestController);


// To Buy Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
	// body...
}


// Already Bougth Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
	// body...
}


// Service
function ShoppingListCheckOffService() {
	var service = this;

}


//Test Controller 
TestController.$inject = ['$scope'];
function TestController($scope) {
  $scope.shoppingListStart = shoppingListStart;
  $scope.shoppingListEnd = shoppingListEnd;

  $scope.isListStartEmpty = isListStartEmpty;
  $scope.isListEndEmpty = isListEndEmpty;

  console.log("$scope.shoppingListStart.length", $scope.shoppingListStart.length);
  console.log("isListStartEmpty", isListStartEmpty);
  console.log("isListEndEmpty", isListEndEmpty);

  $scope.buyItem = function(i) {
    //console.log(i);
	  var newItem = {
	      name: $scope.shoppingListStart[i].name,
	      quantity: $scope.shoppingListStart[i].quantity
	    };
    //console.log(newItem);
  	$scope.shoppingListEnd.push(newItem);
    $scope.shoppingListStart.splice(i, 1);
    $scope.isListEndEmpty = 0;
    $scope.isListStartEmpty = (($scope.shoppingListStart.length === 0) ? 1 : 0);
  }




}


})();