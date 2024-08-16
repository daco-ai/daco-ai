import headerLeftMenu from "../../../src/assets/icons/header_left_menu.svg";
import profileIcon from "../../../src/assets/icons/profile_icon.svg";
import shoppingBag from "../../../src/assets/icons/shopping_bag_icon.svg";
import "../../styles/common/header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <img
          className="header__left-icon"
          alt="header-left-icon"
          src={headerLeftMenu}
        />
      </div>
      <div className="header__logo">Iruly</div>
      <div className="header__right">
        <img className="header__profile-icon" alt="profile" src={profileIcon} />
        <img
          className="header__shopping-bag"
          alt="shopping-bag"
          src={shoppingBag}
        />
      </div>
    </header>
  );
}
