angular.module('app.controllers', [])



.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('cloudTabDefaultPageCtrl', function($scope) {

})

.controller('loginCtrl', function($scope,$http) {
  $scope.go = function ( path ) {
    $location.path( path );
  };
  $http({
    method: 'GET',
    url: 'https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=771u0p20ttoai5&redirect_uri=http://localhost:8100&state=DCEeFWf45A53sdfKef424&scope=r_basicprofile'
  }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
$http({method: "post", url: "https://accounts.google.com/o/oauth2/token", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost/callback" + "&grant_type=authorization_code" + "&code=" + requestToken })
.success(function(data) {
    accessToken = data.access_token;
})
.error(function(data, status) {
    console.log("ERROR: " + data);
});
})

.controller('nameOfPersonCtrl', function($scope) {

})
