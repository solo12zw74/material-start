//nav.js
(function(){
  'use strict';


    angular
       .module('wls')
       .controller('NavigationController', [
          '$mdSidenav', '$log',
          NavigationController
       ]);

function NavigationController($mdSidenav, $log) {
	var self = this;

	self.selectMenuItem = selectMenuItem;
	self.toggleList   = toggleUsersList;

	self.menuItems = ['My list', 'Friends','Settings','About'];
	self.selected = self.menuItems[0];

	// *********************************
    // Internal methods
    // *********************************

	function selectMenuItem(mi){
		self.selected = mi;
	}
    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
    	$mdSidenav('left').toggle();
    }
}


})();
