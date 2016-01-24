var appCtrl = angular.module('app.controllers');
appCtrl.controller('coFindController', function($scope,$http,user,$location,$ionicPopover,$rootScope,$timeout) {
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
  $scope.expandedIcon="button button-icon ion-chevron-left";
  $scope.expanded="remove-display";
  $scope.expandFilter=function()
  {
    if($scope.expandedIcon=="button button-icon ion-chevron-left")
    {
      $scope.expanded="animated fadeInDown";
      $scope.expandedIcon="button button-icon ion-chevron-down";
    }else{
      $scope.expandedIcon="button button-icon ion-chevron-left";
      $scope.expanded="animated fadeOutUp";
      $timeout(function () {
        $scope.expanded="animated fadeOutUp remove-display";
      }, 500);

    }


  }

  $http.get('users.json').success(function(data) {
    $scope.users = data;
  });

  $scope.userOnClick = function(item){
  	user.activeUser = item;
  }

  //not working for more than 1 industry
  $scope.constructFilter = function(){
    var result = '';
    for(var i = 0 ; i < $scope.industriesList.length ; i++){
          if($scope.industriesList[i].isChecked == true){
            if(!!!result.length){
              result = $scope.industriesList[i].text;
          }else{
              result = result + " " + $scope.industriesList[i].text;
          }
        }

    }

    $scope.filterIndustries = result;
  }

  //$scope.industriesList = ['Marketing','Frontend','Research','Management','Design'];

  $scope.industriesList = [
    {
      text:'Marketing',
      isChecked: false,
    },
    {
      text:'Frontend',
      isChecked: false,
    },
    {
      text:'Research',
      isChecked: false,
    },
    {
      text:'Management',
      isChecked: false,
    },
    {
      text:'Design',
      isChecked: false,
    }


  ]


  $scope.filterObject = {
    industries : 'Marketing'
  }

  $scope.addFilter = function(item,isChecked){
    item.isChecked = isChecked;
    $scope.constructFilter();
  };

  $scope.transition = '';
  $scope.searchChanged = function(value){
    console.log('hllo: ', value);
    $scope.transition = '';
    if(!!value){
      $scope.transition = 'animated fadeOutUp remove-display';
    }else{
      $scope.transition = 'animated fadeInDown';
    }
  }









});
