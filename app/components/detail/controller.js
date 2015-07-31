angular.module('kbase').controller('AnswerCtrl', ['$scope','$routeParams','$http','$sce', function ($scope, $routeParams, $http, $sce) {
		var questionid = $routeParams.questionID;
	
		$http.get('http://www.ft-wd.com/kbaseConn/kbase.php?r=qa&qid=' + questionid)
		.success(function(response){
			$scope.questions = response.questions;
			$scope.answers = response.answers;
			$scope.count = $scope.answers.length;

			console.log(response.questions);
			console.log(response.answers);
		})
		.error(function(data,status,headers,config){
			console.log("there was an error"); 
		});

		$scope.$on('onRepeatLast', function(scope, element, attrs){
			//console.log("im done");
			/*$http.post('http://www.ft-wd.com/kbaseConn/kbase.php?r=uv&qid=' + questionid)
			.success(function(response){
				console.log("view count successfully updated by 1 for question:" + questionid);
			})
			.error(function(data,status,headers,config){
				console.log("there was an error - I couldn't update the view count."); 
			});*/
		});
	}
]);  