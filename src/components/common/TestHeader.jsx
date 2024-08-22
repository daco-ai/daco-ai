import { useNavigate } from "react-router-dom";
import "../../styles/common/header.scss";
import backLogo from "/images/test__btn_back.svg";

export default function TestHeader({ title }) {
  const navigate = useNavigate();
  return (
    <header className="header__test">
      <img
        className="header__back"
        src={backLogo}
        alt="logo"
        onClick={() => navigate(-1)}
      />
      <p className="header__title">{title}</p>
    </header>
  );
}
