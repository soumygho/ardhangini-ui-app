import RelatedProductsCarousel from "./RelatedProductsCarousel";
import {
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
} from "../../services/openapi";

function RelatedProductSection({
  products,
}: {
  products: ProductSnapshotDto[] | ProductSnapshotWithUserDto[];
}) {
  return (
    <section className="related-products">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>Related Products</h2>
              <p>
                Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque
                libero
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product-carousel--4 slick-row-15 slick-sm-row-10 slick-arrow-style">
              {/*Related products carousel component*/}
              <RelatedProductsCarousel
                products={products}
              ></RelatedProductsCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RelatedProductSection;
