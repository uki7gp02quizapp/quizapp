const quizData = [
    {
        question: "What is the correct CSS syntax for making all the <span> elements bold?",
        a: "span {text-size: bold}",
        b: "span {font-weight: bold}",
        c: "<span style='font-size: bold'>",
        d: "<span style='text-size: bold'>",
        correct: "b",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "How do you add a comment in a CSS file?",
        a: "/* this is a comment */",
        b: "// this is a comment //",
        c: "// this is a comment",
        d: "<!-- this is a comment-->",
        correct: "a",
    },
    {
        question: "What property is used to change the text color of an element?",
        a: "fontcolor:",
        b: "textcolor:",
        c: "color:",
        d: "font-color:",
        correct: "c",
    },
    {
        question: "The # symbol specifies that the selector is?",
        a: "class",
        b: "tag",
        c: "first",
        d: "id",
        correct: "d",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "{p:color=black(p}",
        b: "p {color: black;}",
        c: "{p;color:black}",
        d: "p:color=black",
        correct: "b",
    },
    {
        question: "Which of the following would be used to create an ID called header which has a width of 750px, a height of 30px and the color of the text is black?",
        a: "#header { height: 30px; width: 750px; color: black; }",
        b: ".header { height: 30px; width: 750px; colour: black; }",
        c: "#header { height: 30px; width: 750px; text: black; }",
        d: ".header { height: 30px; width: 750px; color: black; }",
        correct: "a",
    },
    {
        question: "Which snippet of CSS is commonly used to center a website horizontally?",
        a: "site-align: center;",
        b: "margin: center;",
        c: "margin: auto 0;",
        d: "margin: 0 auto;",
        correct: "d",
    },
    {
        question: "What is the correct Syntax for importing a stylesheet in CSS?",
        a: "@import url(css/example.css);",
        b: "@import-stylesheet url(css/example.css);",
        c: "import-css url(css/example.css);",
        d: "@import-style url(css/example.css);",
        correct: "a",
    },
    {
        question: "Which property is used to change the background color?",
        a: "background-color:",
        b: "bg-color:",
        c: "bground:",
        d: "b-color:",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})