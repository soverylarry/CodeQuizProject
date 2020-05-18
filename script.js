//declaring key variables
var currentQuestion = 0
//var timeLeft = 120 (to be used when I figure out the damn timer...)
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

//method to load questions from question index
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
//loads next question after checking to see an answer has been selected
function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please make a choice!');
        return;
    }
    //awards 10 points correct answer after verifying correct answer
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    //if last question shows that you're done
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    //at end of quiz the container will disappear and shows results container with score
    if(currentQuestion == totQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
    loadQuestion(currentQuestion);
}
//trying to jump start quiz but couldn't get questions to load....'questions' showing as undefined
loadQuestion(currentQuestion);



//save Initials and Score to local storage


        

