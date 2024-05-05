import { css } from "emotion";
import { PhoneContainer } from "./phone-container.tsx";
import { LaptopContainer } from "./laptop-container.tsx";
import { CompContainer } from "./comp-container.tsx";
import { useEffect, useState } from "react";

const sliderStyles = css({
  height: "700px",
  position: "relative",

  overflow: "hidden",
});

export const MainPageSlider = () => {
  const [currentType, setCurrentType] = useState("телефоны");
  useEffect(() => {
    const timeoutFn = () => {
      if (currentType === "телефоны") {
        setCurrentType("ноутбуки");
      }
      if (currentType === "ноутбуки") {
        setCurrentType("компьютеры");
      }
      if (currentType === "компьютеры") {
        setCurrentType("телефоны");
      }
    };
    const to = setTimeout(timeoutFn, 3000);
    return () => {
      clearTimeout(to);
    };
  }, [currentType]);
  return (
    <div className={sliderStyles}>
      <p
        style={{
          fontWeight: "500",
          position: "absolute",
          top: "300px",
          color: "#35A9F2",
          fontSize: "38px",
        }}
      >
        {currentType}
      </p>
      <PhoneContainer endPoint={[300, 400]} color={"#EEAA45"} />
      <LaptopContainer endPoint={[200, 400]} color={"blue"} />
      <CompContainer endPoint={[200, 400]} color={"green"} />
    </div>
  );
};
