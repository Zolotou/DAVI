const quizWrapper = document.querySelector('.game-quiz');
const quizStart = document.querySelector('.quiz-start');
const quiz = document.querySelector('.quiz');
const quizQuestion = document.querySelector('.quiz-question');
const quizChoises = document.querySelector('.quiz-choices');
const quizAnswers = document.querySelectorAll(".answer");
const quizScore = document.querySelector('.quiz-start-score')
const page = document.getElementsByTagName("title")[0].innerHTML;
const audio = document.createElement('audio');
audio.src = './src/assets/tink.wav';
let question;
let progress = 0;
let goodquestion = 0;

quizStart.addEventListener("click", startQuiz);
for(let i of quizAnswers){
    i.addEventListener('click', (e) => {checkAnswer(e.target.textContent)
    })
   
}

function startQuiz(){
    quizStart.style.display = "none";
    quiz.style.display = "block";
    renderQuiz();
  
}


async function renderQuiz(){
    const url = `./src/js/json/${page}.json`
    const data = await fetch(url);
    const result = await data.json();
    question = result.sort((a,b) => 0.5 - Math.random());
    updateQuiz();
}

function updateQuiz(){
    quizQuestion.innerHTML = `<h2>${question[progress].question}</h2>`;
    question[progress].answers.sort((a,b) => 0.5 - Math.random())
    for (let i=0; i< quizAnswers.length; i++){
        quizAnswers[i].innerHTML = `<h3>${question[progress].answers[i]}</h3>`;
    }
}

function endQuiz(){
    console.log('End')
    quizStart.style.display = "block";
    quiz.style.display = "none";
    progress = 0;
    quizScore.textContent = `You answered right ${goodquestion} questions out of ${question.length}.`
    goodquestion = 0;
}

function checkAnswer(answer){
    console.log(progress)
    console.log(question)
    audio.currentTime = 0;
    audio.play();
    if(answer == question[progress].correctAnswer){
        progress++;
        goodquestion++;
    }
    else{
        progress++;
    }
    progress == question.length ? endQuiz() : updateQuiz();
}