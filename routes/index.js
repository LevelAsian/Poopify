//Database
var Users = require('../model/db');

//Routes
exports.index = function(req, res){
  Users.find({}, function(err, doc) {
    if (err) {
      return(err);
    }
    else {
      res.render('index', {users: doc});
    }
  });
};

exports.show = function(req, res){
  Users.findOne({"name":"Stian"}, function(err, doc) {
    if (err) {
      return(err);
    }
    else {
      res.render('profile', {kake: doc});
    }
  });
};

exports.user = function(req, res){
  Users.findOne({'name': req.params.name}, function(err, doc) {
    if (err) {
      return(err);
    }
    else {
      Users.where('email').in(doc.friends).exec(function(err2, doc2){
        if (err2) {
          return(err2);
        }
        else {
          res.render('user', {user:doc, friends: doc2});
        }
      }
     )
    }
  });
};

exports.home = function(req, res){
  res.render('home');
};

//create new model
//var post = new Users({name: "Espen", email: "espensando@gmail.com", status: "Jeg heter Espen"});

//save model to MongoDB
//post.save(function (err) {
//  if (err) {
//    return err;
//  }
//  else {
//    console.log("User saved");
//  }
//});