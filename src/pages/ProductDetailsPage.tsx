import React, { useEffect, useState } from "react";
import ProductDetails from "../components/product/productDetails";
import ProductDetailsTab from "../components/product/ProductDetailsTab";
import RelatedProductSection from "../components/product/RelatedProductSection";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
} from "../services/openapi/api";
import useSareeDetailsApi from "../hooks/api/useSareeApi";

function ProductDetailsPage() {
  const params = useLocation();
  const navigate = useNavigate();
  const { sarees, getRelatedSarees } = useSareeDetailsApi();

  useEffect(() => {
    console.log(`Router params : ${JSON.stringify(params)}`);
    let selectedSaree: ProductSnapshotWithUserDto = params?.state;
    if (params?.state) {
      console.trace(selectedSaree);
      getRelatedSarees(selectedSaree?.productid!);
    }
    if (!params?.state) navigate("/sarees");
  }, [params, navigate, getRelatedSarees]);

  return (
    <>
      <div className="shop-main-wrapper section-space">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 order-1 order-lg-2">
              <ProductDetails productData={params?.state}></ProductDetails>
              <ProductDetailsTab
                productdata={params?.state}
              ></ProductDetailsTab>
            </div>
          </div>
        </div>
      </div>
      <RelatedProductSection products={sarees}></RelatedProductSection>
    </>
  );
}

export default ProductDetailsPage;
