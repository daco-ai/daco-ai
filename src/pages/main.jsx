import "../styles/pages/main/main.scss";
import CardSwiper from "../components/pages/main/CardSwiper";
import IntroSwiper from "../components/pages/main/IntroSwiper";
import SkinTestCard from "../components/pages/main/SkinTestCard";
import cateImg01 from "../assets/images/cate_01.png";
import cateImg02 from "../assets/images/cate_02.png";
import cateImg03 from "../assets/images/cate_03.png";
import cateImg04 from "../assets/images/cate_04.png";
import asianWomen from "../assets/images/asian_women.png";
import personIcon from "../assets/icons/main__header-person.svg";
import menuIcon from "../assets/icons/header_left_menu.svg";
import cartIcon from "../assets/icons/main__header-cart.svg";
import timerIcon from "../assets/icons/coupon_timer_icon.svg";
import skinTypeIcon from "../assets/icons/skin_type_icon.svg";
import rcmdPrdIcon from "../assets/icons/recommend_prd_icon.svg";
import moreBtnIcon from "../assets/icons/more_btn_arrow.svg";
import Header from "../components/common/Header";
import Review01 from "../assets/images/review_01.png";
import Review from "../components/common/Review";
import Slide from "../components/common/Slide";
import Rcmd01 from "../assets/images/rcmd_01.png";
import Rcmd02 from "../assets/images/rcmd_02.png";
import Rcmd03 from "../assets/images/rcmd_03.png";
import { Link } from "react-router-dom";

function Main() {
  const slideData = [
    {
      title: "이루리 뷰티 부스터 프로",
      img: Rcmd01,
      tag: ["#Whitening", "#Device"],
      price: 160000,
      rate: 4.5,
      review: 155,
    },
    {
      title: "이루리 뷰티 부스터 프로",
      img: Rcmd02,
      tag: ["#Whitening", "#Device"],
      price: 160000,
      rate: 4.5,
      review: 155,
    },
    {
      title: "이루리 뷰티 부스터 프로",
      img: Rcmd03,
      tag: ["#Whitening", "#Device"],
      price: 160000,
      rate: 4,
      review: 150,
    },
  ];

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
              <div className="main-category__item" key={index}>
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

          <div className="main-skintest__overlap-group">
            <div className="main-skintest__txt">
              <SkinTestCard
                imageSrc={skinTypeIcon}
                textWrapperText={"피부 타입 진단"}
                pText={`피부를 분석하여 \n피부 타입을 진단해드립니다.`}
              />
              <SkinTestCard
                imageSrc={rcmdPrdIcon}
                textWrapperText={"피부 타입 진단"}
                pText={"피부를 분석하여 피부 타입을 진단해드립니다."}
              />
            </div>
            <Link to="/test" className="main-skintest__btn">
              <div className="main-skintest__depth-frame">
                <div className="main-skintest__text-wrapper-3">
                  피부 진단 받기
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="main-review">
          <div className="main-review__top">
            <div className="main-review__top-title">
              <p className="main-review__top-text">실 사용 리뷰</p>
              <p className="main-review__top-num">(1,256)</p>
            </div>
            <div className="main-review__btn">
              <a className="main-review__btn-more">더보기</a>
              <img className="main-review__btn-icon" src={moreBtnIcon} />
            </div>
          </div>
          <div className="main-review__list">
            {[
              {
                text: "이 제품을 사용한 후로 일상이 더 편리해졌어요. 품질도 좋고, 추천할만 합니다.",
                rate: 4,
                id: "autumnleaves99",
                img: Review01,
              },
              {
                text: "가격 대비 성능이 훌륭해요. 제가 기대했던 것 이상으로 좋은 제품이었습니다.",
                rate: 3,
                id: "autumnleaves99",
                img: Review01,
              },
              {
                text: "디자인은 마음에 드는데, 조금 더 튼튼했으면 좋겠어요. 전체적으로는 만족합니다.",
                rate: 4,
                id: "autumnleaves99",
                img: Review01,
              },
              {
                text: "색상이 생각했던 것과 조금 달라서 놀랐지만, 사용감은 매우 만족스럽습니다.",
                rate: 4,
                id: "autumnleaves99",
                img: Review01,
              },
              {
                text: "배송이 빠르고 제품 포장도 꼼꼼했습니다. 제품 자체도 튼튼하고 오래 쓸 것 같아요.",
                rate: 4,
                id: "autumnleaves99",
                img: Review01,
              },
            ].map((item, index) => (
              <Review
                key={index}
                imageSrc={item.img}
                rate={item.rate}
                id={item.id}
                text={item.text}
              />
            ))}
          </div>
        </div>
        <div className="rcmd">
          <div className="rcmd__text">
            <p className="rcmd__text-title">추천 상품</p>
            <div className="rcmd__text-bottom">
              <p className="rcmd__text-desc">
                당신을 위한 추천 제품을 만나보세요.
              </p>
              <div className="rcmd__text-btn">
                <a className="rcmd__text-btn-more">더보기</a>
                <img className="rcmd__text-btn-icon" src={moreBtnIcon} />
              </div>
            </div>
          </div>
          <div className="rcmd__list">
            <Slide datas={slideData} />
          </div>
        </div>
        <div className="news">
          <div className="news__container">
            <div className="news__text">
              <p className="news__text-title">
                Subscribe to our <br />
                newsletter
              </p>
              <p className="news__text-info">
                신제품, 컨텐츠 및 이벤트 소식을 <br />
                제일 먼저 받아보세요. <br />
                구독은 언제든지 취소 할 수 있어요.
              </p>
            </div>
            <div className="news__field">
              <input
                className="news__field-input"
                type="text"
                placeholder="이메일 입력"
              ></input>
              <button className="news__field-btn">구독 신청</button>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="frame">
            <div className="text-wrapper">Iruly</div>
            <div className="div">
              <div className="frame-2">
                <div className="frame-3">
                  <div className="text-wrapper-2">
                    Customer Service: dailynco@gmail.com
                  </div>
                  <div className="text-wrapper-3">
                    For B2B Inquiries: dailynco@gmail.com
                  </div>
                </div>
                <p className="p">Ⓒ 2024. All rights reserved.</p>
              </div>
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-4">Brand Story</div>
                  <div className="text-wrapper-5">About Mixsoon</div>
                  <div className="text-wrapper-5">FAQ</div>
                </div>
                <div className="frame-5">
                  <div className="text-wrapper-4">Account</div>
                  <div className="text-wrapper-5">My Account</div>
                  <div className="text-wrapper-5">Sign Up</div>
                </div>
              </div>
              <div className="frame-5">
                <div className="text-wrapper-6">Terms and conditions</div>
                <div className="text-wrapper-7">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
