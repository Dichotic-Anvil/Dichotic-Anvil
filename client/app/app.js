angular.module('borrow', ['borrow.services','borrow.items','borrow.auth','ngRoute'])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .when('/items', {
      templateUrl: 'app/items/items.html',
      controller: 'ItemsController',
    })
    .otherwise({
      redirectTo: '/user'
    });
    
    // The $httpInterceptor is added into the array
    // of interceptors. Think of it like middleware for your ajax calls
  $httpProvider.interceptors.push('AttachTokens');
})