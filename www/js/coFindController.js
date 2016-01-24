var appCtrl = angular.module('app.controllers');
appCtrl.controller('coFindController', function($scope,$http,user,$location,$ionicPopover) {
 
  $http.get('users.json').success(function(data) { 
    $scope.users = data;
  });

  $scope.userOnClick = function(item){
  	console.log('user: ', item);
  	user.activeUser = item;
  }

})