//require from node_modules
var mongoose = require('mongoose');

//connect to database
var db = mongoose.connect('mongodb://admin:admin@ds031618.mongolab.com:31618/heroku_app16436906');

//create schema
var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  status: String
});

//compile schema to model
module.exports = db.model('users', userSchema);