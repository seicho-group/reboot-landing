import { MainPageSlider } from "../../widgets/main-page-slider/main-page-slider.tsx";
import { css } from "emotion";
import { Header } from "../../widgets/header/header.tsx";
import { Footer } from "../../widgets/footer/footer.tsx";
import { FastActionsSection } from "../../widgets/fast-actions-section/fast-actions-section.tsx";
import { PriceCalculator } from "../../widgets/price-calculator/price-calculator.tsx";
import { AboutUs } from "../../widgets/about-us/about-us.tsx";
import { PhotoGallery } from "../../widgets/photo-gallery/photo-gallery.tsx";
import { Reviews } from "../../widgets/reviews/reviews.tsx";
import { Contacts } from "../../widgets/contacts/contacts.tsx";
import { containerStyles } from "../../shared/styles/container-styles.ts";

const landingCoreStyles = css({
  display: "grid",
  height: "100vh",
  width: "100%",
  gridTemplateRows: "auto 1fr auto",
});

const landingContentStyles = css({
  display: "flex",
  height: "100%",
  gap: "15px",
  flexDirection: "column",
  width: "100%",
  minWidth: "760px",
  maxWidth: "1300px",
  "& div": {
    padding: "50px 0",
  },
});

export const Landing = () => {
  return (
    <div className={landingCoreStyles}>
      <Header />
      <div className={containerStyles}>
        <main className={landingContentStyles}>
          <MainPageSlider />
          <FastActionsSection />
          <PriceCalculator />
          <AboutUs />
          <PhotoGallery />
          <Reviews />
          <Contacts />
        </main>
      </div>
      <Footer />
    </div>
  );
};
