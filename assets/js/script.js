var countdown = 30
var user = {
    firstInitial: firstInitial.value.trim(),
    lastInitial: lastInitial.value.trim()
};

var main = document.main;
var h1El = document.createElement("h1");
var question1El = document.createElement("div");
var question2El = document.createElement("div");
var question3El = document.createElement("div");
// create ordered list element
var listEl = document.createElement("ol");
// create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");


h1El.textContent ="Questions";
question1El.textContent = "Which of these is used by baseball teams for managing databases";
question2El.textContent = "Arrays in JavaScript can be used to store___";
question3El.textContent = "The condition in and if/else statements is enclosed with___";

li1.textcontent = "SQL", "Python", "R", " all of the above";
li2.textcontent = "numbers and strings", "other arrays", "booleans", "all of the above";
li3.textcontent = "parenthesis", "quotes", "curly brackets", "square brackets";

main.appendChild(h1El);
h1El.appendChild(question1El);
h1El.appendChild(question2El);
h1El.appendChild(question3El);
question1El.appendChild(li1);
question2El.appendChild(li2);
question3El.appendChild(li3);


// credit to https://www.sitepoint.com/simple-javascript-quiz/
const quizContainer = document.getElementById('quiz');
const startQuizButton = document.getElementById('start-quiz');
const finalResultsContainer = document.getElementById('final-results');

// end of credit

// credit to https://www.sitepoint.com/simple-javascript-quiz/ for the object

const myQuestions = [
    {
        question: "Which one of these is used by baseball teams for managing databases?",
        answers: {
            a: "SQL",
            b: "Python",
            c: "R",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "Arrays in JavaScript can be used to store____",
        answers: {
            a: "number and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above"
        },
        correctAnswer: "d"
    },
    {
        question: "The condition in and if/else statements is enclosed with ___",
        answers: {
            a: "parenthesis",
            b: "quotes",
            c: "curly brackets",
            d: "square brackets"
        },
        correctAnswer: "a"
    },
],
// end of credit

var startQuiz = function() {
    
}


var endQuiz = function() {
    window.alert("Your time is up, lets see how you did")
    // check localStorage for high score, if its not there use 0
    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0
    }

    // if timer is higher than previous attempts, user has new high score
    if (countdown > highScore) {
        localStorage.setItem("highscore", countdown.value);
        localStorage.setItem("first initial", firstInitial.value);
        localStorage.setItem("last initial", lastInitial.value);

        alert(firstInitial.value + lastInitial.value + " now has the high score of " + countdown);
    }

    var tryAgainConfirm = window.confirm("would you like to try again?");
    if (tryAgainConfirm) {
        startQuiz();
    }
    else {
        window.alert("Thank you for taking the quiz!")
    }
    endQuiz();
};


// submit initials and high score
localStorage.setItem("user", JSON.stringify(user))