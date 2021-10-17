const quizData = [
    {
        question: "Göktürk Botun İlk Adı?",
        a: "Göktürk Team",
        b: "Bozkurt Bot",
        c: "Göktürk Discord",
        d: "Bozkurt Bot cCc",
        correct: "a",
    },
    {
        question: "Göktürk Botta Kaç Komut Vardır?",
        a: "111",
        b: "109",
        c: "115",
        d: "113",
        correct: "d",
    },
    {
        question: "Göktürk'ün Yapay Zekası Kaç Yaşında",
        a: "1",
        b: "9",
        c: "4",
        d: "2",
        correct: "a",
    },
   
];

const quiz = document.getElementById('quiz')
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
                <h2>Cevaplardan ${score} Tanesi Doğru. ${quizData.length} Soru Vardı</h2>

                <button onclick="location.reload()">Tekrar Çöz</button>
            `
        }
    }
})