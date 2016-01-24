var appCtrl = angular.module('app.controllers');

appCtrl.controller('editCtrl',['$scope','$http','user', function($scope,$http,user) {

	$http.get('me.json').success(function(data) {
    $scope.me = data;
    	console.log("me!", $scope.me);
  	});
		$scope.profileOption='lookingFor';
		$scope.$watch('profileOption',function(){
			console.log('inside');
			console.log($scope.profileOption);
			$scope.myInfoClass=($scope.profileOption=='myInfo')? 'button button-assertive':'button button-outline button-assertive';
			$scope.lookingForClass=($scope.profileOption=='myInfo')? 'button  button-outline button-assertive':'button button-assertive';
		});

	$scope.addSkillOnClick = function(){
		$scope.me.skills.push('');
	};
	$scope.addIndustryOnClick = function(){
		$scope.me.industries.push('');
	}

}]);
