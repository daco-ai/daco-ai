import ResultData from "../../data/result.json";

function CategoryResult({ cate, score, idx }) {
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
    <div className="category-result">
      <img
        className="icon"
        alt="Icon"
        src={`/images/test-result_icon_total-${idx}.svg`}
      />
      <div className="txt">
        <div className="category-title">{cate}</div>
        <div className="type__box">
          <div className="type__title">{typeObj?.type}</div>

          {getTypeResultIndex(totalTypeScore) >= 2 && (
            <div className="tag">{typeObj?.level}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryResult;
