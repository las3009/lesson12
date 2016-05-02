var app = angular.module('app', []);
var root = 'http://jsonplaceholder.typicode.com';

app.controller('myController', ['$http', '$scope', function($http, $scope){
	$http({
		method: 'GET',
		url: root + '/posts/1',
		//data: {},
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(
		function(response) {
			$scope.output = response.data.body;
			console.log(response);
		},
		function(errorResponse){
			// Do something
		}
	);
}]);