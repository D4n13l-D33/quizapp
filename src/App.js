import React from 'react';
import Question from './Question';
import quizData from '../data/quizData.json'; // Importing quizData

const Quiz = () => {
  return (
    <div>
      {quizData.map((question, index) => (
        <Question
          key={index}
          question={question.question}
          options={question.options}
          // Pass other necessary props as needed
        />
      ))}
    </div>
  );
};

export default Quiz;
