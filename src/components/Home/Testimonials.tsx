import React, { useState } from "react";
import testimonialsBg from "../../images/testimonials-bg.jpg";
import TestimonialAuthorCarousel from "./TestimonialAuthorCarousel";
import TestimonialContentCarousel from "./TestimonialContentCarousel";
import Slider from "react-slick";

function Testimonials() {
  let [contentCarouselElement, setContentCarouselElement] =
    useState<Slider | null>(null);
  let [thumbCarouselElement, setThumbCarouselElement] = useState<Slider | null>(
    null
  );
  const storeContentCarouselElement = (element: Slider | null) =>
    setContentCarouselElement(element);
  const storeThumbCarouselElement = (element: Slider | null) =>
    setThumbCarouselElement(element);
  return (
    <section
      className="testimonial-area section-space bg-img"
      style={{ backgroundImage: "url(" + { testimonialsBg } + ")" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2 className="title">testimonials</h2>
              <p className="sub-title">What they say</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TestimonialAuthorCarousel
              sliderRef={contentCarouselElement}
              setThumbCarouselRef={storeThumbCarouselElement}
            />
            <TestimonialContentCarousel
              thumbCarouselref={thumbCarouselElement}
              setContentCarouselRef={storeContentCarouselElement}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
