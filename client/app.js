angular.module('borrow', ['ngRoute',
  'angular-filepicker',
  'borrow.userServices',
  'borrow.signup',
  'borrow.login',
  'borrow.upload',
  'borrow.gallery',
  'borrow.dashboard'
])

.config(function($routeProvider, filepickerProvider, $httpProvider) {
  $routeProvider

  .when('/login', {
    templateUrl : './views/login/login.html',
    controller: 'loginController'
  })

  .when('/signup', {
    templateUrl : './views/signup/signup.html',
    controller: 'signUpController'
  })

  .when('/dashboard', {
    templateUrl : './views/dashboard/dashboard.html',
    controller: 'dashController',
    authenticate: true
  })

  .when('/upload', {
    templateUrl : './views/upload/upload.html',
    controller: 'addItemController',
    authenticate: true
  })

  .when('/gallery', {
    templateUrl : './views/gallery/gallery.html',
    controller: 'galleryController',
    authenticate: true
  })

  filepickerProvider.setKey('A1IrC7fsKQuqV78eZa0euz');
  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('com.borrow');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path('/login');
    }
  });
})



