//IIFE
(function () {
	'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService);
//Declare and create foundItems directive.


// NarrowItDownController as narrowCtrl definition 
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
	var narrowCtrl = this;

	
	////test if service is properly injected in the controller
	//narrowCtrl.testText = MenuSearchService.getMatchedMenuItems();

	narrowCtrl.getItems = function (searchTerm) {
		MenuSearchService.getMatchedMenuItems(searchTerm);
	}


	// the controller should call the getMatchedMenuItems method when appropriate and store the result in a property called found attached to the controller instance.
}


// MenuSearchService Definition 
function MenuSearchService () {
	var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		console.log("ok, that seems to work and is showing " + searchTerm);
	}



	//should have method getMatchedMenuItems(searchTerm) - responsible for eaching out to the server (using the $http service) to retrieve the list of all the menu items.

}





})();