
var appCtrl = angular.module('app.controllers');

appCtrl.controller('profileCtrl',['$scope','$http','user', function($scope,$http,user) {
	$http.get('users.json').success(function(data) { 
    $scope.users = data;
    	console.log("success!", user);
  	});

	$scope.user = {

		firstName : 'Hassan',
		profession: 'Web Developer',
		location : 'Brossard, Quebec, Canada',
		skills : ['Javascript','AngularJS','Html5','CSS3','NodeJS']
	};
	$scope.user = user.activeUser;
	console.log('active user: ', $scope.user)
}]);
