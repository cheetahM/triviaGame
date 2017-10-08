var QuizUI = {
  // init function to show Trivia UI
  display: function() {
    console.log('inside display');
    if (quiz.hasEnded()) {
      console.log('inside ended');
      this.displayScore();
      this.restart('restart');
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },

  //display the Trivia question
  displayQuestion: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    var questionHTML = '<h3>Question ' + currentQuestionNumber + '</h3>';
    questionHTML += '<h4>' + quiz.getCurrentQuestion().question + '</h4>';
    this.populateIdWithHTML('question', questionHTML);
  },

  // display answer choices
  displayChoices: function() {
    var choices = quiz.getCurrentQuestion().choices;
    for (var i = 0; i < choices.length; i++) {
      //this.populateIdWithHTML('choice' + i, choices[i]);
      this.answerHandler('guess' + i, choices[i]);
    }
  },

  //displayScore
  displayScore: function() {
    var triviaOverHTML = '<h1>Trivia Over</h1>';
    triviaOverHTML += '<h2>Your score is: ' + quiz.score + '</h2>';
    triviaOverHTML += '<h2>Wrong answers: ' + quiz.wrongAnswers + '</h2>';
    triviaOverHTML +=
      "<button id='restart' type='button' class='btn btn-primary'>Start Over</button>";
    this.populateIdWithHTML('quiz', triviaOverHTML);
    this.restart('restart');
  },

  populateIdWithHTML: function(id, question) {
    var element = document.getElementById(id);
    element.innerHTML = question;
  },

  // TODO: display result
  displayAnswer: function(guess) {
    var triviaResultHTML = '<h1>Trivia</h1>';
    // var triviaResultHTML =
    //   '<h3>Time remaining(seconds):<span id="timer"></span></h3>';
    triviaResultHTML += "<button id='restart'>Start Over</button>";
    // if (quiz.getCurrentQuestion().isCorrectAnswer(guess)) {
    //   triviaResultHTML += '<h2>Correct answer</h2>';
    // } else {
    //   triviaResultHTML += '<h2>Wrong answer</h2>';
    //   triviaResultHTML +=
    //     '<h2>Correct answer is:' + quiz.getCurrentQuestion().answer + '</h2>';
    // }
    //triviaResultHTML += '<button id="next">Next</button>';
    //triviaResultHTML += "<button id='restart'>Start Over</button>";
    this.populateIdWithHTML('quiz', triviaResultHTML);
    this.next('restart');
  },

  //event handler for selecting answers
  answerHandler: function(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
      quiz.userAnswer(guess);
      QuizUI.display();
    };
  },

  // display number of questions remaining
  displayProgress: function() {
    var currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML(
      'progress',
      'Question ' + currentQuestionNumber + ' of ' + quiz.questions.length
    );
  },

  //event handler for restarting Trivia
  restart: function(id) {
    var restartButton = document.getElementById(id);
    restartButton.onclick = function() {
      location.reload();
    };
  },

  next: function(id) {
    var nextButton = document.getElementById(id);
    //console.log(button);
    nextButton.onclick = function() {
      Quiz.answer = false;
      QuizUI.display();
    };
  }
};
