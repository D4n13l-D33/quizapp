import React, { useState } from 'react';
import Question from 'Question';
import Result from './Result';
import quizData from './quizData';
import Answer from './Answer';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1); // Increment score if the answer is correct
    }
  };
    
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      {currentQuestion < quizData.length ? (
        <Question
        question={quizData[currentQuestion].question}
        options={quizData[currentQuestion].options}
        handleAnswerSelection={handleAnswerSelection}
        currentQuestion={currentQuestion} // Pass currentQuestion as a prop
      />
      ) : (
        <Result userAnswers={userAnswers} />
      )}
    </div>
  );

export default Quiz;
