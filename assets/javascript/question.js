// Question constructor
function Question(question, choices, answer) {
  this.question = question;
  this.choices = choices;
  this.answer = answer;
}

//check if the suer selected answer is correct
Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
};
