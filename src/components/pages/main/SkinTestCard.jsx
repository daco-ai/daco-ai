import "../../../styles/pages/main/skin_test.scss";

export default function SkinTestCard({ imageSrc, textWrapperText, pText }) {
  return (
    <div className="main-skintest__card">
      <img
        className="main-skintest__icon-container"
        alt="Icon container"
        src={imageSrc}
      />
      <div className="main-skintest__txt-2">
        <div className="main-skintest__div-wrapper">
          <div className="main-skintest__text-wrapper-2">{textWrapperText}</div>
        </div>
        <div className="main-skintest__div-wrapper">
          <p className="main-skintest__p">{pText}</p>
        </div>
      </div>
    </div>
  );
}
