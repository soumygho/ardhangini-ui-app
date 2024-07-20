import React from "react";
import ProductDetails from "../components/product/productDetails";
import ProductDetailsTab from "../components/product/ProductDetailsTab";

function ProductDetailsPage() {
  return (
    <div className="shop-main-wrapper section-space">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 order-1 order-lg-2">
            <ProductDetails></ProductDetails>
            <ProductDetailsTab></ProductDetailsTab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
