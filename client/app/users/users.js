var app = angular.module('user', ['borrow.services']);

app.controller('userController', function($scope) {
  //get the users items
  $scope.itemsList = [];
  $scope.itemsList.push(getAll()); // not working yet
});