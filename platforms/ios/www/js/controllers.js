angular.module('app.controllers', [])

.controller('cartTabDefaultPageCtrl', function($scope) {

})



.controller('loginCtrl', function($scope,$http,$rootScope,$location) {
  //window.open('https://www.linkedin.com/uas/oauth2/authorization?client_id=771u0p20ttoai5&…100%2F&response_type=code&scope=r_basicprofile&state=DCEeFWf45A53sdfKef424');
  $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    var accessToken=window.localStorage.getItem('AccessToken');
    console.log(accessToken)
    if(accessToken&&typeof(accessToken)!=='undefined')
    {
      $rootScope.accessToken=accessToken;
      $location.path("#/page1/page2");
    }

  $scope.login=function()
  {
    $location.path('/page1/page2');
    /*if (typeof String.prototype.startsWith != 'function') {
        String.prototype.startsWith = function (str){
            return this.indexOf(str) == 0;
        };
    }

    var ref = window.open('https://www.linkedin.com/uas/oauth2/authorization?client_id=771u0p20ttoai5&redirect_uri=http://localhost:8100/callback&response_type=code&scope=r_basicprofile&state=DCEeFWf45A53sdfKef424', '_blank', 'location=no');
    console.log(ref);

    ref.addEventListener('loadstart', function(event) {
        if((event.url).startsWith("http://localhost:8100/callback")) {
            requestToken = (event.url).split("code=")[1];
            $rootScope.requestToken=requestToken;
            console.log('request token');
            console.log(requestToken);
            $http({method: "post", url: "https://www.linkedin.com/uas/oauth2/accessToken", data: "client_id=" + clientId + "&client_secret=" + clientSecret + "&redirect_uri=http://localhost:8100/callback" + "&grant_type=authorization_code" + "&code=" + requestToken })
                    .success(function(data) {
                        console.log(data);
                        accessToken = data.access_token;
                        $rootScope.accessToken=accessToken;
                        window.localStorage.setItem('AccessToken',accessToken);
                        console.log('access token:');
                        console.log(accessToken);
                        $location.path("/page1/page2");
                    })
                    .error(function(data, status) {
                        alert("ERROR: " + data);
                    });

            ref.close();
        }
      });*/
    }

  })
.controller('nameOfPersonCtrl', function($scope) {

})
