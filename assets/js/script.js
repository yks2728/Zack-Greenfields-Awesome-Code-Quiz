var countdown = 40
var user = {
    firstInitial: firstInitial.value.trim(),
    lastInitial: lastInitial.value.trim()
};

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