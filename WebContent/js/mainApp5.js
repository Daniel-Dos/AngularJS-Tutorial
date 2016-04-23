var mainApp5 = angular.module("mainApp5",[]);

mainApp5.config(function($provide) {
	$provide.provider('MathService',function() {
		
		this.$get = function() {
			var factory = {};
			factory.multiply = function(a,b) {
				return a * b;
			}
			return factory;
		};
	});
});

mainApp5.value("defaultInput",5);

mainApp5.factory('MathService',function() {
	var factory = {};
	factory.multply = function(a,b) {
		return a * b;
	}
	return factory;
	
});

mainApp5.service('CalcService',function(MathService) {
	this.square = function(a) {
		return MathService.multiply(a,a);
	}
});

mainApp5.controller('CalcController',function($scope,CalcService,defaultInput) {
	
	$scope.number = defaultInput;
	$scope.result = CalcService.square($scope.number);
	
	$scope.square  = function() {
		$scope.result = CalcService.square($scope.number);
	}
});