import menuIcon from "../../../src/assets/icons/header_left_menu.svg";
import personIcon from "../../../src/assets/icons/profile_icon.svg";
import cartIcon from "../../../src/assets/icons/shopping_bag_icon.svg";
import "../../styles/common/header.scss";

export default function Header() {
  return (
    <header className="main__header">
      <div className="main__wrapper">
        <img className="icon__left" alt="Icon left" src={menuIcon} />
        <div className="logo">Iruly</div>
        <div className="icon__right">
          <img className="img" alt="Vector person" src={personIcon} />
          <img className="img" alt="Vector cart" src={cartIcon} />
        </div>
      </div>
    </header>
  );
}
