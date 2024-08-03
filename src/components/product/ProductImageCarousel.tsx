import { useRef } from "react";
import Slider, { Settings } from "react-slick";
import productImage from "../../images/product-1.jpg";

function ProductImageCarousel() {
  const data = [1, 2, 3, 4, 5];
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);

  const thumbnailSliderSettings: Settings = {
    slidesToShow: 3,
    asNavFor: mainSliderRef!.current!,
    centerMode: true,
    arrows: true,
    centerPadding: "0",
    focusOnSelect: true,
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
  const mainSliderSettings: Settings = {
    arrows: true,
    asNavFor: thumbnailSliderRef!.current!,
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
  };

  return (
    <>
      <div className="product-large-slider">
        <Slider {...mainSliderSettings} ref={mainSliderRef}>
          {data.map((d, index) => (
            <div className="pro-large-img img-zoom">
              <img src={productImage} alt="product-details" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="pro-nav slick-row-10 slick-arrow-style">
        <Slider {...thumbnailSliderSettings} ref={thumbnailSliderRef}>
          {data.map((d, index) => (
            <div className="pro-nav-thumb">
              <img src={productImage} alt="product-details" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default ProductImageCarousel;
