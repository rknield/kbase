angular.module('kbase').controller('AnswerCtrl', ['$scope','$routeParams','$http','$sce', function ($scope, $routeParams, $http, $sce) {
		var questionid = $routeParams.questionID;
	
		$http.get('http://www.ft-wd.com/kbaseConn/kbase.php?r=qa&qid=' + questionid)
			 .success(function(response){
				$scope.questions = response.questions;
				console.log(response.questions);
			 })
			 .error(function(data,status,headers,config){
				console.log("there was an error"); 
			 });

		$scope.questions.body = $sce.trustAsHtml(questions.body);
		$scope.answers.body = $sce.trustAsHtml(answers.body);

		//console.log($scope.questions); 
	}
]);