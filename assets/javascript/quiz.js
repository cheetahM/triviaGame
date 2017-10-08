// Quiz contructor
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.currentQuestionIndex = 0;
  this.wrongAnswers = 0;
  this.answer = false;
}

//User selected choice
Quiz.prototype.userAnswer = function(userAnswer) {
  if (this.getCurrentQuestion().isCorrectAnswer(userAnswer)) {
    this.score++;
  } else {
    this.wrongAnswers++;
  }
  this.answer = true;
  this.currentQuestionIndex++;
};

// get the current question
Quiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
};

//check if Trivia is over
Quiz.prototype.hasEnded = function() {
  return this.currentQuestionIndex >= this.questions.length;
};
