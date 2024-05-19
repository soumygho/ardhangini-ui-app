import { useEffect, useRef } from "react";
import TestimonialContent from "./TestimonialContent";
import Slider, { Settings } from "react-slick";
interface TestimonialContentCarouselProps {
  setContentCarouselRef: (element: Slider | null) => void;
  thumbCarouselref: Slider | null;
}
function TestimonialContentCarousel({
  setContentCarouselRef,
  thumbCarouselref,
}: TestimonialContentCarouselProps) {
  const carouselContent = [{}, {}, {}, {}];
  const contentCarouselRef = useRef<Slider>(null);
  const carouselSettings: Settings = {
    arrows: false,
    asNavFor: thumbCarouselref!,
  };
  useEffect(() => {
    setContentCarouselRef(contentCarouselRef.current);
  }, [contentCarouselRef, setContentCarouselRef]);
  return (
    <div className="testimonial-content-wrapper">
      <div className="testimonial-content-carousel">
        <Slider ref={contentCarouselRef} {...carouselSettings}>
          {carouselContent.map((content, index) => (
            <TestimonialContent />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialContentCarousel;
