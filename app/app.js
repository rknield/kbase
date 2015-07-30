"use strict";
angular.module('kBase', ['ngRoute']);

angular.module('kBase', ['ui.bootstrap','ngAnimate']).controller('CollapseCtrl',['$scope','$routeParams','$http','$sce', function ($scope) {
	$scope.isCollapsed = true;
}]);