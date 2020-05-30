var app = angular.module('app', []);

app.controller('GameController', function($scope, GameService) {
	$scope.submitEntry = function() {
		if (typeof $scope.name === 'undefined' || typeof $scope.word === 'undefined') {
			return;
		}
		var entry = {
			name: $scope.name,
			word: $scope.word
		};
		GameService.submitEntry(entry)
			.success(function(pointResult) {
				$scope.word = undefined;
				GameService.getScores()
					.success(function(scoresResult) {
						$scope.scores = scoresResult.result;
					});
			});
	};

	GameService.getScores()
		.success(function(scoresResult) {
			$scope.scores = scoresResult.result;
		});
});

app.service('GameService', function($http) {
	this.getScores = function() {
		return $http.get('/getScores');
	};
	this.submitEntry = function(entry) {
		return $http.post('/submitEntry', entry);
	};
});
