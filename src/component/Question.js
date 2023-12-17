import React, { useState } from 'react';
import '../component/Questions.css';

const Question = ({ question, options, handleAnswerSelection }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    const selectedAnswer = options[index];
    handleAnswerSelection(selectedAnswer);
  };

  return (
    <div className='question-container'>
      <h3 className='question-text'>{question}</h3>
      <ul className='options-list'>
        {options.map((option, index) => (
          <li key={index} className={selectedOption === index ? 'selected-option' : ''}>
            <button onClick={() => handleOptionClick(index)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
