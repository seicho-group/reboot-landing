import "./reviews.css";
import { ContentBlockName } from "../content-block/content-block";

export const Reviews = () => {
  return (
    <div>
      <ContentBlockName header={"Отзывы"} />
      <div className="fst">
        <iframe
          className="sst"
          src="https://yandex.ru/maps-reviews-widget/122691520553?comments"
        ></iframe>
        <a
          className="tst"
          href="https://yandex.ru/maps/org/reboot/122691520553/"
          target="_blank"
        >
          ReBoot на карте Перми — Яндекс Карты
        </a>
      </div>
    </div>
  );
};
