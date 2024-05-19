import Blog from "./Blog";
import Slider, { Settings } from "react-slick";

function Blogs() {
  const sliderSettings: Settings = {
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: true,
    prevArrow: (
      <button type="button" className="slick-prev">
        <i className="fa-solid fa-angle-left"></i>
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <i className="fa-solid fa-angle-right"></i>
      </button>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  const blogList = [{}, {}, {}, {}];
  return (
    <>
      <section className="latest-news section-space">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>latest blog</h2>
                <p>
                  Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque
                  libero
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="latest-blog-carousel slick-arrow-style slick-row-15">
                <Slider {...sliderSettings}>
                  {blogList.map((blog, index) => (
                    <Blog key={index}></Blog>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blogs;
