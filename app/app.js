"use strict";
angular.module('kbase', ['ngRoute','ui.bootstrap','ngAnimate']);

angular.module('kbase').controller('CollapseCtrl', function ($scope) {
	$scope.isCollapsed = true;
});