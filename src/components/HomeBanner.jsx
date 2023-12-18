import { Parallax } from "react-parallax";
import ReactWOW from "react-wow";

export default function HomeBanner() {
  return (
    <ReactWOW animation="fadeIn" delay="1s">
      <Parallax strength={50} lazy>
        <header className="home-banner-area" id="home">
          <section className="hero-area zoom-burns position-relative">
            <div className="hero-content-wrap zoom-burns-background my-banner"></div>
            <div className="container">
              <div className="header-caption text-left position-relative">
                <div className="header-content">
                  <img
                    src="https://linhtrang98.iwedding.info/templates/template5/img/header-love-bg.png"
                    alt="Love Img"
                    className="header-content-float-img position-absolute"
                  />
                  <div className="header-inner-text">
                    <h3 className="text-capitalize font-playball color-dark">
                      We’re Getting Married
                    </h3>
                    <h1 className="header-caption-heading font-playball color-pink text-capitalize">
                      Duy Linh &amp; Thảo Trang
                    </h1>
                    <p className="text-capitalize font-playball color-dark">
                      01 January 2024
                    </p>
                  </div>
                </div>
                <div
                  id="clock"
                  data-date="2024-01-01"
                  data-text-day="Ngày"
                  data-text-hour="Giờ"
                  data-text-minute="Phút"
                  data-text-second="Giây"
                ></div>
              </div>
            </div>
          </section>
        </header>
      </Parallax>
    </ReactWOW>
  );
}
