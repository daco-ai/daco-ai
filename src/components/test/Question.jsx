import React from "react";
import AnwserButton from "./AnwserButton";
import useStore from "../../stauts/store";

const Question = ({ categoryData, questionData, questionIndex }) => {
  const { question, options } = questionData;
  const { page, score, setScore } = useStore((state) => state);
  const handleScore = (currentScore) => {
    const updatedScore = score.map((el) => {
      if (el.category === categoryData) {
        el.score[questionIndex] = currentScore;
      }
      return el;
    });
    setScore(updatedScore);
  };
  console.log("current Score :", score);
  return (
    <div className="question">
      <p>
        Q{page}. {question}
      </p>
      <div className="answer-buttons">
        {options.map((option, index) => (
          <AnwserButton
            key={index}
            index={index}
            option={option}
            onSelect={handleScore}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
