import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import cardSwiper01 from "../../../assets/images/cardswiper_01.png";
import cardSwiper02 from "../../../assets/images/cardswiper_02.png";
import cardSwiper03 from "../../../assets/images/cardswiper_03.png";
import "../../../styles/pages/main/card_swiper.scss";

export default function CardSwiper() {
  const numberOfSlides = 3;
  const slideTexts = ["Text 1", "Text 2", "Text 3"];
  const images = [cardSwiper01, cardSwiper02, cardSwiper03];

  return (
    <div className="main-cardswiper">
      <div className="main-cardswiper__title">
        <div className="main-cardswiper__text-wrapper">인기상품</div>
      </div>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.5}
        centeredSlides={true}
        initialSlide={1}
        spaceBetween={16}
        pagination={{ clickable: true }}
        className="main-cardswiper__prd-pag"
      >
        {Array.from({ length: numberOfSlides }, (_, index) => (
          <SwiperSlide key={index} className="main-cardswiper__div">
            <div className="main-cardswiper__img">
              <img
                className="main-cardswiper__image-2"
                alt="Image"
                src={images[index]} // Assuming you have cardSwiper1.png, cardSwiper2.png, etc.
              />
            </div>
            <div className="main-cardswiper__info">
              <div className="main-cardswiper__text-wrapper-2">
                {slideTexts[index]}
              </div>
              <div className="main-cardswiper__frame">
                <div className="main-cardswiper__text-wrapper-3">399,000원</div>
                <div className="main-cardswiper__text-wrapper-4">
                  799,000원~
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
