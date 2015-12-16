'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.intro',
  'myApp.signin',
  'myApp.version'
]);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/intro'});
}]);

myApp.constant('const_api_v1_base_url', 'http://localhost:8088/v1/'); // set const variable