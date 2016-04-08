angular.module('borrow.services',[])
.factory('Items', function($http) {

  var getAllItems = function() {
    return $http({
      method: 'GET',
      url: '/api/items'
    })
    .then(function(resp) {
      return resp.data;
    })
  }

  var addOneItem = function(item) {
    return $http({
      method: 'POST',
      url: 'api/links',
      data: item
    })
  };

  return {
    getAllItems: getAllItems,
    addOneItem: addOneItem
  };
})