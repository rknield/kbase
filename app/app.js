"use strict";
angular.module('kBase', ['ngRoute','ui.bootstrap','ngAnimate','ngSanitize']);

angular.module('kBase').controller('CollapseCtrl', function ($scope) {
	$scope.isCollapsed = true;
});