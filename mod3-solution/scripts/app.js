//IIFE
(function () {
	'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


//directive foundItems
function FoundItemsDirective() {
	var ddo = {
		templateUrl: 'foundItems.html',
		scope: {
			controllerScope: '<',
		    //foundItems: '<',    //the property should be named found-items
		    //onRemove: '&'
	    }
	 
	};

	return ddo;
}



// NarrowItDownController as narrowCtrl definition 
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var narrowCtrl = this;
	narrowCtrl.searchTerm = "";
	narrowCtrl.ifFullMenu = false;
	narrowCtrl.ifNarrowMenu = false;

	var promise = MenuSearchService.getMenuItems();

	narrowCtrl.getItems = function () {
		promise.then(function (response) {
			narrowCtrl.menuItems = response.data.menu_items;
		})
		.catch(function (error) {
			console.log("something went wrong");
		});

		narrowCtrl.ifFullMenu = true;
	}

	narrowCtrl.searchTermNewArray = function () {
		narrowCtrl.foundItems = MenuSearchService.searchTermNewArray(narrowCtrl.menuItems, narrowCtrl.searchTerm);
		narrowCtrl.ifNarrowMenu = true;
	}

	narrowCtrl.removeItemFull = function (itemIndex) {
		MenuSearchService.removeItem(narrowCtrl.menuItems, itemIndex);
	}

	narrowCtrl.removeItemNarrow = function (itemIndex) {
		MenuSearchService.removeItem(narrowCtrl.foundItems, itemIndex);
	}
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
// MenuSearchService Definition 
function MenuSearchService ($http, ApiBasePath) {
	var service = this;
	var foundItems = [];

	service.getMenuItems = function () {
		var response = $http({
			method : "GET",
			url: (ApiBasePath + "/menu_items.json")
		});

		return response;
	};


	//should have method getMatchedMenuItems(searchTerm) - responsible for eaching out to the server (using the $http service) to retrieve the list of all the menu items.

	service.getMatchedMenuItems = function (searchTerm) {
		//body...
	};

	service.removeItem = function (items, itemIndex) {
		items.splice(itemIndex, 1);
	};

	service.searchTermNewArray = function (initialArray, searchTerm) {
		var newArray = [];
		for (var i = initialArray.length - 1; i >= 0; i--) {
			if ((initialArray[i].description.includes(searchTerm))||(initialArray[i].name.includes(searchTerm))) {
				newArray.push(initialArray[i]);
			}
		};
		return newArray;
	}



}





})();