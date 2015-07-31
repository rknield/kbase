"use strict";
angular.module('kbase', ['ngRoute','ui.bootstrap','ngAnimate','ngSanitize']);

angular.module('kbase').controller('CollapseCtrl', function ($scope) {
	$scope.isCollapsed = true;
});

/*angular.module('kbase').filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text); 
	};	
}]); */

});