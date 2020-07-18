var questionsArray = [
    {
        questions: "What did Luke say to his sister's bully?",
        optionA: "Stop",
        optionB: "I'm calling the police",
        optionC: "Yeet",
        optionD: "Don't you Leia hand on her",
        correct: "D",
    },
    {
        questions: "What cannot travel in space?",
        optionA: "Light",
        optionB: "Ultraviolet Rays",
        optionC: "Sound",
        optionD: "Self-esteem",
        correct: "C",
    },
    {
        questions: "Who created the Walt Disney Company?",
        optionA: "Walt Disney",
        optionB: "Bob Chapek",
        optionC: "Bob Iger",
        optionD: "My neighbor Bob",
        correct: "A",
    },
    {
        questions: "What a Sith Lord's favorite place to shop?",
        optionA: "Mall of Millenia",
        optionB: "Publix",
        optionC: "The Darth Mall",
        optionD: "Target",
        correct: "C",
    },
    {
        questions: "What is a bounty hunters favorite companion?",
        optionA: "His Boba Pet!",
        optionB: "Crippling depression",
        optionC: "Paternal issues",
        optionD: "The overwhelming morality of right or wrong",
        correct: "A",
    },
    {
        questions: "Which program does a Jedi use to open their PDF files?",
        optionA: "Google Docs",
        optionB: "A rock",
        optionC: "Even with immeasurable technology, Jedis are fans of pen and paper",
        optionD: "Adobe Wan Kenobi",
        correct: "D",
    },
];

//variables
var questionNum = 0;
var lastQuestion = 5;
var time = 0;
var score = 0;

var divanswers = document.querySelector("#showOptions");
var options = document.querySelector("#showAnwers");
var checkOnclick = document.getElementsByClassName("uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom uk-text-capitalize")
//div elements vars
const questionsEl = document.getElementById("questions");
const optionsEl = document.getElementById("showOptions");
const scoreEl = document.getElementById("score");
//options el vars
var question = document.getElementById("showQuestion");
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");

divStart = document.querySelector("#start");
divStartButton = document.querySelector("#startbtn");

function appendQuestion() {

    let q = questionsArray[questionNum];

    question.textContent = q.questions;
    A.textContent = q.optionA;
    B.textContent = q.optionB;
    C.textContent = q.optionC;
    D.textContent = q.optionD;    
  
    //increase questionNum by 1 to loop through questions and options
    checkOnclick.addEventListener("click", checkAnswer);
  
}

//click event, start button block display questions
divStartButton.addEventListener("click", function () {
    divStart.style.display = "none";
    document.getElementById("questions").style.display = "block";
    //Timer
    UIkit.util.ready(function quizTimer() {

        time = document.getElementById("timer");

        var animate = setInterval(function () {

            time.value += 1;

            if (time.value >= time.max) {
                clearInterval(animate);
            }
        }, 1000);
        console.log(time.value);
    });
    //Functions to start at onclick event
    appendQuestion();
    keepScore();
    checkAnswer(); //  

});

function checkAnswer(answer) {

    

    if(questionNum > lastQuestion){
        showScore();
    }
    else if(answer === questionsArray[questionNum].correct) {
        correctAnswer();
        questionNum++;
        appendQuestion();
    } else{
        wrongAnswer();
        questionNum++;
        appendQuestion();
    }
};

//#score div color answer
function correctAnswer() {
    document.getElementById("score").style.backgroundColor = "#0f0";
    score++;
}

function wrongAnswer() {
    document.getElementById("score").style.backgroundColor = "#f00";
}

//last div
function showScore() {
    divStart.style.display = "none";
    document.getElementById("questions").style.display = "none";
    document.getElementById("results").style.display = "block";

    var scorePercentage = Math.round(100 * score / questionsArray.length);

    var show = document.getElementById("showResults");

    show.textContent = scorePercentage;

};