var timerEl = document.getElementById('time');
var startQuiz = document.getElementById('start-quiz');
var question = document.getElementById('question');
var paragraph = document.getElementById('paragraph');
var timeLeft = 120;
var score = 0;
var timeLoss = 10;


var questionArr = [ 
    {
    question: "Who invented JavaScript?", // question taken from https://www.sitepoint.com/simple-javascript-quiz/
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Inside which HTML element do we put the javascript?", // this question plus the rest taken from https://github.com/Achigas/CodeQuiz-Challenge4/
    answers: {
      a: "<h1>",
      b: "<js>",
      c: "<script>"
    },
    correctAnswer: "c"
  },
  {
    question: "Arrays in Javascript can be used to store __________.",
    answers: {
      a: "numbers",
      b: "booleans",
      c: "strings",
      d: "all of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "In the code -- setinterval(time(),1000) -- what is time()?",
    answers: {
      a: "callback function",
      b: "undefined",
      c: "variable",
      d: "function()"
  },
    correctAnswer: "a"
  },
  {
    question: "What is getItem commonly used for?",
    answers: {
      a: "adding drama",
      b: "local storage",
      c: "online shopping",
      d: "naming a variable"
  },
    correctAnswer: "b"
  },
  
];

var start = function() {
// replacing content of the page with questions
question.textContent = questionArr[0].question;
paragraph.remove();
startQuiz.remove();

// code for question 1
var column = document.createElement('div');
column.className = 'btn-column';

var questionBtnElA = document.createElement('button');
questionBtnElA.className = 'btn';
questionBtnElA.setAttribute('id', 'wrong');
questionBtnElA.innerHTML = questionArr[0].answers.a;
document.body.appendChild(column);
column.appendChild(questionBtnElA)

var questionBtnElB = document.createElement('button');
questionBtnElB.className = 'btn';
questionBtnElB.setAttribute('id', 'wrong2');
questionBtnElB.innerHTML = questionArr[0].answers.b;
column.appendChild(questionBtnElB);

var questionBtnElC = document.createElement('button');
questionBtnElC.className = 'btn';
questionBtnElC.setAttribute('id', 'right');
questionBtnElC.innerHTML = questionArr[0].answers.c;
column.appendChild(questionBtnElC);
// Question one wrong ------------------------------------------------
var wrong = document.getElementById('wrong');
var wrong2 = document.getElementById('wrong2');
var QuestionOneWrong = function() {
questionBtnElA.remove();
    questionBtnElB.remove();
    questionBtnElC.remove();

timeLeft = timeLeft - 10;
timerEl.textContent = timeLeft;
questionTwo();
}

// Question one right

var right = document.getElementById('right')
var QuestionOneRight = function() {
    questionBtnElA.remove(questionBtnElA);
    questionBtnElB.remove(questionBtnElB);
    questionBtnElC.remove(questionBtnElC);
    score++;
    questionTwo();
}

// Question two
var questionTwo = function() {
    

question.textContent = questionArr[1].question;


var column = document.createElement('div');
column.className = 'btn-column';

var questionBtnElA = document.createElement('button');
questionBtnElA.className = 'btn';
questionBtnElA.setAttribute('id', 'twoWrong');
questionBtnElA.textContent = questionArr[1].answers.a;
document.body.appendChild(column);
column.appendChild(questionBtnElA)

var questionBtnElB = document.createElement('button');
questionBtnElB.className = 'btn';
questionBtnElB.setAttribute('id', 'twoWrong2');
questionBtnElB.textContent = questionArr[1].answers.b;
column.appendChild(questionBtnElB);

var questionBtnElC = document.createElement('button');
questionBtnElC.className = 'btn';
questionBtnElC.setAttribute('id', 'twoRight');
questionBtnElC.textContent = questionArr[1].answers.c;
column.appendChild(questionBtnElC);

var twoWrong = document.getElementById('twoWrong');
var twoWrong2 = document.getElementById('twoWrong2');
var twoRight = document.getElementById('twoRight');

twoWrong.onclick = questionTwoWrong;
twoWrong2.onclick = questionTwoWrong;
twoRight.onclick = questionTwoRight;
}

var questionTwoWrong = function() {
    twoWrong.remove(twoWrong);
    twoWrong2.remove(twoWrong2);
    twoRight.remove(twoRight);
    timeLeft = timeLeft - 10;
    timerEl.textContent = timeLeft;
    questionThree();
}

var questionTwoRight = function() {
    twoWrong.remove(twoWrong);
    twoWrong2.remove(twoWrong2);
    twoRight.remove(twoRight);
    score++;
    questionThree();
    
    
}


// Question three --------------------------------------------
var questionThree = function() {
    

    question.textContent = questionArr[2].question;
    
    var column = document.createElement('div');
    column.className = 'btn-column';
    
    var questionBtnElA = document.createElement('button');
    questionBtnElA.className = 'btn';
    questionBtnElA.setAttribute('id', 'threeWrong');
    questionBtnElA.innerHTML = questionArr[2].answers.a;
    document.body.appendChild(column);
    column.appendChild(questionBtnElA)
    
    var questionBtnElB = document.createElement('button');
    questionBtnElB.className = 'btn';
    questionBtnElB.setAttribute('id', 'threeWrong2');
    questionBtnElB.innerHTML = questionArr[2].answers.b;
    column.appendChild(questionBtnElB);
    
    var questionBtnElC = document.createElement('button');
    questionBtnElC.className = 'btn';
    questionBtnElC.setAttribute('id', 'threeWrong3');
    questionBtnElC.innerHTML = questionArr[2].answers.c;
    column.appendChild(questionBtnElC);

    var questionBtnElD = document.createElement('button');
    questionBtnElD.className = 'btn';
    questionBtnElD.setAttribute('id', 'threeRight');
    questionBtnElD.innerHTML = questionArr[2].answers.d;
    column.appendChild(questionBtnElD);

    var threeWrong = document.getElementById('threeWrong');
    var threeWrong2 = document.getElementById('threeWrong2');
    var threeWrong3 = document.getElementById('threeWrong3');
    var threeRight = document.getElementById('threeRight');

    threeWrong.onclick = questionThreeWrong;
    threeWrong2.onclick = questionThreeWrong;
    threeWrong3.onclick = questionThreeWrong;
    threeRight.onclick = questionThreeRight;
    }


// Question three wrong ----------------------------------------

questionThreeWrong = function() {
    threeWrong.remove(threeWrong);
    threeWrong2.remove(threeWrong2);
    threeWrong3.remove(threeWrong3);
    threeRight.remove(threeRight);
    timeLeft = timeLeft - 10;
    timerEl.textContent = timeLeft;
    questionFour();
}

// Question three right

questionThreeRight = function() {
    threeWrong.remove(threeWrong);
    threeWrong2.remove(threeWrong2);
    threeWrong3.remove(threeWrong3);
    threeRight.remove(threeRight);
    score++;
    questionFour();
}
// Question Four -----------------------------------------------
var questionFour = function() {
    

        question.textContent = questionArr[3].question;
        
        var column = document.createElement('div');
        column.className = 'btn-column';
        
        var questionBtnElA = document.createElement('button');
        questionBtnElA.className = 'btn';
        questionBtnElA.setAttribute('id', 'fourWrong');
        questionBtnElA.innerHTML = questionArr[3].answers.a;
        document.body.appendChild(column);
        column.appendChild(questionBtnElA)
        
        var questionBtnElB = document.createElement('button');
        questionBtnElB.className = 'btn';
        questionBtnElB.setAttribute('id', 'fourWrong2');
        questionBtnElB.innerHTML = questionArr[3].answers.b;
        column.appendChild(questionBtnElB);
        
        var questionBtnElC = document.createElement('button');
        questionBtnElC.className = 'btn';
        questionBtnElC.setAttribute('id', 'fourWrong3');
        questionBtnElC.innerHTML = questionArr[3].answers.c;
        column.appendChild(questionBtnElC);
    
        var questionBtnElD = document.createElement('button');
        questionBtnElD.className = 'btn';
        questionBtnElD.setAttribute('id', 'fourRight');
        questionBtnElD.innerHTML = questionArr[3].answers.d;
        column.appendChild(questionBtnElD);
    
        var fourWrong = document.getElementById('fourRight');
        var fourWrong2 = document.getElementById('fourWrong2');
        var fourWrong3 = document.getElementById('fourWrong3');
        var fourRight = document.getElementById('fourWrong');
    
        fourWrong.onclick = questionFourWrong;
        fourWrong2.onclick = questionFourWrong;
        fourWrong3.onclick = questionFourWrong;
        fourRight.onclick = questionFourRight;
        
    
}
    // Question four wrong ----------------------------------------
    
    questionFourWrong = function() {
    fourWrong.remove(fourWrong);
    fourWrong2.remove(fourWrong2);
    fourWrong3.remove(fourWrong3);
    fourRight.remove(fourRight);
    

    column.remove()
    timeLeft = timeLeft - 10;
    timerEl.textContent = timeLeft;
    questionFive()
    }
    // Question four right
    
    questionFourRight = function() {
        fourWrong.remove(fourWrong);
    fourWrong2.remove(fourWrong2);
    fourWrong3.remove(fourWrong3);
    fourRight.remove(fourRight);
    score++
        questionFive();
    }

// Question Five
var questionFive = function() {
    

        question.textContent = questionArr[4].question;
        var column = document.createElement('div');
        column.className = 'btn-column';

        var questionBtnElA = document.createElement('button');
        questionBtnElA.className = 'btn';
        questionBtnElA.setAttribute('id', 'fiveWrong');
        questionBtnElA.innerHTML = questionArr[4].answers.a;
        document.body.appendChild(column);
        column.appendChild(questionBtnElA)
        
        var questionBtnElB = document.createElement('button');
        questionBtnElB.className = 'btn';
        questionBtnElB.setAttribute('id', 'fiveWrong2');
        questionBtnElB.innerHTML = questionArr[4].answers.b;
        column.appendChild(questionBtnElB);
        
        var questionBtnElC = document.createElement('button');
        questionBtnElC.className = 'btn';
        questionBtnElC.setAttribute('id', 'fiveWrong3');
        questionBtnElC.innerHTML = questionArr[4].answers.c;
        column.appendChild(questionBtnElC);
    
        var questionBtnElD = document.createElement('button');
        questionBtnElD.className = 'btn';
        questionBtnElD.setAttribute('id', 'fiveRight');
        questionBtnElD.innerHTML = questionArr[4].answers.d;
        column.appendChild(questionBtnElD);
    
        var fiveWrong = document.getElementById('fiveWrong');
        var fiveWrong2 = document.getElementById('fiveRight');
        var fiveWrong3 = document.getElementById('fiveWrong3');
        var fiveRight = document.getElementById('fiveWrong2');
    
        fiveWrong.onclick = questionFiveWrong;
        fiveWrong2.onclick = questionFiveWrong;
        fiveWrong3.onclick = questionFiveWrong;
        fiveRight.onclick = questionFiveRight;
        
    
}
    // Question five wrong ----------------------------------------
    
    questionFiveWrong = function() {
        fiveWrong.remove(fiveWrong);
        fiveWrong2.remove(fiveWrong2);
        fiveWrong3.remove(fiveWrong3);
        fiveRight.remove(fiveRight);
    timeLeft = timeLeft - 10;
    timerEl.textContent = timeLeft;
    clearInterval(time);
    gameOver();
    }
    // Question five right
    
    questionFiveRight = function() {
        fiveWrong.remove(fiveWrong);
        fiveWrong2.remove(fiveWrong2);
        fiveWrong3.remove(fiveWrong3);
        fiveRight.remove(fiveRight);
        score++
        clearInterval(time);
        gameOver();
    
}

var gameOver = function() {
  question.textContent = 'All done!';
  var Inititals = '';
  var yourScore = document.createElement('p');
        yourScore.className = 'your-score'
        document.body.appendChild(yourScore);
        yourScore.innerHTML = 'your score is ' + score;
  var bruh = document.createElement('div');
    document.body.appendChild(yourScore)
    debugger;
    bruh.innerhtml = "Enter Intitials:" + "<input type='text'/>" + "<button type='submit'/>"



}




// adding functionality to the timer ---------------------------
timerEl.textContent = timeLeft

var time = setInterval(function() {
    
    timeLeft--;
    if(timeLeft === 0) {
        
        clearInterval(time);
    }
    timerEl.textContent = timeLeft;
    
    
},1000)
wrong.onclick = QuestionOneWrong;
wrong2.onclick = QuestionOneWrong;
right.onclick = QuestionOneRight;

}
startQuiz.onclick = start;









