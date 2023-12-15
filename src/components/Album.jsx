import Masonry from "./Masonry";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useState } from "react";

const images2 = import.meta.glob(`/public/img/album_mini` + "/*");
const imageList = Object.entries(images2).map(([path]) => {
  return {
    src: path,
  };
});

export default function Album() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="our-gallery-area" id="gallery">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h2 className="section-heading">Album Hình Cưới</h2>
            <img
              className="heading-divider"
              src="https://linhtrang98.iwedding.info/templates/template5/img/divider.png"
              alt="divider"
            />
            <h3 className="section-subheading mb-2">
              Tôi có thể chinh phục thế giới bằng một tay miễn là bạn đang nắm
              tay kia.
            </h3>
          </div>
        </div>

        <Masonry columnCount={3} columnGap={15} columnWidth={200}>
          {imageList.map((item, index) => (
            <div
              key={item.src + index.toString()}
              className="gallery-box position-relative hover-wrapper"
            >
              <figure className="story-photo-box position-relative">
                <img
                  src={item.src}
                  loading="lazy"
                  alt="gallery"
                  className="img-fluid w-100 d-block"
                />
                <figcaption>
                  <div
                    className="btn btn-sm venobox"
                    onClick={() => {
                      setIndex(index);
                    }}
                  >
                    <i className="flaticon-plus-symbol" />
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Masonry>
      </div>
      <Lightbox
        slides={imageList}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </section>
  );
}
