var appCtrl = angular.module('app.controllers');

appCtrl.controller('aboutCtrl', function($scope,$cordovaEmailComposer) {


$scope.sendMessage=function()
{
  var email = {
  to: ['davidfherrerar@gmail,com', 'helfi92@gmail.com'],
  subject: 'Feedback CoFindMe',
  body: '',
  isHtml: true
};
  $cordovaEmailComposer.open(email).then(null, function () {
    console.log('User cancel email');
  });
}

})
