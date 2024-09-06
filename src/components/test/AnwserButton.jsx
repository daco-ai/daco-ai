import React, { useEffect } from "react";
import useStore from "../../stauts/store";

const AnwserButton = ({ index, option, onSelect }) => {
  const { page } = useStore((state) => state);
  const resetBtn = () => {
    const answer = document.querySelectorAll(".answer-button");
    answer.forEach((el) => {
      el.classList.remove("selected");
    });
  };
  const handleAnswerSelected = (score) => {
    resetBtn();
    score.target.classList.add("selected");
    onSelect(option.score, index);
  };
  useEffect(() => {
    resetBtn();
  }, [page]);
  return (
    <div
      onClick={(score) => handleAnswerSelected(score)}
      className="answer-button"
    >
      {option?.text}
    </div>
  );
};

export default AnwserButton;
