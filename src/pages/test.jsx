import React from "react";
import "../styles/pages/test/test.scss";
import TestHeader from "../components/common/TestHeader";

export default function Test() {
  return (
    <div className="test__start">
      <TestHeader title={"피부 진단"} />
    </div>
  );
}
