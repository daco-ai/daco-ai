import ResultData from "../../data/result.json";

function DetailResult({ cate, score, idx }) {
  const getTypeResultIndex = (score) => {
    if (score >= 4 && score <= 7) return 0;
    if (score >= 8 && score <= 11) return 1;
    if (score >= 12 && score <= 15) return 2;
    if (score >= 16) return 3;
  };
  const totalTypeScore = score.reduce((acc, curr) => acc + curr, 0);
  const typeObj =
    ResultData.categoryResult[idx][`${cate}`][
      getTypeResultIndex(totalTypeScore)
    ];
  return (
    <div className="detail__box">
      <div className="inner">
        <div className="title__box">
          <p>{cate}</p>
          <p
            className={
              (typeObj?.level === "주의필요" ||
                typeObj?.level === "개선필요") &&
              "warning"
            }
          >
            {typeObj?.level}
          </p>
          <img src="/images/test-result_icon_info.svg" alt="" />
        </div>
        <p className="description">{typeObj?.description}</p>
        <div className="prograss__container">
          <p className="score">{totalTypeScore}점</p>
          <div className="progress-bar">
            <div className="bg">
              <div
                className="fill"
                style={{ width: `${(totalTypeScore / 16) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailResult;
