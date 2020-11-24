//global VARIABLES 
var ViewHighScoreEl = document.querySelector("#view-high-score");

var quizEl = document.querySelector("#quiz");
var startEl = document.querySelector("#start");
var timerScore = document.querySelector("#timer-score");
var displayRightWrongEl = document.querySelector("#check-answer");
var displayScoresEl = document.querySelector("#display-high-scores");
var takeQuizAgain = document.querySelector("#take-quiz-again");
var quizScore = 90 //start score/timer at ___ seconds
var startButtonEl = document.createElement("button"); //start quiz button
var saveUserNameButton = document.createElement("button");
var questionCounter = 0;
var timeInterval;
var userName = [];
var scoreAndUserName = [];
var divForUserInputAndSave = document.createElement("div");



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
var welcomeQuiz = function () {
    quizEl.className = "unhide";
    //header info
    var h1El = document.createElement("h1"); //create header for Coding Quiz Challenge
    h1El.textContent = "Coding Quiz Challenge";
    h1El.className = "h1-welcome";
    quizEl.appendChild(h1El); //make h1 appear on page

    //text info
    var textEl = document.createElement("p"); //create description of quiz
    textEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!"; //How to add a break in the text to new line???
    textEl.className = "p-welcome";
    quizEl.appendChild(textEl); //make description appear

    //button info
    var buttonCenterEl = document.createElement("div");
    var buttonContainerEl = document.createElement("div");
    startButtonEl.textContent = " Start Quiz";
    startButtonEl.className = "button-style";
    buttonCenterEl.className = "button-center";
    buttonContainerEl.className = "button-container";
    buttonCenterEl.appendChild(startButtonEl);
    buttonContainerEl.appendChild(buttonCenterEl);
    quizEl.appendChild(buttonContainerEl);

    // Hide information from welcomequiz when start button is clicked
    if (startButtonEl.addEventListener("click", function () {
        h1El.className = "hide";
        textEl.className = "hide";
        startButtonEl.className = "hide";
    }));

}
var checkAnswers = function () {
    //empty out display before you populate new information
    displayRightWrongEl.innerHTML = "";
    console.log(this.value);
    if (this.value == "true") {
        console.log("they answered correctly")
        // var correctAnswerDisplay = document.createElement("div");
        //     correctAnswerDisplay.className = "answer";
        //     correctAnswerDisplay.textContent = "PREVIOUS ANSWER WAS RIGHT!";
        //     displayRightWrongEl.appendChild(correctAnswerDisplay);  
        // 
    }
    else {
        // var incorrectAnswerDisplay = document.createElement("div");
        // incorrectAnswerDisplay.className = "answer";
        // incorrectAnswerDisplay.textContent = "PREVIOUS ANSWER WAS WRONG!";
        // displayRightWrongEl.appendChild(incorrectAnswerDisplay);
        quizScore = quizScore - 10;
    }
    questionCounter++;
    displayQuestions();
};

//function to go through and display answers as buttons
var displayQuestions = function () {
    if (quizScore <= 0 || questionCounter > questions.length) {
        GameOver();

    }
    //Display questions, and then each question's specific answer choices
    if (questionCounter < questions.length) {
        quizEl.innerHTML = "";
        var questionPage = document.createElement("div");
        var questionHeader = document.createElement("div");
        var question = document.createElement("h1");
        question.className = "h1-question";
        question.textContent = questions[questionCounter].question;
        questionHeader.appendChild(question);
        questionPage.appendChild(questionHeader);
        quizEl.appendChild(questionPage);

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
    quizEl.innerHTML = "";

    var h1GameOver = document.createElement("h1");
    var yourScore = document.createElement("h2");

    divForUserInputAndSave.className = "container-center";

    h1GameOver.className = "h1-game-over";
    h1GameOver.textContent = "GAME OVER!";

    yourScore.className = "h2-style";
    yourScore.textContent = "FINAL SCORE: " + quizScore;

    //global variable information- saved button and username
    userName = document.createElement("INPUT");
    userName.setAttribute("type", "text");
    // ****IS THIS WHAT I NEED TO CHANGE TO HAVE THE USERINPUT SAVE AS A NAME
    // userName.setAttribute("name", savedUserName);
    userName.className = "h2-style-border";
    userName.placeholder = "Type in username here";

    saveUserNameButton.className = "button-style";
    saveUserNameButton.textContent = "SAVE";

    //Append to Page
    quizEl.appendChild(h1GameOver);
    quizEl.appendChild(yourScore);
    divForUserInputAndSave.appendChild(userName);
    divForUserInputAndSave.appendChild(saveUserNameButton);
    quizEl.appendChild(divForUserInputAndSave);
};

var viewHighScores = function () {
    quizEl.innerHTML = "";

}





//As soon as page loads
welcomeQuiz();

startButtonEl.addEventListener("click", startQuiz);


// takeQuizAgain.addEventListener("click", function () {
//     startQuiz();
// }); //not showing up because innerHTMl is ""?

//save UserName and Quiz Score to 
saveUserNameButton.addEventListener("click", function () {
    var savedSuccessfully = document.createElement("h2");
    savedSuccessfully.className = "saved-success";
    savedSuccessfully.textContent = "SAVED SUCCESSFULLY!";
    divForUserInputAndSave.appendChild(savedSuccessfully);
    quizEl.appendChild(divForUserInputAndSave);
    console.log(userName);
    var scoreObj = {
        score: quizScore,
        name: userName.value
    }
    console.log(scoreObj);
    localStorage.setItem("scoreObj", JSON.stringify(scoreObj));
});

ViewHighScoreEl.addEventListener("click", function () {
    quizEl.className = "hide";
    //get localStorage - display
    
    if (this.value === "true") {
        //display area that they show their score
        this.value = "false";

    }
    else {
        //when it is false
        this.value = "true";
        displayScoresEl.className = "hide";
    }
});

