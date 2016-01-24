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
    console.log('users: ', $scope.users);
  });

  $scope.userOnClick = function(item){
  	console.log('user: ', item);
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
     
    console.log('result: ', result);
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
    console.log('item: ', item);
    console.log('checkbox: ', isChecked);
    $scope.constructFilter();
  };



 


  



});
