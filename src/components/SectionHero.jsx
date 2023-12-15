import { Parallax } from "react-parallax";

export default function SectionHero() {
  return (
    <Parallax
      bgImage="https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/templates/6174ee5134c46827c45a50e5/90798e0f4aaa2851526cbf16ec11f270.jpg"
      strength={150}
      lazy
    >
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
