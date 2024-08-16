import "../styles/pages/main/main.scss";
import CardSwiper from "../components/pages/main/CardSwiper";
import IntroSwiper from "../components/pages/main/IntroSwiper";
import SkinTestCard from "../components/pages/main/SkinTestCard";
import cateImg01 from "../assets/images/cate_01.png";
import cateImg02 from "../assets/images/cate_02.png";
import cateImg03 from "../assets/images/cate_03.png";
import cateImg04 from "../assets/images/cate_04.png";
import asianWomen from "../assets/images/asian_women.png";
import timerIcon from "../assets/icons/coupon_timer_icon.svg";
import skinTypeIcon from "../assets/icons/skin_type_icon.svg";
import rcmdPrdIcon from "../assets/icons/recommend_prd_icon.svg";

function Main() {
  return (
    <>
      <div className="main-frame">
        <IntroSwiper />
        <div className="main-category">
          <div className="main-category">
            {[
              { img: cateImg01, text: "NEW" },
              { img: cateImg02, text: "디바이스" },
              { img: cateImg03, text: "앰플" },
              { img: cateImg04, text: "세트" },
            ].map((category, index) => (
              <div
                className="m 
              
              ain-category__item"
                key={index}
              >
                <div className="main-category__img">
                  <img
                    className="main-category__image"
                    alt="Image"
                    src={category.img}
                  />
                </div>
                <div className="main-category__text-wrapper">
                  {category.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CardSwiper />
        <div className="main-coupon">
          <div className="main-coupon__txt">
            <div className="main-coupon__text-wrapper">한정 할인 쿠폰</div>
            <p className="main-coupon__description">
              현재 진행 중인 할인을 놓치지 마세요
            </p>
          </div>
          <div className="main-coupon__coupon">
            <div className="main-coupon__frame">
              <img className="main-coupon__timer" alt="Timer" src={timerIcon} />
              <div className="main-coupon__text-wrapper-2">
                ~2024년 8월 2일까지
              </div>
            </div>
            <div className="main-coupon__div-wrapper">
              <div className="main-coupon__text-wrapper-3">쿠폰 받기</div>
            </div>
          </div>
        </div>
        <div className="main-skintest">
          <div className="main-skintest__title">
            <div className="main-skintest__frame">
              <div className="main-skintest__text-wrapper">
                피부 진단 테스트
              </div>
            </div>
            <p className="main-skintest__div">
              피부 진단 받고 맞춤 제품 추천받으세요
            </p>
          </div>
          <div className="main-skintest__img">
            <div className="main-skintest__overlap-group">
              <div className="main-skintest__img-2">
                <img
                  className="main-skintest__img-3"
                  alt="Img"
                  src={asianWomen}
                />
              </div>

              <div className="main-skintest__txt">
                <SkinTestCard
                  imageSrc={skinTypeIcon}
                  textWrapperText={"피부 타입 진단"}
                  pText={"피부를 분석하여 피부 타입을 진단해드립니다."}
                />
                <SkinTestCard
                  imageSrc={rcmdPrdIcon}
                  textWrapperText={"피부 타입 진단"}
                  pText={"피부를 분석하여 피부 타입을 진단해드립니다."}
                />
                <button className="main-skintest__btn">
                  <div className="main-skintest__depth-frame">
                    <div className="main-skintest__text-wrapper-3">
                      피부 진단 받기
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
