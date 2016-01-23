var appCtrl = angular.module('app.controllers');
appCtrl.controller('coFindController', function($scope,$http) {
  $http.get('users.json').success(function(data) { 
    $scope.users = data;
    console.log("success!", $scope.users);
    
 
  });
})