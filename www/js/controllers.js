angular.module('app.controllers', [])

.controller('cameraTabDefaultPageCtrl', function($scope) {

})

.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('cloudTabDefaultPageCtrl', function($scope) {

})

.controller('loginCtrl', function($scope,$http) {
  $scope.signin=function()
  {
    $http.get('https://www.linkedin.com/uas/oauth2/authorization',function(response){
      console.log(response);
    });
  };

})

.controller('nameOfPersonCtrl', function($scope) {

})
