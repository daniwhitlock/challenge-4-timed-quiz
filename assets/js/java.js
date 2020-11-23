//global VARIABLES 
var ViewHighScoreEl = document.querySelector("#view-high-score");
var QuizEl = document.querySelector("#quiz");
var startEl = document.querySelector("#start");
var timerScore = document.querySelector("#timer-score");

var quizScore = 60; //start score/timer at 60 seconds
var startButtonEl = document.createElement("button"); //start quiz button
var questionCounter = 0;

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
    console.log("hello");
    //Display questions, and then each question's specific answer choices
    if (questionCounter <= questions.length) {
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
            buttonContainerEl.appendChild(answerButton);
            questionPage.appendChild(buttonContainerEl);
            console.log(answerButton);

            // choicesButton.addEventListener ("click", function () {

            //     if (i === 0 || i === 1 || i === 3) {
            //         if (questions[questionCounter].c === questions[questionCounter].a) { //need to set if button of choices is clicked
            //             var correctAnswerDisplay = document.createElement("div");
            //             correctAnswerDisplay.className = "answer";
            //             correctAnswerDisplay.textContent = "RIGHT!";
            //             QuizEl.appendChild(correctAnswerDisplay);
            //         }
            //         else {
            //         var incorrectAnswerDisplay = document.createElement("div");
            //         incorrectAnswerDisplay.className = "answer";
            //         incorrectAnswerDisplay.textContent = "WRONG!"
            //         QuizEl.appendChild(incorrectAnswerDisplay);
            //         quizScore = quizScore - 10;
            //     }
            // }
        }
    
        //create next button
        var nextButtonContainer = document.createElement("div");
        var nextButton = document.createElement("button");
        nextButtonContainer.className = "button-right";
        nextButton.className = "button-change-color";
        nextButton.textContent = "NEXT";
        nextButtonContainer.appendChild(nextButton);
        QuizEl.appendChild(nextButtonContainer);

        nextButton.addEventListener("click", function () {
            hideText(question, nextButton, answerButton);
            questionCounter++;
            displayQuestions();
        });
    }

};
//hide text
var hideText = function (question, nextButton) {
    question.className = "hide";
    nextButton.className = "hide";
    answerButton.className = "hide";
};


//Timer Function 
var ScoreTracker = function () {
    var timeInterval = setInterval(function () {
        if (quizScore > 0) {
            timerScore.className = "score-style";
            timerScore.textContent = "Score: " + quizScore;
            quizScore--; //decrement by 1 every second or pass through setInterval function 
        }
        else if (quizScore === 0) {
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
    // alert("The game is over!");

    //When game over
    //save my initials and score
    //TO DO: create an array to save all the information- initials and score and potentially an id to specify which of the scores- use push to get in

};

WelcomeQuiz();
startButtonEl.addEventListener("click", startQuiz);
