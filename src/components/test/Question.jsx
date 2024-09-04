import React from "react";
import AnswerButton from "./AnserButton";

const Question = ({ page, questionData }) => {
  const { question, options } = questionData;

  return (
    <div className="question">
      <p>
        Q{page}. {question}
      </p>
      <div className="answer-buttons">
        {options.map((option, index) => (
          <AnswerButton
            key={index}
            index={index}
            text={option.text}
            score={option.score}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
