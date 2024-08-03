import React from "react";
import Slider, { Settings } from "react-slick";
import ProductCard from "./ProductCard";

function RelatedProductsCarousel() {
  const data = [1, 2, 3, 4, 5];
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
  return (
    <Slider {...sliderSettings}>
      {data.map((product, index) => (
        <ProductCard key={index}></ProductCard>
      ))}
    </Slider>
  );
}

export default RelatedProductsCarousel;
