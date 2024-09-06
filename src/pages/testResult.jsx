import TestHeader from "../components/common/TestHeader";
import Title from "../components/common/Title";
import useStore from "../stauts/store";
import React, { useEffect, useState } from "react";
import "../styles/pages/test/testResult.scss";
import ResultData from "../data/result.json";
import CategoryResult from "../components/testResult/CategoryResult";
import DetailResult from "../components/testResult/DetailResult";

export default function TestResult() {
  const { score } = useStore((state) => state);

  const totalScore = score.reduce((acc, curr) => {
    const sum = curr.score.reduce((sumAcc, num) => sumAcc + num, 0);
    return acc + sum;
  }, 0);

  const getResultIndex = (score) => {
    if (score >= 16 && score <= 28) return 0;
    if (score >= 29 && score <= 44) return 1;
    if (score >= 45 && score <= 60) return 2;
    if (score >= 61 && score <= 64) return 3;
    return 4;
  };

  return (
    <div className="test__result">
      <TestHeader isDark={true} title={"피부 진단 결과"} />
      <div className="content__container">
        <div className="total__container">
          <Title title={"종합 진단 요약"} />
          <div className="summary__container">
            <div className="total-result">
              <p>종합 점수</p>
              <img src="/images/test-result_icon_info.svg" alt="" />
            </div>
            <p className="score">{totalScore}점</p>
            <p className="description">
              {ResultData.totalResult[getResultIndex(totalScore)]}
            </p>
            <div className="score-bar">
              <div className="bg">
                <div
                  className="fill"
                  style={{ width: `${(totalScore / 64) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <div className="summary__container-cate">
            {score.map((el, idx) => (
              <CategoryResult
                key={idx}
                cate={el.category}
                score={el.score}
                idx={idx}
              />
            ))}
          </div>
        </div>
        <div className="detail__container">
          <Title title={"상세 분석"} />
          <div className="detail__content">
            {score.map((el, idx) => (
              <DetailResult
                key={idx}
                cate={el.category}
                score={el.score}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
