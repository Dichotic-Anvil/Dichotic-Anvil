angular.module('borrow.upload', [])
.controller('addItemController', function($scope, $http, filepickerService, Auth){
  $scope.item = {};

  $scope.createItem = function(){
      $http.post('/api/items', $scope.item)
          .success(function(data){
              console.log(JSON.stringify(data));
              $scope.item = {};
          })
          .error(function(data) {
              console.log('Error: ' + data);
          });
  };

  $scope.upload = function(){
      filepickerService.pick(
          {
              mimetype: 'image/*',
              language: 'en',
              services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE','IMAGE_SEARCH', 'FACEBOOK', 'INSTAGRAM'],
              openTo: 'IMAGE_SEARCH'
          },
          function(Blob){
              console.log(JSON.stringify(Blob));
              $scope.item.picture = Blob;
              $scope.$apply();
          }
      );
  };

  $scope.signout = function() {
    Auth.signout();
  };

});
