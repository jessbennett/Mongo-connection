var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String
});

module.exports = userSchema;
