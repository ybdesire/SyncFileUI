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
		console.log($scope.username + ', ' + $scope.password);
		//username cannot contain the following characters: \/:*?"<>
		var re = RegExp('[\\\\/:*?"<>]');
		if($scope.username=='')
		{
			$scope.error_msg_username = 'username cannot be blank';
		}
		else if(typeof($scope.username)=='undefined')
		{
			$scope.error_msg_username = 'username cannot be less than 4 characters';
		}
		else if($scope.username.length>50)
		{
			$scope.error_msg_username = 'username cannot be more than 50 characters';
		}
		else if(re.test($scope.username))
		{
			$scope.error_msg_username = 'username cannot contain the following characters: \/:*?"<>';
		}
		else
		{
			$scope.error_msg_username = '';
		}
		
		if($scope.password=='')
		{
			$scope.error_msg_password = 'password cannot be blank';
		}
		else if(typeof($scope.password)=='undefined')
		{
			$scope.error_msg_password = 'password cannot be less than 4 characters';
		}
		else if($scope.password.length>50)
		{
			$scope.error_msg_password = 'password cannot be more than 50 characters';
		}
		else
		{
			$scope.error_msg_password = '';
		}

    };
	$scope.username = '';
	$scope.password = '';
	$scope.error_msg_username = '';
	$scope.error_msg_password = '';
});