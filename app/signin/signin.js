'use strict';

angular.module('myApp.signin', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/signin', {
    templateUrl: 'signin/signin.html',
    controller: 'signinCtrl'
  });
}])

.controller('signinCtrl', ['$scope', '$http', 'const_api_v1_base_url',  function($scope, $http, const_api_v1_base_url) {
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
			var api_auth_url = const_api_v1_base_url + 'getAuthID?fmt=json&username=' + $scope.username + '&password=' + $scope.password;
			
			$http({
				method: 'GET',
				url: api_auth_url
			}).then(function successCallback(response) {
				console.log(response);
				if(response.data.error_code===1011){
					$scope.error_msg_username = response.data.msg;
				}
				else if(response.data.error_code===1010){//auth passed
					$scope.error_msg_username = 'auth passed';
				}
			}, function errorCallback(response) {
				$scope.error_msg_username = 'HTTP GET for API getAuthID failure';
			});
		}

    };
	$scope.username = '';
	$scope.password = '';
	$scope.error_msg_username = '';
	$scope.error_msg_password = '';
}]);