import React, { useContext } from "react";
import ProductListHeader from "./productListHeader";
import ProductCardForList from "./ProductCardForList";
import {
  productListContext,
  ProductListContext,
} from "../../context/product-list.context";

function productListHolder() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const context = useContext(productListContext);
  return (
    <div className="col-lg-9 order-1 order-lg-2">
      <div className="shop-product-wrapper">
        <ProductListHeader></ProductListHeader>
        <div className="shop-product-wrap row mbn-40 grid-view">
          {context?.productList?.map((value, index) => (
            <ProductCardForList
              productData={value}
              key={index}
            ></ProductCardForList>
          ))}
        </div>
      </div>
    </div>
  );
}

export default productListHolder;
