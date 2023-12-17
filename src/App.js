import React, { useState } from 'react';
import Question from './component/Question';
import quizData from './data/quizData.json'; // Importing quizData
import Result from './component/Result'; // Import the Result component


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswerSelection={handleAnswerSelection}
          currentQuestion={currentQuestion}
        />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};


export default App;
