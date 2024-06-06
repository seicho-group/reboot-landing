import { css } from "emotion";
import { containerStyles } from "../../shared/styles/container-styles.ts";
// import logomobile from "./../../assests/logo.svg";
// import LOGO from "../../../assests/logodesk.svg";
import logo from "./../../assests/logodesktop.svg";
import "./header.css";

const headerStyles = css({
  display: "flex",
  maxWidth: "1300px",
  width: "100%",
  height: "70px",
  alignItems: "center",
  justifyContent: "space-between",
});

const navigationLinksStyles = css({
  display: "flex",
  gap: "15px",
  listStyle: "none",
  "& li": {
    fontWeight: 500,
    cursor: "pointer",
  },
});

export const Header = () => {
  return (
    <div id={"header-container"} className={containerStyles}>
      <header className={headerStyles}>
        <img src={logo} alt={"logo"} />
        <nav>
          <ul className={navigationLinksStyles}>
            <li>Стоимость</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Оформить заказ</li>
          </ul>
        </nav>
      </header>
      {/* <header className="header__mobile">
        <img src={logomobile} alt="" />
      </header> */}
    </div>
  );
};
