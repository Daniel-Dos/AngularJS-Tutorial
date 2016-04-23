var mainApp = angular.module("mainApp7",[]);

mainApp.controller('StudentController',function($scope) {
	$scope.fees = 100;
	$scope.admissiondate = new Date();
	$scope.rollno = 123.45;
});