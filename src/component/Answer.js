import React from 'react';

const Answer = ({ option, handleAnswerSelection }) => {
  return (
    <button onClick={() => handleAnswerSelection(option)}>
      {option}
    </button>
  );
};

export default Answer;
