import React, { useEffect } from "react";
import ProductDetails from "../components/product/productDetails";
import ProductDetailsTab from "../components/product/ProductDetailsTab";
import RelatedProductSection from "../components/product/RelatedProductSection";
import { useLocation, useNavigate } from "react-router-dom";

function ProductDetailsPage() {
  const params = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`Router params : ${JSON.stringify(params)}`);
    if(!params) navigate("/sarees");
  },[params,navigate]);

  return (
    <>
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
      <RelatedProductSection></RelatedProductSection>
    </>
  );
}

export default ProductDetailsPage;
