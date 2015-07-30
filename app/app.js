"use strict";
angular.module('kbase', ['ngRoute','ui.bootstrap','ngAnimate']);

angular.module('kbase').controller('CollapseCtrl', function ($scope) {
	$scope.isCollapsed = true;
});

angular.module('app').filter('to_trusted', ['$sce', function($sce){
	return function(text) {
		return $sce.trustAsHtml(text);
	};
}]);