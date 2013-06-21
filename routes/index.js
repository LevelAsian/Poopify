//Database
var Users = require('../model/db');

//Routes
exports.index = function(req, res){
  Users.find({}, function(err, doc) {
    if (err) {
      return err
    }
    else {
      console.log(doc);
      res.render('index', {users: doc});
    }
  });
};