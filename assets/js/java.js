//global VARIABLES 
var ViewHighScoreEl = document.querySelector("#view-high-score");

var QuizEl = document.querySelector("#quiz");
var startEl = document.querySelector("#start");
var timerScore = document.querySelector("#timer-score");
var displayRightWrong = document.querySelector("#check-answer");
var displayHighScores = document.queryCommandEnabled("#display-high-scores");
var quizScore = 90 //start score/timer at 90 seconds
var startButtonEl = document.createElement("button"); //start quiz button
var questionCounter = 0;
var timeInterval;
var userName=[];


var questions = [
    {
        question: "Commonly used data types DO NOT include",
        answer: [
            { text: "1. strings", correct: false },
            { text: "2. booleans", correct: false },
            { text: "3. alerts", correct: true },
            { text: "4. numbers", correct: false }
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        answer: [
            { text: "1. quotes", correct: false },
            { text: "2. curly brackets", correct: false },
            { text: "3. parenthesis", correct: true },
            { text: "4. square brackets", correct: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store __________. ",
        answer: [
            { text: "1. numbers and strings", correct: false },
            { text: "2. other arrays", correct: false },
            { text: "3. booleans", correct: false },
            { text: "4. all of the above", correct: true }
        ]
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answer: [
            { text: "1. commas", correct: false },
            { text: "2. curly brackets", correct: false },
            { text: "3. quotes", correct: true },
            { text: "4. parenthesis", correct: false }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is: ",
        answer: [
            { text: "1. JavaScript", correct: false },
            { text: "2. terminal/bash", correct: false },
            { text: "3. for loops", correct: false },
            { text: "4. console.log", correct: true }
        ]
    }
];

//Start button starts quiz
var WelcomeQuiz = function () {
    //header info
    var h1El = document.createElement("h1"); //create header for Coding Quiz Challenge
    h1El.textContent = "Coding Quiz Challenge";
    h1El.className = "h1-welcome";
    QuizEl.appendChild(h1El); //make h1 appear on page

    //text info
    var textEl = document.createElement("p"); //create description of quiz
    textEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!"; //How to add a break in the text to new line???
    textEl.className = "p-welcome";
    QuizEl.appendChild(textEl); //make description appear

    //button info
    var buttonCenterEl = document.createElement("div");
    var buttonContainerEl = document.createElement("div");
    startButtonEl.textContent = " Start Quiz";
    startButtonEl.className = "button-style";
    buttonCenterEl.className = "button-center";
    buttonContainerEl.className = "button-container";
    buttonCenterEl.appendChild(startButtonEl);
    buttonContainerEl.appendChild(buttonCenterEl);
    QuizEl.appendChild(buttonContainerEl);

    // Hide information from welcomequiz when start button is clicked
    if (startButtonEl.addEventListener("click", function () {
        h1El.className = "hide";
        textEl.className = "hide";
        startButtonEl.className = "hide";
    }));
};

//function to go through and display answers as buttons
var displayQuestions = function () {
    if (quizScore <= 0 || questionCounter > questions.length) {
        GameOver();
        
    }
    //Display questions, and then each question's specific answer choices
    if (questionCounter < questions.length) {
        QuizEl.innerHTML = "";
        var questionPage = document.createElement("div");
        var questionHeader = document.createElement("div");
        var question = document.createElement("h1");
        question.className = "h1-question";
        question.textContent = questions[questionCounter].question;
        questionHeader.appendChild(question);
        questionPage.appendChild(questionHeader);
        QuizEl.appendChild(questionPage);

        //display answers and check if answer is correct   

        for (var i = 0; i < questions[questionCounter].answer.length; i++) {
            var buttonContainerEl = document.createElement("div");
            buttonContainerEl.className = "button-container";
            var answerButton = document.createElement("button");
            answerButton.className = "button-style";
            answerButton.textContent = questions[questionCounter].answer[i].text;
            //.value is giving the actual button a value attribute
            answerButton.value = questions[questionCounter].answer[i].correct;
            answerButton.onclick = checkAnswers;
            buttonContainerEl.appendChild(answerButton);
            questionPage.appendChild(buttonContainerEl);
        }    
    }
};

var  checkAnswers = function () {
    //empty out display before you populate new information
    displayRightWrong.innerHTML = "";
    console.log(this.value);
    if (this.value == "true") {
        var correctAnswerDisplay = document.createElement("div");
        //correctAnswerDisplay.className = "answer";
        //correctAnswerDisplay.textContent = "PREVIOUS ANSWER WAS RIGHT!";
       // displayRightWrong.appendChild(correctAnswerDisplay);
        
    }
    else {
        var incorrectAnswerDisplay = document.createElement("div");
       // incorrectAnswerDisplay.className = "answer";
       // incorrectAnswerDisplay.textContent = "PREVIOUS ANSWER WAS WRONG!";
        //displayRightWrong.appendChild(incorrectAnswerDisplay);
        quizScore = quizScore - 10;
    }
    questionCounter++;
    displayQuestions();
};

//Timer Function 
var ScoreTracker = function () {
    timeInterval = setInterval(function () {
        if (quizScore > 0) {
            quizScore--; //decrement by 1 every second or pass through setInterval function 
            timerScore.className = "score-style";
            timerScore.textContent = "Score: " + quizScore;
        }
        else if (quizScore === 0) {
            quizScore = 0;
            timerScore.textContent = "Score: " + quizScore;
            GameOver();
        }
    }, 1000);
};

var startQuiz = function () {
    //when startbutton is clicked, timer starts 
    ScoreTracker();

    //Go through array of questions and choices
    displayQuestions();
    
};

var GameOver = function () {
    clearInterval(timeInterval); //stops the counter from continuing to go 
    QuizEl.innerHTML = "";
    var h1GameOver = document.createElement("h1");
    var yourScore = document.createElement("h2");
    var getUserNameContainer = document.createElement("div");
    var descriptionGetUserName = document.createElement("h2");
        userName = document.createElement("INPUT");
    userName.setAttribute("type", "text");
    userName.className = "h2-style-border";
    getUserNameContainer.className = "button-center";
    descriptionGetUserName.className =  
    h1GameOver.className ="h1-welcome";
    yourScore.className = "h2-style";
    h1GameOver.textContent= "The game is over";
    yourScore.textContent = "Your score is: " + quizScore;
    QuizEl.appendChild(h1GameOver);
    QuizEl.appendChild(yourScore);
    QuizEl.appendChild(userName);

    //save my initials and score
    //TO DO: create an array to save all the information- initials and score and potentially an id to specify which of the scores- use push to get in

};

//create function for viewing highscore 
//localStorage.setItem
//localStorage.getItem

WelcomeQuiz();
startButtonEl.addEventListener("click", startQuiz);
ViewHighScoreEl.addEventListener("click", function() {
    if (this.value === "true") {
        //display area that they show their score
        this.value = "false";
        
    }
    else {
        //when it is false
        this.value = "true";
        displayHighScores.className = "hide";
    }
})
