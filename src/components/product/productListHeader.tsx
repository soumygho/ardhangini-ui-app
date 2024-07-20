import React from 'react'

function productListHeader() {
  return (
                            <div className="shop-top-bar">
                                <div className="row align-items-center">
                                    <div className="col-lg-7 col-md-6 order-2 order-md-1">
                                        <div className="top-bar-left">
                                            <div className="product-amount">
                                                <p>Showing 1–5 of 8 results</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-md-6 order-1 order-md-2">
                                        <div className="top-bar-right">
                                            <div className="product-short">
                                                <p>Sort By : </p>
                                                <select className="nice-select" name="sortby">
                                                    <option value="trending">Relevance</option>
                                                    <option value="sales">Name (A - Z)</option>
                                                    <option value="sales">Name (Z - A)</option>
                                                    <option value="rating">Price (Low &gt; High)</option>
                                                    <option value="date">Rating (Lowest)</option>
                                                    <option value="price-asc">Model (A - Z)</option>
                                                    <option value="price-asc">Model (Z - A)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
  );
}

export default productListHeader;