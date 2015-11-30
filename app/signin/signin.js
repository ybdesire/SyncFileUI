'use strict';

angular.module('myApp.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl'
  });
}])

.controller('signinCtrl', function($scope) {
	$scope.sign_in_btn = function(){
		//username cannot contain the following characters: \/:*?"<>
		
    };
});