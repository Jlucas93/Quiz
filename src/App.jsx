import { useState, useCallback } from 'react'
import './App.css'

const questions = [
  {
    question: "Qual o idioma falado no Brasil?",
    answerOptions: [
      { answer: "Português", isCorrect: true },
      { answer: "Inglês", isCorrect: false },
      { answer: "Francês", isCorrect: false },
      { answer: "Alemão", isCorrect: false },
    ],
  },
  {
    question:
      "Quais os países que têm a maior e a menor expectativa de vida do mundo?",
    answerOptions: [
      { answer: "Japão e Serra Leoa", isCorrect: true },
      { answer: "Austrália e Afeganistã", isCorrect: false },
      { answer: "Itália e Chade", isCorrect: false },
      { answer: "Brasil e Congo", isCorrect: false },
    ],
  },
  {
    question: "Qual empresa criou o Iphone?",
    answerOptions: [
      { answer: "Apple", isCorrect: true },
      { answer: "Intel", isCorrect: false },
      { answer: "Amazon", isCorrect: false },
      { answer: "Microsoft", isCorrect: false },
    ],
  },
  {
    question: "Como aprender a programar?",
    answerOptions: [
      { answer: "Praticando o que se aprende", isCorrect: true },
      { answer: "Vendo vídeo", isCorrect: false },
      { answer: "Lendo", isCorrect: false },
      { answer: "Dormindo", isCorrect: false },
    ],
  },
]
function App() {

  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  
  const handleClick = useCallback((isCorrect) =>{
    if (isCorrect) {
      setScore(score + 1);    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  })

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Você pontuou {score} de {questions.length}
        </div>
      )
        :
        (
          <>
            <div className="question-section">

              <div className="question-count">

                <span>Quesstão {currentQuestion + 1}/{questions.length}</span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.
                map((answerOptions, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(answerOptions.isCorrect)}
                  >
                    {answerOptions.answer}
                  </button>
                ))}
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
