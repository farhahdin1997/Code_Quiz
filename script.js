
// Selecting Elements
var startButton = document.querySelector(".startButton");
var displayBox = document.querySelector(".displayBox");
var quitButton = displayBox.querySelector(".quit");
var continueButton = displayBox.querySelector(".continue");
var quizBox = document.querySelector(".quizBox");
var answerList = document.querySelector(".answerList");
var currentQuestionCounter = quizBox.querySelector(".questionNumberOn");
var timerCount = quizBox.querySelector(".timerSeconds");
var result = document.querySelector(".scoreResults");
var userScore = document.querySelector(".answersCorrect");
var userInitialsInput = document.getElementById("inputInitials");
var submitButton = document.querySelector(".submitButton");
var highscore = document.querySelector(".highscore");
var viewHighscore = document.querySelector(".viewHighscore");
var usersList = document.querySelector(".users");
var deleteScores = document.querySelector(".deleteScores");
var backButton = document.querySelector(".backButton");
var inputContent = document.querySelector(".inputContent");
var finishText = document.querySelector(".finishText");
var questionCounter = 0;
var counter;
var gameSetting = {
    score: 0,
    timeTotal: 60
}

// Start Quiz Button Click Functionality
// displays "Display Box"
// starts timer
startButton.onclick = function () {
    displayBox.classList.add("activeDisplayBox");
}

 