var appCtrl = angular.module('app.controllers');
appCtrl.controller('coFindController', function($scope,$http,user,$location,$ionicPopover,$rootScope) {
  console.log($rootScope.requestToken);
  var accessToken=window.localStorage.getItem('AccessToken');

  if(!$rootScope.requestToken||typeof $rootScope.requestToken!=='undefined')
  {
    if(accessToken)
    {
      $http({method:"get",url:"https://api.linkedin.com/v1/people/~?oauth2_access_token="+$rootScope.accessToken}).success(function(data)
      {
        console.log(data);
      });
    }else{
      console.log('out nigga');
    }
  }

  $http.get('users.json').success(function(data) {
    $scope.users = data;
  });

  $scope.userOnClick = function(item){
  	console.log('user: ', item);
  	user.activeUser = item;
  }

});
