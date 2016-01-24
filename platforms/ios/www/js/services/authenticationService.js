var myApp=angular.module('app');
myApp.service('AccessKeysService',['$rootScope',function($rootScope){
    var accessToken='';
    var requestToken='';
    return{
      setAccessTokenForUser:function(token)
      {
        accessToken=token;
      },
      getAccessTokenForUser:function()
      {
        return token;

      },
      setRequestToken:function(token)
      {
        requestToken=token;
      },
      getRequestToken:function()
      {
        return requestToken;
      }
    }



  }]);
