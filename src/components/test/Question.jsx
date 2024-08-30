import React from "react";
import AnswerButton from "./AnserButton";

const Question = ({ questionData, onAnswerSelected }) => {
  const { question, options } = questionData;

  const handleAnswerSelect = (score) => {
    onAnswerSelected(score);
  };

  return (
    <div className="question">
      <p>{question}</p>
      <div className="answer-buttons">
        {options.map((option, index) => (
          <AnswerButton
            key={index}
            text={option.text}
            score={option.score}
            onSelect={handleAnswerSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
