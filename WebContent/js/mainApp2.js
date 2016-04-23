var mainApp2 = angular.module("mainApp2",['ngRoute']);

mainApp2.config(['$routeProvider',function($routerProvider) {
	
	$routerProvider.
	when('/addStudent', {
		templateUrl: 'addStudent.htm',
		controller: 'AddStudentController'
	}).
	when('/viewStudents',{
		templateUrl: 'viewStudents.htm',
		controller: 'ViewStudentsController'
	}).
	otherwise({
		redirectTo: '/addStudent'
	});
	
}]);

mainApp2.controller('AddStudentController',function($scope) {
	$scope.message = "This page will be used to display add student form";
});

mainApp2.controller('ViewStudentsController',function($scope) {
	$scope.message = "This page will be used to display all the students";
});