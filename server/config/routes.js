var itemController = require('../items/itemController.js');
var userController = require('../users/userController.js');
var carRouter = require('express').Router();

// var app = express()
// var express  express;

module.exports = function(app, express) {
  app.post('/api/users/signup', function(req, res) {
    console.log(req.body);
    res.json(req.body)
  })
  app.post('/item', itemController.addItem)
  app.post('/user/:id/inventory/', itemController.addItem);
  app.get('/user/:id/inventory/:id', itemController.retrieveItem);
	app.get('/user/:id/inventory/', itemController.retrieveAll);
	app.delete('/user/:id/inventory/:id', itemController.deleteItem);
};