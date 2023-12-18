import { useEffect, useState } from "react";
import "./App.css";
import Album from "./components/Album";
import Couple from "./components/Couple";
import DonateModal from "./components/DonateModal";
import Events from "./components/Events";
import HomeBanner from "./components/HomeBanner";
import SectionAccessible from "./components/SectionAccessible";
import SectionHero from "./components/SectionHero";
import HeartLoading from "./components/HeartLoading";
import { FadeIn } from "./components/FadeIn";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);

  if (loading) {
    return (
      <div className="loader">
        <HeartLoading />
      </div>
    );
  }
  return (
    <FadeIn>
      <section className="menu-section-area">
        <nav
          className="navbar navbar-expand-lg fixed-top d-none d-sm-none d-md-block d-lg-block d-xl-block"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand text-logo" href="#home">
              <h1>
                DL<i className="fa fa-heart"></i>TT
              </h1>
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarResponsive"
              style={{
                fontSize: 15,
              }}
            >
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item mr-4">
                  <a href="#couple">Cặp đôi</a>
                </li>

                <li className="nav-item mr-4">
                  <a href="#events">Sự kiện</a>
                </li>

                <li className="nav-item mr-4">
                  <a href="#gallery">Album cưới</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="mobile_menu hidden d-none">
          <a href="#home" className="text-logo">
            <h1 className="mobile-logo">
              L<i className="fa fa-heart"></i>T
            </h1>
          </a>
          <ul className="nav navbar-nav navbar-right menu">
            <li className="nav-item active">
              <a href="#couple">Cặp đôi</a>
            </li>

            <li className="nav-item">
              <a href="#events">Sự kiện</a>
            </li>

            <li className="nav-item">
              <a href="#gallery">Album cưới</a>
            </li>

            <li className="nav-item">
              <a href="javascript:void(0)" className="buttonDonate">
                Mừng cưới
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <HomeBanner />
      <Couple />
      <SectionAccessible />
      <div className="my-video">
        <h2 className="section-heading">Video của chúng mình</h2>
        <img
          className="heading-divider"
          src="https://linhtrang98.iwedding.info/templates/template5/img/divider.png"
          alt="divider"
        />
        <div className="video-content">
          <iframe
            width="1000px"
            height="500px"
            src="https://www.youtube.com/embed/AlT_TbXiNiY?si=Y2N9_Z9f9Ezgv_ap"
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <Events />

      <SectionHero />
      <DonateModal />
      <Album />
      <div className="footer">
        <i className="fa fa-heart"></i>
        <span style={{ textAlign: "center" }}>
          Thanks for watching. Hope to see you in our wedding
        </span>
        <i className="fa fa-heart"></i>
      </div>
    </FadeIn>
  );
}

export default App;
