angular.module('app.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tabsController', {
      url: '/page1',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })

    .state('tabsController.coFindPage', {
      url: '/page2',
      views: {
        'tab1': {
          templateUrl: 'templates/coFindPage.html',
          controller: 'coFindController'
        }
      }
    })
    .state('tabsController.profile', {
      url: '/profile',
      views: {
        'tab1': {
          templateUrl: 'templates/profilePage.html',
          controller: 'profileCtrl'
        }
      }
    })
    .state('tabsController.editProfile', {
      url: '/editProfile',
      views: {
        'tab2': {
          templateUrl: 'templates/editProfile.html',
          controller: 'editCtrl'
        }
      }
    })






    .state('tabsController.cloudTabDefaultPage', {
      url: '/page4',
      views: {
        'tab3': {
          templateUrl: 'templates/cloudTabDefaultPage.html',
          controller: 'cloudTabDefaultPageCtrl'
        }
      }
    })









    .state('login', {
      url: '/page5',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })





    .state('nameOfPerson', {
      url: '/page6',
      templateUrl: 'templates/nameOfPerson.html',
      controller: 'nameOfPersonCtrl'
    })


    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page5');
});
