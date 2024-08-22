import { useNavigate } from "react-router-dom";
import "../../styles/common/button.scss";
import useStore from "../../stauts/store.jsx";
import { useState } from "react";

export default function Button({ full, text, color }) {
  const navigate = useNavigate();
  const { page, increasePage } = useStore((state) => state);
  const [timer, setTimer] = useState(null);

  const handleClick = () => {
    clearTimeout(timer);
    setTimer(
      setTimeout(() => {
        if (text !== "시작하기") {
          navigate(-1);
        } else {
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
    <p className={`btn btn-${color} btn-half`}>{text}</p>
  );
}
