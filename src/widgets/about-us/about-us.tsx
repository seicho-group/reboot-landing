import { ContentBlockName } from "../content-block/content-block";
import { PersonInfo } from "../person-info/person-info";
import manphoto from "./../../assests/personmock.png";
import womanphoto from "./../../assests/personmock2.png";
export const AboutUs = () => {
  return (
    <div id="aboutus">
      <ContentBlockName header={"О нас"} />
      <p style={{ margin: "0px 20px" }}>
        ReBoot - это команда профессионалов, специализирующаяся на
        высококачественном и оперативном ремонте электроники любых брендов и
        моделей.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "30px 20px",
          justifyContent: "space-between",
        }}
      >
        <PersonInfo name={"Алекс"} job={"мастер"} pic={manphoto} />
        <PersonInfo name={"Мария"} job={"консультант"} pic={womanphoto} />
      </div>
    </div>
  );
};
