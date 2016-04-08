var Item = require('./itemModel.js');

exports.addItem = function(req, res) {
  var newItem = req.body;
  Item.create(newItem, function(err, newItem){
    if(err){
      return res.json(err);
    }
    res.json(newItem);
  });
};

exports.retrieveItem = function(req, res) {
  var query = {_id: req.params.id};
  Item.findOne(query, function(err, matchingItem){
    if(err){
      return res.json(err);
    } 
    res.json(matchingItem);  
  });
};

exports.retrieveAll = function(req, res) {
  var query = req.query;
  Item.find(query, function(err, allItems){
    if(err){
      return res.json(err);
    } 
    res.json(allItems);
  });
}

exports.deleteItem = function(req, res) {
  var query = {_id: req.params.id};
  Item.findOneAndRemove(query, function(err, matchingItem){
    if(err){
      return res.json(err);
    } 
    res.json(matchingItem);
  });
}

exports.deleteAll = function(req, res) {
  var query = req.query;
  Item.find(query, function(err, allItems){
    if(err){
      return res.json(err);
    } 
    Item.remove(query, function(err){
      if (err){
        return res.json(err);
      }
      res.json(allItems);
    })
  });
};
