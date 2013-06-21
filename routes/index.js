//Database
var Users = require('../model/db');

//Routes
exports.index = function(req, res){
  Users.find({}, function(err, doc) {
    if (err) {
      res.send('Error: ' + err);
    }
    else {
      res.render('index', {users: doc});
    }
  });
};

exports.user = function(req, res){
  Users.findOne({name: req.params.name}, function(err, doc) {
    if (err) {
      res.send('Error: ' + err);
    }
    else {
      res.render('user', {user: doc});
    }
  });
};