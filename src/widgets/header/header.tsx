import { css } from "emotion";
import { containerStyles } from "../../shared/styles/container-styles.ts";

import LOGO from "../../shared/assets/logo.png";

const headerStyles = css({
  display: "flex",
  maxWidth: "1300px",
  width: "100%",

  justifyContent: "space-between",
  padding: "20px 0",
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
        <img src={LOGO} alt={"logo"} />
        <nav>
          <ul className={navigationLinksStyles}>
            <li>Стоимость</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Оформить заказ</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
