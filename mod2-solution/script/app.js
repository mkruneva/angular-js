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

var shoppingListEnd = [
	{
	    name: "blabla",
	    quantity: "5"
	  },
	  {
	    name: "blabla",
	    quantity: "10"
  }
];


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
  console.log("$scope.shoppingListStart: ", $scope.shoppingListStart);

  //Test Function - should be removing items from array 1 and adding them to Array 2

  $scope.boughtItem = function () {
  	console.log("$scope.shoppingListStart inside function: ", $scope.shoppingListStart);
	  var newItem = {
	  		// the code does not work as it refers to the whhole array and not to the object , should be mede to refer to the object that is clicked
	      name: $scope.shoppingListStart.name,
	      quantity: $scope.shoppingListStart.quantity
	    };
	    //$scope.shoppingListEnd.push(newItem);
		//shoppingListStart.pop();
  }
}


})();