import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Fancybox from "./FancyBox";

const images = [
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/657721767dd78abd0a003826/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/657721767dd78abd0a003826/large.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/657721409543de007109cde8/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/657721475c9a1251b1076671/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/6577214ba6c36b38ef04a643/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/6577214e960b5b6d8107c12d/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/6577215511af9fd23e05140e/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/657721598381245fbe006210/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/6577215c9543de007109cde9/small.jpg",
  "https://cdn.biihappy.com/ziiweb/website/6566150839522b8984075372/galleries/65772152e45cff73fb012a0f/small.jpg",
];
export default function Album() {
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
        <Fancybox
          options={{
            Carousel: {
              infinite: false,
            },
          }}
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            style={{ marginTop: 20 }}
          >
            <Masonry gutter="20px">
              {images.map((item) => (
                <div
                  key={item}
                  className="gallery-box position-relative hover-wrapper"
                >
                  <figure className="story-photo-box position-relative">
                    <img
                      src={item}
                      alt="gallery"
                      className="img-fluid w-100 d-block"
                    />
                    <figcaption>
                      <a
                        className="btn btn-sm venobox"
                        data-fancybox="gallery"
                        href={item}
                      >
                        <i className="flaticon-plus-symbol" />
                      </a>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Fancybox>
      </div>
    </section>
  );
}
