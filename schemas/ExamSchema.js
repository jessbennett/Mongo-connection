var mongoose = require('mongoose');

// example of an "exam schema"
var exam = mongoose.Schema({
  questions: [
    {
      question_id: String,
      questions: [String],
      correct_answer: String
    }
  ]
});

module.exports = exam;
