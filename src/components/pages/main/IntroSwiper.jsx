import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImg from "../../../assets/images/main_intro_bg.png";
import "swiper/css";
import "swiper/css/pagination";
import "../../../styles/pages/main/intro_swiper.scss";

export default function IntroSwiper() {
  const slides = [
    {
      text: `"어둠 속에서 새롭게 떠오르는 태양처럼,\n당신의 피부에\n 재생과 활력을 선사합니다."`,
      buttonText: "SHOP NOW",
    },
    {
      text: "테스트 테스트 테스트.",
      buttonText: "테스트 버튼",
    },
  ];

  return (
    <>
      <div className="main-intro">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="main__overlap-group">
                <div className="main__background">
                  <img src={backgroundImg} alt="background" />
                </div>
                <div className="main__div">
                  <p className="main__p">{slide.text}</p>
                  <button className="main__btn">
                    <div className="main__text-wrapper">{slide.buttonText}</div>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
