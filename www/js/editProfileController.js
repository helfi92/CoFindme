var appCtrl = angular.module('app.controllers');

appCtrl.controller('editCtrl',['$scope','$http','user', function($scope,$http,user) {
	
	$http.get('me.json').success(function(data) { 
    $scope.me = data;
    	console.log("me!", $scope.me);
  	});

	$scope.addSkillOnClick = function(){
		$scope.me.skills.push('');
	}
	
	
	console.log('active me: ', $scope.me);

}]);
