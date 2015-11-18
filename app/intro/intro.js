'use strict';

angular.module('myApp.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/intro', {
    templateUrl: 'intro/intro.html',
    controller: 'introCtrl'
  });
}])

.controller('introCtrl', function($scope) {
    $scope.count = 1;
    $scope.sign_in = function(){
	console.log('sign in');
	$scope.count++;
    };
});
