angular.module('kbase').controller('AnswerCtrl', function ($scope, $routeParams, $http) {
		var questionid = $routeParams.questionID;
	
		$http.get('http://www.ft-wd.com/kbaseConn/kbase.php?r=qa&qid=' + questionid)
			 .success(function(response){
				$scope.questions = response.questions;
				console.log(response.questions);
			 })
			 .error(function(data,status,headers,config){
				console.log("there was an error"); 
			 });

		$scope.question.body.embed.htmlSafe = 
			$sce.trustAsHtml(question.body.embed.html);
		}

		//console.log($scope.questions);
	}
);