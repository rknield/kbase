angular.module('kbase',['ui.bootstrap','ngAnimate']).controller('MainCtrl', function ($scope, $http) {
	//this queries to get the list of questions
	$http.get('http://www.ft-wd.com/kbaseConn/kbase.php?r=q')
		 .success(function(response){
			$scope.questions = response.questions;
			console.log(response.questions);
		 })
		 .error(function(data,status,headers,config){
			console.log("there was an error"); 
		 });
		 
	console.log($scope.questions);
});