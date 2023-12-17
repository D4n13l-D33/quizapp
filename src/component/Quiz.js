import React, { useState } from 'react';
import Question from 'Question';
import Result from './Result';
import quizData from '../data/questions'; // Assuming questions are in a separate file

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  // ... other state variables for score, etc.

  const handleAnswerSelection = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    // Update score or other necessary state
    // Move to the next question
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <Question
          question={quizData[currentQuestion].question}
          options={quizData[currentQuestion].options}
          handleAnswerSelection={handleAnswerSelection}
        />
      ) : (
        <Result userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default Quiz;
