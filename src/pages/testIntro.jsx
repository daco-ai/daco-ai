import React from "react";
import "../styles/pages/test/test.scss";
import Button from "../components/common/Button";
import TestHeader from "../components/common/TestHeader";
export default function TestIntro() {
  return (
    <div className="test__start">
      <TestHeader title={"피부 진단"} />
      <div className="text-group">
        <p className="title">피부 진단 시작하기</p>

        <p className="main-text">
          피부 유형을 파악하고
          <br />
          유형에 적합한 제품과, 기기를
          <br />
          분석하여 추천해드립니다.
        </p>
      </div>
      <div className="btn-group">
        <Button full={true} text={"시작하기"} color={"white"} />
        <Button full={true} text={"뒤로가기"} color={"black"} />
      </div>
    </div>
  );
}
