var mainApp4 = angular.module("mainApp4",[]);

mainApp4.factory('MathService', function() {
	var factory = {};
	
	factory.multiply = function(a,b) {
		return a * b
	}
	return factory;
});

mainApp4.service('CalcService', function(MathService) {
	
	this.square = function(a) {
		return MathService.multiply(a,a);
	}
});

mainApp4.controller('CalcController',function($scope,CalcService) {
	$scope.square = function() {
		$scope.result = CalcService.square($scope.number);
	}
});