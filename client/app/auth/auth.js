angular.module('borrow.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.login = function () {
    Auth.login($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.borrow', token);
        $location.path('/user');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Auth.signup($scope.user)
      .then(function (token) {
        console.log(token)
        $window.localStorage.setItem('com.borrow', token);
        $location.path('/asfd');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
