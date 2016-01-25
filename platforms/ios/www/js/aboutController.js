var appCtrl = angular.module('app.controllers');

appCtrl.controller('aboutCtrl', function($scope,$cordovaEmailComposer) {
console.log($cordovaEmailComposer);
$scope.sendMessage=function()
{
var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
if (app) {
$cordovaEmailComposer.isAvailable().then(function() {
//  var attachment='base64:'+'attachment.'+image.DocumentType+'//'+image.Content.substring(image.Content.indexOf(',')+1,image.Content.length);
  var email = {
    to: 'davidfherrerar@gmail.com',
    cc: '',
    bcc: [],
    attachments: [],
    subject: 'MUHC Document',
    body: '',
    isHtml: true
  };
 $cordovaEmailComposer.open(email).then(null, function () {
   console.log('User canceled emal');
 });
}, function () {
console.log('Function is not available');
});
}
}

})
