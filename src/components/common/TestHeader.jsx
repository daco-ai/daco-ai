import { useNavigate } from "react-router-dom";
import "../../styles/common/header.scss";
import backLogo from "/images/test__btn_back.svg";
import useStore from "../../stauts/store";

export default function TestHeader({ isDark, title }) {
  const navigate = useNavigate();
  const { page, resetPage } = useStore((state) => state);
  const handleBack = () => {
    if (page === 0) {
      navigate(-1);
    } else {
      resetPage();
    }
  };
  return (
    <header className="header__test">
      <img
        className="header__back"
        src={backLogo}
        alt="logo"
        onClick={() => handleBack()}
      />
      <p className={`header__title ${isDark ? "header__title__black" : ""}`}>
        {title}
      </p>
    </header>
  );
}
