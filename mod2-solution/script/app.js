(function (argument) {	
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


// To Buy Controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.shoppingListStart = ShoppingListCheckOffService.showItems();

  toBuy.buyItem = function (i) {
    ShoppingListCheckOffService.buyItem(i);
  }

  toBuy.message = function () {
    return (toBuy.shoppingListStart.length == 0);
  }


}


// Already Bougth Controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {

  var alBought = this;
  
  alBought.shoppingListEnd = ShoppingListCheckOffService.showBougthItems();

  alBought.message = function () {
      return (alBought.shoppingListEnd.length == 0);
    }

}


// Service
function ShoppingListCheckOffService() {
	var service = this;

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
      name: "Chocolates",
      quantity: "5"
    },
    {
      name: "IceCream",
      quantity: "10"
    }

  ];

  var shoppingListEnd = [];

  //exposing the shoppingListStar array
  service.showItems = function () {
    return shoppingListStart;
  };

  service.showBougthItems = function () {
    return shoppingListEnd;
  }

  service.buyItem = function(i) {
    //console.log(i);
     var newItem = {
         name: shoppingListStart[i].name,
         quantity: shoppingListStart[i].quantity
       };
      //console.log(newItem);
      shoppingListEnd.push(newItem);
      shoppingListStart.splice(i, 1);
    }
}

})();