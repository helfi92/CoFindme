
var appCtrl = angular.module('app.controllers');

appCtrl.controller('profileCtrl',['$scope','$http','user', function($scope,$http,user) {

	$http.get('users.json').success(function(data) {
    	$scope.users = data;
  	});
	

	$scope.user = user.activeUser;

	

}]);
