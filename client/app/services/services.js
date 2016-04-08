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
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var login = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    console.log(user);
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      console.log(resp);
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.borrow');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.borrow');
    $location.path('/login');
  };

  return {
    login: login,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});