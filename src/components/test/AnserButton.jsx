import React, { useState } from "react";

const AnswerButton = ({ index, text, score }) => {
  const [scores, setScores] = useState({});
  const answer = document.querySelectorAll(".answer-button");
  const resetBtn = () => {
    answer.forEach((el) => {
      el.classList.remove("selected");
    });
  };

  const handleAnswerSelected = (category, questionIndex, score) => {
    resetBtn();
    console.log("???", score, category, questionIndex);
    score.target.classList.add("selected");
    // setScores((prevScores) => {
    //   const categoryScores = { ...prevScores[category] };
    //   categoryScores[questionIndex] =
    //     (categoryScores[questionIndex] || 0) + score;
    //   return { ...prevScores, [category]: categoryScores };
    // });
  };
  resetBtn();
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
