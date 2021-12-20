var timer= 30;
var counter = 0;
var timerEl = document.querySelector("#time");
var currentScore = timer;

var main = document.getElementById("quiz");
// credit to https://www.sitepoint.com/simple-javascript-quiz/
const quizContainer = document.getElementById("quiz");
const startQuizButton = document.getElementById("start-quiz");
const question1Container = document.querySelector("question-1");
const finalResultsContainer = document.getElementById("final-results");
const instructionContainer = document.getElementById("container");
// end of credit

// credit to https://www.sitepoint.com/simple-javascript-quiz/ for the object

const myQuestions = [
  {
    question:
      "Which one of these is used by baseball teams for managing databases?",
    answers: {
      a: "SQL",
      b: "Python",
      c: "R",
      d: "all of the above",
    },
    correctAnswer: "all of the above",
  },
  {
    question: "Arrays in JavaScript can be used to store____",
    answers: {
      a: "number and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
    },
    correctAnswer: "all of the above",
  },
  {
    question: "The condition in and if/else statements is enclosed with ___",
    answers: {
      a: "parenthesis",
      b: "quotes",
      c: "curly brackets",
      d: "square brackets",
    },
    correctAnswer: "parenthesis",
  },
];
// end of credit

function displayQuestions() {
  instructionContainer.classList.add("hide");
  quizContainer.classList.remove("hide");
}

function displayAnswers() {
  console.log(displayAnswers);
}

// credit to https://www.sitepoint.com/simple-javascript-quiz/ for the function
function buildQuiz() {
  setTimer();
  displayQuestions();
  main.innerHTML = "";
  var h1El = document.createElement("h1");
  var question1El = document.createElement("div");
  var button1 = document.createElement("button");
  var button2 = document.createElement("button");
  var button3 = document.createElement("button");
  var button4 = document.createElement("button");

  h1El.textContent = "Questions";
  console.log(counter);
  question1El.innerHTML = myQuestions[counter].question;
  button1.textContent = myQuestions[counter].answers.a;
  button2.textContent = myQuestions[counter].answers.b;
  button3.textContent = myQuestions[counter].answers.c;
  button4.textContent = myQuestions[counter].answers.d;
  button1.onclick = checkAnswers;
  button2.onclick = checkAnswers;
  button3.onclick = checkAnswers;
  button4.onclick = checkAnswers;
  main.appendChild(h1El);
  h1El.appendChild(question1El);
  var buttonContainer = document.createElement("div");
  buttonContainer.appendChild(button1);
  buttonContainer.appendChild(button2);
  buttonContainer.appendChild(button3);
  buttonContainer.appendChild(button4);
  main.appendChild(buttonContainer);
}
// end credit

function setTimer() {
  timeInterval = setInterval(function () {
    if (timer > 0) {
      timerEl.textContent = timer;
      timer--;
    } else {
      timerEl.textContent = 0;
      // enterScore()
    }
  }, 1000);
}

function checkAnswers(event) {
  if (event.target.textContent === myQuestions[counter].correctAnswer) {
    timer += 10;
  } else {
    timer -= 10;
  }
  counter++;
  if (counter < myQuestions.length) {
    buildQuiz();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  counter = 0;
  window.alert("Your time is up, lets see how you did");
  // check localStorage for high score, if its not there use 0
  var highScore = localStorage.getItem("highscore");
  if (highScore === null) {
    highScore = 0;
  }

  var tryAgainConfirm = window.confirm("would you like to try again?");
  if (tryAgainConfirm === true) {
    buildQuiz();
  } else {
    window.alert("Thank you for taking the quiz!");
  }
}

startQuizButton.addEventListener("click", buildQuiz);