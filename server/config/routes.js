var itemController = require('../items/itemController.js');
var userController = require('../users/userController.js');
var helpers = require('./helpers.js');

// var app = express()
// var express  express;

module.exports = function(app, express) {
	app.post('/user/_id/inventory/', itemController.addItem);// addItem controller not created yet

	app.get('/user/_id/inventory/_id', itemController.retrieveItem);// retrieveItem controller not created yet

	app.put('/user/_id/inventory/_id', itemController.editItem);// editItem controller not created yet

	app.delete('/user/_id/inventory/_id', itemController.deleteItem);// deleteItem controller not created yet
};