var timerEl = document.getElementById('time');
var startQuiz = document.getElementById('start-quiz');
var question = document.getElementById('question');
var paragraph = document.getElementById('paragraph');
var timeLeft = 60;
var score = timeLeft;
var questionArr = [ 
    {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich"
    },
    correctAnswer: "c"
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "Node.js",
      b: "TypeScript",
      c: "npm"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint"
    },
    correctAnswer: "d"
  }
];

var start = function() {
// replacing content of the page with questions
question.textContent = 'ayyyy';
paragraph.remove();
startQuiz.remove();


// adding functionality to the timer
timerEl.textContent = timeLeft

var time = setInterval(function() {
    
    timeLeft--;
    if(timeLeft === 0) {
        clearInterval(time);
    }
    timerEl.textContent = timeLeft;
    
},1000)
    }
    
startQuiz.onclick = start;



