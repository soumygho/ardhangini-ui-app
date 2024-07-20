import React from "react";
import FilterSideBar from "./FilterSideBar";
import ProductListHolder from "./productListHolder";

function productList() {
  return (
    <div className="shop-main-wrapper section-space pb-0">
      <div className="container">
      <div className="row"> 
        <FilterSideBar />
        <ProductListHolder></ProductListHolder>
      </div>
      </div>
    </div>
  );
}

export default productList;
