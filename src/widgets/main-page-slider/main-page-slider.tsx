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

const sliderTextStyles = css({
  fontWeight: "bolder",
  top: "300px",
  color: "white",
  fontSize: "38px",
  userSelect: "none",
});

const sliderTextWrapperStyles = css({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50px",
  top: "300px",
  backgroundColor: "#35A9F2",
  fontSize: "38px",
  height: "90px",
  width: "400px",
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
      <div className={sliderTextWrapperStyles}>
        <p className={sliderTextStyles}>{currentType}</p>
      </div>
      <PhoneContainer endPoint={[500, 400]} color={"#EEAA45"} />
      <LaptopContainer endPoint={[500, 400]} color={"#5BC0FF"} />
      <CompContainer endPoint={[500, 400]} color={"green"} />
    </div>
  );
};
