import React from 'react';

const Question = ({ question, options }) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      {/* Add logic for user selection and handling answers */}
    </div>
  );
};

export default Question;
