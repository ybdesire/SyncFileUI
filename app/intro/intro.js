'use strict';

angular.module('myApp.intro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/intro', {
    templateUrl: 'intro/intro.html',
    controller: 'introCtrl'
  });
}])

.controller('introCtrl', [function() {

}]);