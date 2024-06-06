import "./contacts.css";
import locationsign from "./../../assests/locationsign.svg";
import phone from "./../../assests/phone.svg";
import workinghours from "./../../assests/workinghours.svg";
import { ContentBlockName } from "../content-block/content-block";
import tg from "./../../assests/tg.svg";
export const Contacts = () => {
  // @ts-ignore
  return (
    <div id="contacts">
      <ContentBlockName header={"Контакты"} />
      <div className="contacts__info">
        <div style={{ display: "flex", gap: "7px" }}>
          <img style={{ width: "15px", opacity: "70%" }} src={phone} alt="" />
          <p>+7 (995) 482 10 30</p>
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <img
            style={{ width: "12px", opacity: "70%" }}
            src={locationsign}
            alt=""
          />
          <p>Пермь, улица Тургенева 39 </p>
        </div>
        <div style={{ display: "flex", gap: "7px" }}>
          <img
            style={{ width: "15px", opacity: "70%" }}
            src={workinghours}
            alt=""
          />
          <p>
            пн - пт 11:00 - 21:00 <br />
            сб 11:00 - 19:00
          </p>
        </div>
      </div>

      <div className="socialmedia">
        <img src={tg} alt="" />
        <img src={tg} alt="" />

        <img src={tg} alt="" />
      </div>

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          margin: "20px",
        }}
      >
        <a
          href="https://yandex.ru/maps/org/reboot/122691520553/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee;font-size:12px",
            position: "absolute",
            top: "0px",
          }}
        >
          ReBoot
        </a>

        <a
          href="https://yandex.ru/maps/50/perm/category/phone_repair/184107787/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "14px",
          }}
        >
          Ремонт телефонов в Перми
        </a>
        <a
          href="https://yandex.ru/maps/50/perm/category/items_for_mobile_phones/52984923455/?utm_medium=mapframe&utm_source=maps"
          style={{
            color: "#eee",
            fontSize: "12px",
            position: "absolute",
            top: "28px",
          }}
        >
          Товары для мобильных телефонов в Перми
        </a>
        <iframe
          src="https://yandex.ru/map-widget/v1/?ll=56.294347%2C58.011661&mode=search&oid=122691520553&ol=biz&z=16.5"
          width="100%"
          height="300"
          style={{ position: "relative" }}
        ></iframe>
      </div>
    </div>
  );
};
