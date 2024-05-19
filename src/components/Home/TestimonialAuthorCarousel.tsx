import Slider, { Settings } from "react-slick";
import testimonial1 from "../../images/testimonial-1.png";
import testimonial2 from "../../images/testimonial-2.png";
import testimonial3 from "../../images/testimonial-3.png";
import { useEffect, useRef } from "react";
interface TestimonialAuthorCarouselProps {
  setThumbCarouselRef: (element: Slider | null) => void;
  sliderRef: Slider | null;
}
function TestimonialAuthorCarousel({
  sliderRef,
  setThumbCarouselRef,
}: TestimonialAuthorCarouselProps) {
  const settings: Settings = {
    slidesToShow: 3,
    asNavFor: sliderRef!,
    centerMode: true,
    arrows: false,
    centerPadding: "0",
    focusOnSelect: true,
  };
  const authorCarouselRef = useRef<Slider>(null);
  useEffect(() => {
    setThumbCarouselRef(authorCarouselRef.current);
  }, [authorCarouselRef, setThumbCarouselRef]);
  return (
    <div className="testimonial-thumb-wrapper">
      <div className="testimonial-thumb-carousel">
        <Slider {...settings} ref={authorCarouselRef}>
          <div className="testimonial-thumb">
            <img src={testimonial1} alt="testimonial-thumb" />
          </div>
          <div className="testimonial-thumb">
            <img src={testimonial2} alt="testimonial-thumb" />
          </div>
          <div className="testimonial-thumb">
            <img src={testimonial3} alt="testimonial-thumb" />
          </div>
          <div className="testimonial-thumb">
            <img src={testimonial1} alt="testimonial-thumb" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialAuthorCarousel;
