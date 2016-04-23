
angular.module("studentApp5", []).controller("studentController5",function($scope) {
	
	$scope.reset = function() {
		$scope.firstName = "Mahesh";
		$scope.lastName = "Parashar";
		$scope.email = "MaheshParashar@tutorialspoint.com";
	}
	$scope.reset();
});