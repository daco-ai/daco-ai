import "../../styles/common/review.scss";
import starFilledIcon from "../../assets/icons/review_star_filled.svg";
import starUnfilledIcon from "../../assets/icons/review_star_unfilled.svg";

function Review({ imageSrc, rate, text, id }) {
  const filledStars = Array(rate).fill(starFilledIcon);
  const unfilledStars = Array(5 - rate).fill(starUnfilledIcon);

  return (
    <div className="review__item">
      <div className="review__item-text">
        <p className="review__item-desc">{text}</p>
        <div className="review__item-rate">
          {filledStars.map((star, index) => (
            <img key={`filled-${index}`} src={star} alt="Filled Star" />
          ))}
          {unfilledStars.map((star, index) => (
            <img key={`unfilled-${index}`} src={star} alt="Unfilled Star" />
          ))}
        </div>
        <div className="review__item-id">{id}</div>
      </div>
      <div className="review__item-frame">
        <img className="review__item-img" alt="리뷰 이미지" src={imageSrc} />
      </div>
    </div>
  );
}

export default Review;
