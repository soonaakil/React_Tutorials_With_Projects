import React, { useState } from 'react';

const Quiz = () => {
  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
      answer: 'Jupiter',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: ['Leonardo da Vinci', 'Michelangelo', 'Raphael', 'Caravaggio'],
      answer: 'Leonardo da Vinci',
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption(null);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOption(null);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h1>Quiz Finished!</h1>
        <p>Your final score is {score} out of {questions.length}.</p>
        <button onClick={handleRestart}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{questions[currentQuestion].question}</h1>
      <ul>
        {questions[currentQuestion].options.map((option) => (
          <li key={option}>
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
            />
            <span>{option}</span>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion}>Next Question</button>
      <p>Score: {score}</p>
    </div>
  );
};

export default Quiz;
