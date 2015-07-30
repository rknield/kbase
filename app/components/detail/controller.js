angular.module('kbase', ['ui.bootstrap','ngAnimate','ngSanitize']).controller('AnswerCtrl', ['$scope','$routeParams','$http','$sce', function ($scope, $routeParams, $http, $sce) {
		var questionid = $routeParams.questionID;
	
		$http.get('http://www.ft-wd.com/kbaseConn/kbase.php?r=qa&qid=' + questionid)
			 .success(function(response){
				$scope.questions = response.questions;
				console.log(response.questions);
			 })
			 .error(function(data,status,headers,config){
				console.log("there was an error"); 
			 });

		$scope.questions.question.body = $sce.trustAsHtml($scope.questions.question.body);
		$scope.questions.answer.body = $sce.trustAsHtml($scope.questions.answer.body);

		//console.log($scope.questions); 
	}
]);