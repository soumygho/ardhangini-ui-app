import React from 'react'
import ProductListHeader from './productListHeader';
import ProductCardForList from './ProductCardForList';

function productListHolder() { 
    const products = [1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <div className="col-lg-9 order-1 order-lg-2">
        <div className="shop-product-wrapper">
            <ProductListHeader></ProductListHeader>
            <div className="shop-product-wrap row mbn-40 grid-view">
            {
                products.map((index) => <ProductCardForList key={index}></ProductCardForList>)
            }
            </div>
        </div>
    </div>
  )
}

export default productListHolder