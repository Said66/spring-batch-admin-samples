'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('batchAdmin', [
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    //'ngRoute'
    //'ngSanitize',
    //'ngTouch',
    'ui.router',
    'ngTable',
    'services.config',
    'angular-growl'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider, growlProvider) {
    console.log('establishing routes');

    growlProvider.globalTimeToLive(5000);

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('jobSummary', {
        url: '/jobSummary?jobname',
        templateUrl: 'views/jobSummary.html',
        controller: 'JobSummaryCtrl'
      })
      .state('jobExecution', {
        url: '/jobExecution?jobName',
        templateUrl: 'views/jobExecutions.html',
        controller: 'JobExecutionsCtrl'
      });
    //$routeProvider
    //  .when('/', {
    //    templateUrl: 'views/main.html',
    //    controller: 'MainCtrl'
    //  })
    //  .otherwise({
    //    redirectTo: '/error'
    //  });
  })
    .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    });
