'use strict';

angular.module('myApp.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/intro', {
    templateUrl: 'intro/intro.html',
    controller: 'introCtrl'
  });
}])

.controller('introCtrl', function($scope, $location) {
    $scope.count = 1;
    $scope.sign_in = function(){
		$location.path('/login');
    };
});
