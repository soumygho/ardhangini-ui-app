import Slider, { Settings } from "react-slick";
import ProductCard from "./ProductCard";
import { ProductSnapshotDto } from "../../services/openapi";
import { ProductSnapshotWithUserDto } from "../../services/openapi/api";
interface RelatedProductsCarouselProps {
  products: ProductSnapshotDto[] | ProductSnapshotWithUserDto[];
}
function RelatedProductsCarousel({ products }: RelatedProductsCarouselProps) {
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
      {products?.map((product, index) => (
        <ProductCard productData={product} key={index}></ProductCard>
      ))}
    </Slider>
  );
}

export default RelatedProductsCarousel;
