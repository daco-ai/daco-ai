import React, { useState } from "react";
import "../styles/pages/test/test.scss";
import TestHeader from "../components/common/TestHeader";
import Button from "../components/common/Button";
import Data from "../data/testQuestion.json";
import useStore from "../stauts/store";
import Question from "../components/test/Question";

export default function Test() {
  const { page, increasePage, resetPage } = useStore((state) => ({
    page: state.page,
    increasePage: state.increasePage,
    resetPage: state.resetPage,
  }));
  const currentQuestionIndex = (page - 1) % Data.categories[0].questions.length;
  const currentCategoryIndex =
    Math.floor((page - 1) / Data.categories[0].questions.length) %
    Data.categories.length;

  const currentCategory = Data.categories[currentCategoryIndex];
  const currentQuestion = currentCategory?.questions[currentQuestionIndex];

  return (
    <div className="test__process">
      <TestHeader isDark={true} title={"피부 진단"} />
      <div className="content__box">
        <div className="top__group">
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${(page / Data.length) * 100}%`,
              }}
            ></div>
          </div>

          {currentQuestion && (
            <Question page={page} questionData={currentQuestion} />
          )}
        </div>
        <div className="btn-group">
          <Button full={false} text={"이전"} color={"gray"} func="" />
          <Button full={false} text={"다음"} color={"black"} func="" />
        </div>
      </div>
    </div>
  );
}
