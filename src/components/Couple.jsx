import ReactWOW from "react-wow";

export default function Couple() {
  return (
    <ReactWOW animation="bounceInUp" delay="0.5s" duration="0.5s">
      <section className="bride-groom-area" id="couple">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2 className="section-heading">Cô dâu &amp; Chú rể</h2>
              <img
                className="heading-divider"
                src="https://linhtrang98.iwedding.info/templates/template5/img/divider.png"
                alt="divider"
              />
              <h3 className="section-subheading">
                Tình yêu là điều kiện trong đó hạnh phúc của người khác là điều
                cần thiết cho chính bạn.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 col-md-6 col-lg-5">
              <div className="bride-groom-box">
                <div className="bride-groom-photo position-relative">
                  <div className="bride-photo-box position-relative">
                    <img src="/img/IMG_1712.JPG" alt="Bride" />
                  </div>
                  <div className="bride-border-box">
                    <span className="bride-groom-border" />
                    <span className="bride-groom-border" />
                    <span className="bride-groom-border" />
                    <span className="bride-groom-border" />
                  </div>
                </div>
                <div className="bride-groom-content text-center">
                  <a href="#bride-groom">
                    <h3>Duy Linh</h3>
                  </a>
                  {/*<h4>21/07/1998</h4>*/}
                  <div className="parent-infos">
                    <div className="parent-info">
                      <span className="parent-title">Con ông:</span>{" "}
                      <span className="parent-name">Đặng Đức Hậu</span>
                    </div>
                    <div className="parent-info">
                      <span className="parent-title">Con bà:</span>{" "}
                      <span className="parent-name">Trần Thị Thu</span>
                    </div>
                  </div>
                  <p>Mình là chồng cô ấy</p>
                  <div className="bride-groom-social text-center">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/meliodas.duylinh"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2">
              <div className="bride-groom-divider">
                <div className="bride-divider-img">
                  <img
                    src="https://linhtrang98.iwedding.info/templates/template5/img/bride-groom-divider-love.png"
                    alt="Love"
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-5">
              <div className="bride-groom-box">
                <div className="bride-groom-photo position-relative">
                  <div className="bride-photo-box position-relative">
                    <img src="/img/IMG_1715.JPG" alt="trang" />
                  </div>
                  <div className="bride-border-box">
                    <span className="bride-groom-border" />
                    <span className="bride-groom-border" />
                    <span className="bride-groom-border" />
                    <span className="bride-groom-border" />
                  </div>
                </div>
                <div className="bride-groom-content text-center">
                  <a href="#bride-groom">
                    <h3>Thảo Trang</h3>
                  </a>
                  <h4>25/05/1998</h4>
                  <p>Mình là vợ anh ấy</p>
                  <div className="bride-groom-social text-center">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/umi.trang.50"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactWOW>
  );
}
