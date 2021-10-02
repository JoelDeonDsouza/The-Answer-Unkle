const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionElement = document.getElementById('q-container')
const qIndex = document.getElementById('question')
const ansBtn = document.getElementById('answer-btn')

let shuffle, currentQ

startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
  currentQ++
  setStatus
})

function startGame(){
  startButton.classList.add('hide')
  shuffle = questions.sort(() => Math.random() - .5)
  currentQ = 0
  questionElement.classList.remove('hide')
  nextQuestion()
}

function nextQuestion() {
resetState()
showQ(shuffle[currentQ])

}

function showQ(question){
  qIndex.innerText = question.question
  question.ans.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseAnswer)
    ansBtn.appendChild(button)
  })
}

function resetState(){
  cleanE(document.body)
  nextButton.classList.add('hide')
  while(ansBtn.firstChild){
   ansBtn.removeChild(ansBtn.firstChild)
  }
}

function chooseAnswer(e){
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatus(document.body, correct)
Array.from(ansBtn.children).forEach(button => {
  setStatus(button, button.dataset.correct)
})
if (shuffle.length >   currentQ + 1 ) {
  nextButton.classList.remove('hide')
}else{
  startButton.innerText = "Again"
  startButton.classList.remove('hide')
}
}

function setStatus(element, correct){
  cleanE(element)
  if(correct){
    element.classList.add('correct')
  }else{
    element.classList.add('wrong')
  }
}

function cleanE(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Which planet is known as the Morning Star or the Evening Star?',
    ans:[
      {text:' VENUS', correct:true},
      {text:'PLUTO', correct: false}
    ]
  },
  {
    question: 'Which planet is closest to the sun?',
    ans:[
      {text:'Mercury', correct:true},
      {text:'Uranus', correct: false}
    ]
  },
  {
    question: 'Which is the coldest and smallest of all planets?',
    ans:[
      {text:'PLUTO', correct:true},
      {text:'Mercury', correct: false}
    ]
  },
  {
    question: 'What is the Orbital period of Moon?',
    ans:[
      {text:'30 days', correct:false},
      {text:'27 days', correct:true }
    ]
  },
  {
    question: 'Which planets do not have moons?',
    ans:[
      {text:'Mercury and Venus', correct:true},
      {text:'Uranus and Neptune', correct: false}
    ]
  },
  {
    question: 'Who was the first woman to reach space?',
    ans:[
      {text:'Rebecca Marita, in 1964', correct:false},
      {text:'Valentina Tereshkova, in 1963', correct: true}
    ]
  },
  {
    question: 'When does a lunar eclipse occur?',
    ans:[
      {text:'when the Moom is between - the Earth and the Sun ', correct:false},
      {text:'when the Earth is between — the Sun and the Moon', correct: true}
    ]
  },
  {
    question: 'What color is Mars’ sunset?',
    ans:[
      {text:'Blue', correct:true},
      {text:'Red', correct: false}
    ]
  },
  {
    question: 'What does NASA stand for?',
    ans:[
      {text:'National American and Space Administration', correct:false},
      {text:'National Aeronautics and Space Administration', correct: true}
    ]
  },
  {
    question: 'How many constellations are there?',
    ans:[
      {text:'88', correct:true},
      {text:'85', correct: false}
    ]
  },
  {
    question: 'What has an incredibly strong gravitational pull that light can’t even escape?',
    ans:[
      {text:'A black hole', correct:true},
      {text:'A Matter', correct: false}
    ]
  }
]
