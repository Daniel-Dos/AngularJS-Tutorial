angular.module("studentApp7", []).controller(
		"studentController7",
		function($scope,$http) {

			var url="data.txt";
			$http.get(url).success(function(response) {
				$scope.students = response;
			});
			
		});