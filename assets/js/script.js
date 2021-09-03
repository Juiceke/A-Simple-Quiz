var timerEl = document.getElementById('time');
var startQuiz = document.getElementById('start-quiz');
var timeLeft = 60;

var time = setInterval(function() {
    
    timerEl.textContent = timeLeft;
    if(timeLeft === 0) {
        clearInterval(time);
    }
    timeLeft--;
    
},1000)
    
    


startQuiz.onclick = time;

