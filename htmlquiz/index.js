const quizData = [
    
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Hyperloop Mechanic Language",
        correct: "a",
    },
    {
        question: "How many tags are in regular element?",
        a: "2",
        b: "1",
        c: "4",
        d: "5",
        correct: "a",
    },
    
    {
        question: "What is the difference between an opening tag and a closig tag?",
        a: "Opening tag has a / in front",
        b: "Closing tag has a / in front",
        c: " There is no difference",
        d: "Closing tag has a backslash",
        correct: "b",
    },

    {
        question: "< br  / > What type of tag is this? ",
        a: "Break tag",
        b: "A broken one",
        c: "An opening tag",
        d: "A closing tag",
        correct: "a",
    },

    {
        question: "In different folder",
        a: "Adds a link to google on the page",
        b: "ClosAdds a search engine to the pageing",
        c: "Nothing",
        correct: "a",
    },

    {
        question: "  Where is the meta tag only found? ",
        a: "The last page",
        b: "The home page",
        c: "The second page",
        d: "The third page",
        correct: "b",
    },

    {
        question: " What is an element that does not have a closing tag called?  ",
        a: "Tag",
        b: "Empty element",
        c: "Closed element",
        d: "Opened element",
        correct: "b",
    },

    {
        question: "  Which of the following is an example of an empty element? ",
        a: " <img / >",
        b: " <img > < / img >",
        c: " </img>",
        d: " <img>",
        correct: "a",
    },
    
    {
        question: "  Where do all items for the same website need to be saved? ",
        a: "In the same folder",
        b: "Where ever is fine",
        c: "In different folders",
        d: "In same file",
        correct: "a",
    },
    {
        question: "What is always a welcome page, and explains the purpose or topic of the site? ",
        a: "Page 4",
        b: "Homepage",
        c: "Table of contents",
        d: "Page 2",
        correct: "b",
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