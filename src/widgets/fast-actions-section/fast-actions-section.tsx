import { FastActionsPanel } from "./fast-action-panel/fast-action-panel";

import "./fast-action-section.css";

export const FastActionsSection = () => {
  return (
    <div className=" fastactionsection__wrapper">
      <div className="fastactionsection">
        <div>
          <FastActionsPanel
            header={"Узнать стоимость"}
            discription={"Держим стабильно низкие цены"}
            color={"#737373"}
          />
        </div>

        <div
          style={{ marginTop: "15px" }}
          className="fastactionsection__bottom"
        >
          <div style={{ width: "100%" }}>
            <a href="#contacts">
              <FastActionsPanel
                header={"Контакты"}
                discription={"Мы всегда на связи"}
                color={"#FF9D0A"}
              />
            </a>
          </div>

          <div style={{ width: "100%" }}>
            <a href="#aboutus">
              <FastActionsPanel
                header={"О нас"}
                discription={"Давайте знакомиться :)"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
