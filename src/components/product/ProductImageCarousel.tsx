import React, { useRef } from 'react'
import Slider, { Settings } from 'react-slick';
import productImage from "../../images/product-1.jpg";

function ProductImageCarousel() {
    const data = [1,2,3,4,5];
    const mainSliderRef = useRef<Slider | null>(null);
    const thumbnailSliderRef = useRef<Slider | null>(null);

    const thumbnailSliderSettings: Settings = {
        slidesToShow: 3,
        asNavFor: mainSliderRef!.current!,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        focusOnSelect: true,
        
      };
      const mainSliderSettings: Settings = {
        arrows: false,
        asNavFor: mainSliderRef!.current!,
      };
    
  return (
    <>
    <div className="product-large-slider">
        <Slider {...mainSliderSettings} ref={mainSliderRef}>
            {
                data.map((d,index) => (
                    <div className="pro-large-img img-zoom">
                        <img src={productImage} alt="product-details" />
                    </div>
                ))
            }
        </Slider>
    </div>
    <div className="pro-nav slick-row-10 slick-arrow-style">
        <Slider {...thumbnailSliderSettings} ref={thumbnailSliderRef}>
            {
                data.map((d,index) => (
                    <div className="pro-nav-thumb">
                        <img src={productImage} alt="product-details" />
                    </div>
                ))
            }
        </Slider>
    </div>
    </>
  );
}

export default ProductImageCarousel