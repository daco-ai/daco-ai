import React from "react";

const AnswerButton = ({ text, score, onSelect }) => {
  return (
    <button onClick={() => onSelect(score)} className="answer-button">
      {text}
    </button>
  );
};

export default AnswerButton;
