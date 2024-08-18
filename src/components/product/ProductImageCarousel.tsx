import { lazy, useRef } from "react";
import Slider, { Settings } from "react-slick";
import productImage from "../../images/product-1.jpg";
import {
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
} from "../../services/openapi";
interface ProductCardProps {
  productData: ProductSnapshotDto | ProductSnapshotWithUserDto;
}
function ProductImageCarousel({ productData }: ProductCardProps) {
  const data = [1, 2, 3];
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbnailSliderRef = useRef<Slider | null>(null);

  const thumbnailSliderSettings: Settings = {
    lazyLoad: "ondemand",
    fade: true,
    infinite: true,
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
          slidesToShow: 1,
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
        {productData?.productDetails?.sareeImages &&
          productData?.productDetails?.sareeImages.length > 0 && (
            <Slider {...mainSliderSettings} ref={mainSliderRef}>
              {productData?.productDetails?.sareeImages.length < 2 &&
                data.map((d, index) => (
                  <div
                    className="pro-large-img img-zoom"
                    data-index={index}
                    key={index}
                  >
                    <img
                      src={productData?.productDetails?.sareeImages[0]}
                      alt="product-details"
                    />
                  </div>
                ))}
              {productData?.productDetails?.sareeImages.length > 1 &&
                productData?.productDetails?.sareeImages.map((d, index) => (
                  <div
                    className="pro-large-img img-zoom"
                    data-index={index}
                    key={index}
                  >
                    <img src={d} alt="product-details" />
                  </div>
                ))}
            </Slider>
          )}
        {/*If no images configured*/}
        {productData?.productDetails?.sareeImages &&
          productData?.productDetails?.sareeImages.length === 0 && (
            <Slider {...mainSliderSettings} ref={mainSliderRef}>
              {data.map((d, index) => (
                <div
                  className="pro-large-img img-zoom"
                  data-index={index}
                  key={index}
                >
                  <img src={productImage} alt="product-details" />
                </div>
              ))}
            </Slider>
          )}
      </div>
      <div className="pro-nav slick-row-10 slick-arrow-style">
        {productData?.productDetails?.sareeImages &&
          productData?.productDetails?.sareeImages.length > 0 && (
            <Slider {...thumbnailSliderSettings} ref={thumbnailSliderRef}>
              {productData?.productDetails?.sareeImages.length < 2 &&
                data.map((d, index) => (
                  <div className="pro-nav-thumb" data-index={index} key={index}>
                    <img
                      src={productData?.productDetails?.sareeImages[0]}
                      alt="product-details"
                    />
                  </div>
                ))}
              {productData?.productDetails?.sareeImages.length > 1 &&
                productData?.productDetails?.sareeImages.map((d, index) => (
                  <div className="pro-nav-thumb" data-index={index} key={index}>
                    <img src={d} alt="product-details" />
                  </div>
                ))}
            </Slider>
          )}
        {/*If no images configured*/}
        {productData?.productDetails?.sareeImages &&
          productData?.productDetails?.sareeImages.length === 0 && (
            <Slider {...mainSliderSettings} ref={mainSliderRef}>
              {data.map((d, index) => (
                <div className="pro-nav-thumb" data-index={index} key={index}>
                  <img src={productImage} alt="product-details" />
                </div>
              ))}
            </Slider>
          )}
      </div>
    </>
  );
}

export default ProductImageCarousel;
