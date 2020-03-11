var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  active_test: String,
  answers: [
    {
      question_id: String,
      answer: String
    }
  ],
  exam_id: String
});

module.exports = userSchema;
