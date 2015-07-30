angular.module('kBase').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'app/components/home/questions-list.html',
			controller: 'MainCtrl'
		})
		.when('/question/:questionID', {
			templateUrl: 'app/components/detail/question.html',
			controller: 'AnswerCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
	}
]);
