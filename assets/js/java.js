//global VARIABLES 
var ViewHighScoreEl = document.querySelector("#view-high-score");
var QuizEl = document.querySelector("#quiz");
var startEl = document.querySelector("#start");
var timerScore = document.querySelector("#timer-score");
var questions = [
    {q: "Commonly used data types DO NOT include", a: "3. alerts"},
    {q: "The condition in an if/else statement is enclosed with __________.", a: "3. parenthesis"},
    {q: "Arrays in JavaScript can be used to store __________. ", a: "4. all of the above"},
    {q: "String values must be enclosed within __________ when being assigned to variables.", a: "3. quotes"},
    {q: "A very useful tool used during development and debugging for printing content to the debugger is: ", a: "4. console.log" }
];
var questionOneAnswers = [
    "1. strings",
    "2. booleans",
    "3. alerts",
    "4. numbers"
];

var questionTwoAnswers = [
    "1. quotes",
    "2. curly brackets",
    "3. parenthesis",
    "4. square brackets"
];
var questionThreeAnswers = [
    "1. numbers and strings",
    "2. other arrays",
    "3. booleans",
    "4. all of the above"
];
var questionFourAnswers = [
    "1. commas",
    "2. curly brackets",
    "3. quotes",
    "4. parenthesis"
];
var questionFiveAnswers = [
    "1. JavaScript",
    "2. terminal/bash",
    "3. for loops",
    "4. console.log"
];
var question="";
var quizScore =60; //start score/timer at 60 seconds
var currentQuestion =0;
var startButtonEl= document.createElement("button"); //start quiz button
var questionNumberTracker =0; //tracker to figure out what answers to display

//Start button starts quiz
var WelcomeQuiz = function() {
    //variables for startquiz section
    var h1El = document.createElement("h1"); //create header for Coding Quiz Challenge
    var textEl = document.createElement("p"); //create description of quiz
    
    var buttonCenterEl = document.createElement("div");
    var buttonContainerEl = document.createElement("div");

    //header info
    h1El.textContent = "Coding Quiz Challenge";
    h1El.className = "h1-welcome";
    QuizEl.appendChild(h1El); //make h1 appear on page

 
    //paragraph info
    textEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your score/time by ten seconds!"; //How to add a break in the text to new line???
    textEl.className = "p-welcome";
    QuizEl.appendChild(textEl); //make description appear

    //button info
    startButtonEl.textContent = " Start Quiz";
    startButtonEl.className = "button-style";
    buttonCenterEl.className = "button-center";
    buttonContainerEl.className ="button-container";
    buttonCenterEl.appendChild(startButtonEl);
    buttonContainerEl.appendChild(buttonCenterEl);
    QuizEl.appendChild(buttonContainerEl);
    
    // Hide information from welcomequiz when start button is clicked
    if (startButtonEl.addEventListener("click", function() {
        h1El.className = "hide";
        textEl.className = "hide";
        startButtonEl.className = "hide";
    }));
};

//function to go through and display answers as buttons
var displayAnswersAsButtons =function () {
    for (var j=0; j <= 3; j++) {
        var answer= document.createElement("button");
        var buttonContainerEl = document.createElement("div");
        answer.className = "button-style";
        buttonContainerEl.className ="button-container";

        if (questionNumberTracker === 1) {
            answer.textContent = questionOneAnswers[j];
            buttonContainerEl.appendChild(answer);
            QuizEl.appendChild(buttonContainerEl);
            
        }
        else if (questionNumberTracker === 2) {
            answer.textContent= questionTwoAnswers[j];
            buttonContainerEl.appendChild(answer);
            QuizEl.appendChild(buttonContainerEl);
        }
        else if (questionNumberTracker === 3) {
            answer.textContent = questionThreeAnswers[j];
            buttonContainerEl.appendChild(answer);
            QuizEl.appendChild(buttonContainerEl);
        }
        else if (questionNumberTracker ===4) {
            answer.textContent = questionFourAnswers[j];
            buttonContainerEl.appendChild(answer);
            QuizEl.appendChild(buttonContainerEl);
        }
        else if (questionNumberTracker === 5) {
            answer.textContent = questionFiveAnswers[j];
            buttonContainerEl.appendChild(answer);
            QuizEl.appendChild(buttonContainerEl);
        }

        console.log(answer);
        if (answer.addEventListener("click", function() {
            question.className = "hide";
            answer.className ="hide";
        })); //TO DO: THINK I NEED A .VALUE TAG OR SOMETHING SO I CAN DELETE MULTIPLE ANSWER BUTTONS AT THE SAME TIME
        
    }
    
};

//Timer Function 
var ScoreTracker = function () {
    
    var timeInterval = setInterval(function() {
        if (quizScore != 0 ) {
            timerScore.className = "score-style";
            timerScore.textContent = "Score: " + quizScore;
            quizScore--; //decrement by 1 every second or pass through setInterval function 
        }
        else  if (quizScore === 0) {
            GameOver();
        }
    }, 1000);
};

var startQuiz = function () {
    //when startbutton is clicked, timer starts 
    ScoreTracker();
    

    //Go through array of questions
    for (var i = 0; i < questions.length; i++) {
    question =document.createElement("h1");
    question.className = "h1-question";
    question.textContent =questions[i].q;
    QuizEl.appendChild(question);
    
    //Display buttons for specific questions
    questionNumberTracker++; //This allows us to display the correct array of answers as buttons in a for loop
    displayAnswersAsButtons();
    //When ANY answer button is clicked, hide that question and move on to the next one. 
   
    //Check to see if response is correct
        //if yes add score & display Correct at bottom of screen
        //if no subtract 10 from quizScore & display Wrong at bottom of screen

    }
    
    //when ANY BUTTON IS HOVERED OVER, change background color to third-color

    //when question is selected, say on bottom whether it is right or wrong
        //if wrong subtract 10 secons from clock
    //if timer <= 0 || all questions are answered then game over

   

    //When game over
        //save my initials and score
    
    //all done
};
var GameOver = function() {
    alert("The game is over!");
};

WelcomeQuiz();
startButtonEl.addEventListener("click", startQuiz);