//global VARIABLES 
var ViewHighScoreEl = document.querySelector("#view-high-score");
var QuizEl = document.querySelector("#quiz");
var startEl = document.querySelector("#start");
var timerScore = document.querySelector("#timer-score");

var quizScore =60; //start score/timer at 60 seconds
var startButtonEl= document.createElement("button"); //start quiz button
var questionCounter =0;

var questions = [
    {q: "Commonly used data types DO NOT include",
    a: "3. alerts", 
    c: [ "1. strings","2. booleans","3. alerts","4. numbers"] 
    },
    
    {q: "The condition in an if/else statement is enclosed with __________.", 
    a: "3. parenthesis",
    c: ["1. quotes", "2. curly brackets","3. parenthesis","4. square brackets"]
    },
    
    {q: "Arrays in JavaScript can be used to store __________. ",
    a: "4. all of the above",
    c: ["1. numbers and strings","2. other arrays","3. booleans","4. all of the above"]
    },
    
    {q: "String values must be enclosed within __________ when being assigned to variables.", 
    a: "3. quotes",
    c: ["1. commas","2. curly brackets","3. quotes","4. parenthesis"]
    },
   
    {q: "A very useful tool used during development and debugging for printing content to the debugger is: ",
    a: "4. console.log",
    c: ["1. JavaScript","2. terminal/bash","3. for loops","4. console.log"] 
    }
];

//Start button starts quiz
var WelcomeQuiz = function() {
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
var displayQuestionsAnswers =function () {

    //Display questions, and then each question's specific answer choices
    if (questionCounter <  questions.length) {
        var questionPage = document.createElement("div");
        var questionHeader = document.createElement("div");
        var question =document.createElement("h1");
        question.className = "h1-question";
        question.textContent =questions[questionCounter].q;
        questionHeader.appendChild(question);
        questionPage.appendChild(questionHeader);
        QuizEl.appendChild(questionPage);

        for (var j =0; j < questions[i].c.length; j++) {
            // var choicesContainer = document.createElement("div")
            var buttonContainerEl = document.createElement("div");
            buttonContainerEl.className ="button-container";
            var choicesButton= document.createElement("button");
            choicesButton.className = "button-style";
            choicesButton.textContent = questions[i].c[j];
            buttonContainerEl.appendChild(choicesButton);
            questionPage.appendChild(buttonContainerEl);
        }
    }
    //when ANY BUTTON IS HOVERED OVER, call hover function 
    //ChangeColorHover();
    
    //this-- reads just the button that was clicked
        //When choicesButton is clicked

    choicesButton.addEventListener("click", CheckAnswers);
            
            // );
            // check to see if answer is correct
                //if yes, continue on to next question
                    //have text pop up below and say Correct
                //if no, subtract 10 from quizScore
                    //have text pop up below and say Wrong

        //move to next question
                        
            
    
    //if timer <= 0 || all questions are answered then game over
    
};

var ChangeColorHover = function() {
    choicesButton.addEventListener("mouseover", function (event) {
        event.target.className ="button-hover";
    })
    // change background color to third-color & use removeAttribute to get rid of style when no longer hovering
};

//Timer Function 
var ScoreTracker = function () {
    var timeInterval = setInterval(function() {
        if (quizScore > 0 ) {
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
    
    //Go through array of questions and choices
    displayQuestionsAnswers();

   
};

var GameOver = function() {
    // alert("The game is over!");

    //When game over
        //save my initials and score
            //TO DO: create an array to save all the information- initials and score and potentially an id to specify which of the scores- use push to get in
    
};

WelcomeQuiz();
startButtonEl.addEventListener("click", startQuiz);