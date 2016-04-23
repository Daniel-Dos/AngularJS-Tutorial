var mainApp3 = angular.module("mainApp3",[]);

mainApp3.controller("shapeController",function($scope) {
	
	$scope.message = "In shape controller";
	$scope.type = "Shape";
});

mainApp3.controller("circleController",function($scope) {
	$scope.message = "In cicle controller";
});

mainApp3.controller("squareController",function($scope) {
	$scope.message = "In square controller";
	$scope.type = "Square";
});