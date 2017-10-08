// var intervalId;
// var userChoice,
//   question,
//   answerA,
//   answerB,
//   answerC,
//   answerD,
//   choices,
//   correct = 0,
//   incorrect = 0,
//   unanswered = 0;
// var quizQuestions = [
//   [
//     'The average person does what thirteen times a day?',
//     'Laugh',
//     'Fart',
//     'Eat',
//     'Sleep',
//     'A'
//   ],
//   [
//     "In Texas it's illegal to swear in front of a what??",
//     'Judge',
//     'Corpse',
//     'Cowboys',
//     'Pigs',
//     'B'
//   ],
//   [
//     'Coprastastaphobia is the fear of what?',
//     'Constipation',
//     'Flees',
//     'Cockroaches',
//     'Snakes',
//     'A'
//   ],
//   [
//     "In South Dakota it's illegal to fall down and sleep where?",
//     'Dominos',
//     'Chipotle',
//     'Cheese Factory',
//     'Panda Express',
//     'C'
//   ],
//   [
//     "It's illegal in Georgia to do what with a fork?",
//     'Eat Fish Tacos',
//     'Kill a Crab',
//     'Scratch your back',
//     'Eat Fried Chicken',
//     'D'
//   ],
//   [
//     'As of May 2017, which of these is NOT the name of a Pokemon Professor?',
//     'Oak',
//     'Juniper',
//     'Ficus',
//     'Sycamore',
//     'C'
//   ],
//   [
//     'The Average American does what 22 times a day?',
//     'Opens Fridge',
//     'Drinks Soda',
//     'Snapchats',
//     'Instagrams',
//     'A'
//   ],
//   [
//     "n California you can't legally buy a mousetrap without having a what?",
//     'Mousetrap',
//     'Knife',
//     'Gun',
//     'Hunting license',
//     'D'
//   ],
//   [
//     'Which of these items is NOT a one-use held item?',
//     'Air Balloon',
//     'Energy Root',
//     'Sitrus Berry',
//     'Hyper Potion',
//     'D'
//   ],
//   [
//     'What is Johnny Depp afraid of?',
//     'His Ex Gf',
//     'Dogs',
//     'Clowns',
//     'Ghost/Dark',
//     'C'
//   ]
// ];

// var quiz = {
//   time: 500,

//   start: function() {
//     $('#quizStart').hide();
//     //$('.jumbotron').css('background-color', '#79C9FA');
//     $('#quizDiv').html(
//       "<div id='timeDiv'><h2><center>Time Left: <span id='timeLeft'>500</span></center></h2></div>"
//     );
//     quiz.renderQuestions();
//     $('#quizEnd').show();
//     quiz.time = 500;
//     correct = 0;
//     incorrect = 0;
//     unanswered = 0;
//     clearInterval(intervalId);
//     intervalId = setInterval(quiz.countdown, 1000);
//   },

//   countdown: function() {
//     quiz.time--;
//     $('#timeLeft').text(quiz.time);
//     if (quiz.time === 0) {
//       quiz.generateResultDiv();
//     }
//   },

//   renderQuestions: function() {
//     for (i = 0; i < quizQuestions.length; i++) {
//       question = quizQuestions[i][0];
//       answerA = quizQuestions[i][1];
//       answerB = quizQuestions[i][2];
//       answerC = quizQuestions[i][3];
//       answerD = quizQuestions[i][4];
//       $('#quizDiv').append(
//         "<div id='question" + (i + 1) + "'><h3>" + question + '</h3></div>'
//       );
//       $('#question' + (i + 1)).append(
//         "<input type='radio' name='answers" +
//           (i + 1) +
//           "' value='A'> " +
//           answerA +
//           '<br>'
//       );
//       $('#question' + (i + 1)).append(
//         "<input type='radio' name='answers" +
//           (i + 1) +
//           "' value='B'> " +
//           answerB +
//           '<br>'
//       );
//       $('#question' + (i + 1)).append(
//         "<input type='radio' name='answers" +
//           (i + 1) +
//           "' value='C'> " +
//           answerC +
//           '<br>'
//       );
//       $('#question' + (i + 1)).append(
//         "<input type='radio' name='answers" +
//           (i + 1) +
//           "' value='D'> " +
//           answerD +
//           '<br>'
//       );
//     }
//   },

//   generateResultDiv: function() {
//     for (j = 0; j < quizQuestions.length; j++) {
//       userChoice = $('#question' + (j + 1))
//         .find('input:checked')
//         .val();
//       if (userChoice === quizQuestions[j][5]) {
//         correct++;
//       } else if (
//         userChoice !== quizQuestions[j][5] &&
//         userChoice !== undefined
//       ) {
//         incorrect++;
//       } else {
//         unanswered++;
//       }
//     }

//     $('#quizDiv').html("<div id='resultsDiv'></div");
//     $('#resultsDiv').append(
//       '<center><h2>Congratulations! Here is your score!</h2></center><br>'
//     );
//     $('#resultsDiv').append(
//       '<center><h3>You got ' + correct + ' questions correct!</h3></center>'
//     );
//     $('#resultsDiv').append(
//       '<center><h3>And you got ' + incorrect + ' questions wrong!</h3></center>'
//     );
//     $('#resultsDiv').append(
//       "<center><h3>And you didn't answer " +
//         unanswered +
//         ' questions!</h3></center>'
//     );
//     $('#resultsDiv').append(
//       '<center><h3>Wanna try again? Click the button at the top!</h3></center>'
//     );
//     $('#quizEnd').hide();
//     $('#quizStart').show();
//   }
// };

// $(document).ready(function() {
//   $('#quizStart').click(quiz.start);
//   $('#quizEnd').click(quiz.generateResultDiv);
// });

//---CREATE QUESTIONS
var questions = [
  new Question(
    'Though it is difficult, you are able to start a fire by rapidly rubbing two cool ranch doritos together for a long period of time.',
    ['True, but it is difficult', 'False'],
    'True, but it is difficult'
  ),
  new Question(
    'Singing in the shower lowers your cholesterol, heart rate and risk of cancer and heart disease.',
    ['True, but I am just guessing', 'False'],
    'False'
  ),
  new Question(
    'In the weightlessness of space, if a frozen pea touches pepsi it will blow up.',
    ['True', 'False'],
    'True'
  ),
  new Question(
    'Monkeys are related to fish because if need be they can breathe underwater.',
    ['True', 'False'],
    'False'
  ),
  new Question(
    'Men are 4 times more likely to be struck by lightening than women',
    ['True', 'False'],
    'True'
  )
];

//---CREATE QUIZ
var quiz = new Quiz(questions);

//DISPLAY QUIZ
QuizUI.display();

// timer
var triviaTimer = setInterval(function() {
  myTriviaTimer();
}, 1000);
var triviaTime = 100;

function myTriviaTimer() {
  if (triviaTime !== 0)
    document.getElementById('timer').innerHTML = triviaTime--;
}

// Trivia Over
var triviaOver = setTimeout(myTriviaOver, 100000);
function myTriviaOver() {
  QuizUI.displayScore();
}
