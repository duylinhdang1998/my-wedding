import { Parallax } from "react-parallax";

export default function SectionHero() {
  return (
    <Parallax bgImage="img/LVT06298.jpg" strength={150} lazy>
      <section className="section-bg my-hero">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <h4 className="text-center">
                <span>
                  ...Tình yêu không phải là nhìn chằm chằm vào nhau, mà là nhìn
                  chằm chằm về cùng một hướng...
                </span>
              </h4>
              <h2 className="text-center mt-3">--Forever one love--</h2>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
}
