import useStore from "../stauts/store";

export default function TestResult() {
  const { score } = useStore((state) => state);
  return <div>결과 {score[0].score[0]}</div>;
}
