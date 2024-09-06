import { useNavigate } from "react-router-dom";
import "../../styles/common/button.scss";
import useStore from "../../stauts/store.jsx";
import { useState } from "react";

export default function Button({ full, text, color, func }) {
  const navigate = useNavigate();
  const { page, increasePage, decreasePage } = useStore((state) => state);
  const [timer, setTimer] = useState(null);

  const handleClick = () => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        if (text === "뒤로가기") {
          navigate(-1);
        } else if (text === "이전") {
          decreasePage();
          navigate(`?level=${page - 1}`);
        } else {
          if (text === "다음" || text === "시작하기") {
            navigate(`?level=${page + 1}`);
          }
          func !== "" && func();
          increasePage();
        }
      }, 300)
    );
  };

  return full ? (
    <p onClick={handleClick} className={`btn btn-${color}`}>
      {text}
    </p>
  ) : (
    <p onClick={handleClick} className={`btn btn-${color} btn-half`}>
      {text}
    </p>
  );
}
