import React, { useState } from "react";

const AnswerButton = ({ index, text, score }) => {
  const [scores, setScores] = useState({});
  const handleAnswerSelected = (category, questionIndex, score) => {
    console.log("???", scores);
    setScores((prevScores) => {
      const categoryScores = { ...prevScores[category] };
      categoryScores[questionIndex] =
        (categoryScores[questionIndex] || 0) + score;
      return { ...prevScores, [category]: categoryScores };
    });
  };
  return (
    <div
      onClick={(score) => handleAnswerSelected(text, index, score)}
      className="answer-button"
    >
      {text}
    </div>
  );
};

export default AnswerButton;
