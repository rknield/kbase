angular.module('kbase').controller('AnswerCtrl', ['$scope','$routeParams','$http','$sce', function ($scope, $routeParams, $http, $sce) {
		var questionid = $routeParams.questionID;
	
		$http.get('http://www.ft-wd.com/kbaseConn/kbase.php?r=qa&qid=' + questionid)
			 .success(function(response){
				$scope.questions = response.questions;
				$scope.answers = response.answers;
				
				console.log(response.questions);
				console.log(response.answers);
			 })
			 .error(function(data,status,headers,config){
				console.log("there was an error"); 
			 });

		//$scope.questions[0].body = $sce.trustAsHtml($scope.questions[0].body);
		//s$scope.answers.body = $sce.trustAsHtml($scope.answers.body);

		//console.log($scope.questions); 
	}
]);