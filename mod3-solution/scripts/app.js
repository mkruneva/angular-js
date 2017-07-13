//IIFE
(function () {
	'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
//Declare and create foundItems directive


// NarrowItDownController as narrowCtrl definition 
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var narrowCtrl = this;

	var promise = MenuSearchService.getMenuItems();

	promise.then(function (response) {
		narrowCtrl.menuItems = response.data;
		narrowCtrl.categories = response.data.menu_items;
		console.log("menuItems = ", response.data);
		console.log("categories = ", response.data.menu_items);
	})
	.catch(function (error) {
		console.log("something went wrong");
	});

	// the controller should call the getMatchedMenuItems method when appropriate and store the result in a property called found attached to the controller instance.
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
// MenuSearchService Definition 
function MenuSearchService ($http, ApiBasePath) {
	var service = this;

	service.getMenuItems = function () {
		var response = $http({
			method : "GET",
			url: (ApiBasePath + "/menu_items.json")
		});

		return response;
	}


	//should have method getMatchedMenuItems(searchTerm) - responsible for eaching out to the server (using the $http service) to retrieve the list of all the menu items.

	service.getMatchedMenuItems = function (searchTerm) {
		//body...
	}

}





})();