var appCtrl = angular.module('app.controllers');

appCtrl.controller('profileCtrl', function($scope) {
	console.log('profilePage');

	$scope.user = {

		firstName : 'Hassan',
		profession: 'Web Developer',
		location : 'Brossard, Quebec, Canada',
		skills : ['Javascript','AngularJS','Html5','CSS3','NodeJS']
	};
})