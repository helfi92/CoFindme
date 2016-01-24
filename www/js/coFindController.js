var appCtrl = angular.module('app.controllers');
appCtrl.controller('coFindController', function($scope,$http,user,$location) {
  $http.get('users.json').success(function(data) { 
    $scope.users = data;
    console.log("success!", $scope.users);
  });

  $scope.userOnClick = function(item){
  	console.log('user: ', item);
  	user.activeUser = item;
  	//$location.path("#/page1/profile");

  }

})