import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles/common/slide.scss";
import StarIcon from "../../assets/icons/slide_star.svg";

function Slide({ datas }) {
  console.log(datas);
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2.3}
      slidesOffsetBefore={20} // Adjust this value as needed
      slidesOffsetAfter={20}
    >
      {datas.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide__item">
            <div className="slide__item-img-block">
              <img className="slide__item-img" alt="Element" src={slide.img} />
            </div>
            <div className="slide__item-text">
              <div className="slide__item-tag-block">
                <p className="slide__item-tag">{slide.tag[0]}</p>
                <p className="slide__item-tag">{slide.tag[1]}</p>
              </div>
              <p className="slide__item-title">{slide.title}</p>
              <p className="slide__item-price">
                {slide.price.toLocaleString()}원
              </p>
              <div className="slide__item-review">
                <div className="slide__item-rate">
                  <img className="slide__item-rate-icon" src={StarIcon} />
                  <p className="slide__item-num">{slide.rate}</p>
                </div>
                <p className="slide__item-num">({slide.review})</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slide;
