import { css } from "emotion";
import { PhoneContainer } from "./phone-container.tsx";
import { LaptopContainer } from "./laptop-container.tsx";
import { CompContainer } from "./comp-container.tsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main-page-slider.css";

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

// const sliderTextStyles = css({
//   fontWeight: "bolder",
//   top: "300px",
//   color: "#35A9F2",
//   fontSize: "38px",
//   userSelect: "none",
// });

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

// const sliderTextWrapperStyles = css({
//   position: "absolute",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: "50px",
//   top: "300px",
//   backgroundColor: "white",
//   fontSize: "38px",
//   height: "90px",
//   width: "200px",
// });

export const MainPageSlider = () => {
  const [currentType, setCurrentType] = useState("телефона");
  useEffect(() => {
    const timeoutFn = () => {
      if (currentType === "телефона") {
        setCurrentType("ноутбука");
      }
      if (currentType === "ноутбука") {
        setCurrentType("компьютера");
      }
      if (currentType === "компьютера") {
        setCurrentType("телефона");
      }
    };
    const to = setTimeout(timeoutFn, 3000);
    return () => {
      clearTimeout(to);
    };
  }, [currentType]);
  return (
    <>
      <div className={sliderStyles}>
        <div className={sliderTextWrapperStyles}>
          <div style={{ width: "300px", display: "flex", "gap": "30px", flexDirection: "column", }}>
            <p>ремонт вашего</p>
            <div className={sliderTextStyles}>{currentType}</div>
            <p>в Перми</p>
          </div>
        </div>
        <PhoneContainer endPoint={[500, 400]} color={"#EEAA45"} />
        <LaptopContainer endPoint={[500, 400]} color={"#5BC0FF"} />
        <CompContainer endPoint={[500, 400]} color={"#EEAA45"} />
      </div>
      <div className="center">
        <Link to={"/createorder"}>
          <div
            className="createorder__button"
            style={{
              color: "#FF9D0A",
              fontSize: "20px",
              height: "45px",
              width: "250px",
              border: "2px solid #FF9D0A",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Оформить заказ
          </div>
        </Link>
      </div>
    </>
  );
};
