import React, { useContext, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import { wishListMock } from "../mock/product.mock";
import ProductThumbnailRenderer from "./modals/CellRenderers/ProductThumbnailRenderer";
import ProductNameRenderer from "./modals/CellRenderers/ProductNameRenderer";
import ProductPriceRenderer from "./modals/CellRenderers/ProductPriceRenderer";
import ProductStockRenderer from "./modals/CellRenderers/ProductStockRenderer";
import AddToCartRenderer from "./modals/CellRenderers/AddToCartRenderer";
import RemoveFromWishListRenderer from "./modals/CellRenderers/RemoveFromWishListRenderer";
import RemoveFromCartRenderer from "./modals/CellRenderers/RemoveFromCartRenderer";
import { rootContext } from "../context/root.context";
import { headerContext } from "../context/header.context";


function CartDetailsPage() {
  const root = useContext(rootContext);
  const context = useContext(headerContext);
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<any[]>(wishListMock);
  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef[] = [
    { field: "productId", hide: true },
    { field: "productTypeId", hide: true },
    { field: "productThumbnail", cellRenderer: ProductThumbnailRenderer },
    { field: "productName", cellRenderer: ProductNameRenderer },
    { field: "finalPricePerItem", cellRenderer: ProductPriceRenderer },
    { field: "quantity", cellRenderer: ProductStockRenderer },
    { field: "finalTotalPrice", cellRenderer: ProductPriceRenderer },
    { field: "RemoveFromCart", cellRenderer: RemoveFromCartRenderer },
  ];
  const defaultColDef = {
    flex: 1,
  };
  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 140,
    //columnLimits: [],
  };

  const onSelectionChanged = () => {};

  return (
    <main>
      {/*-- breadcrumb area start --*/}
      <div className="breadcrumb-area common-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <h1>Cart</h1>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa fa-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Cart
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-- breadcrumb area end --*/}
      <div className="cart-main-wrapper pb-0">
            <div className="container">
                <div className="section-bg-color">
                    <div className="row">
                        <div className="col-lg-12">
                            {/*-- Cart Table Area --*/}
                            <div className="cart-table table-responsive">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th className="pro-thumbnail">Thumbnail</th>
                                            <th className="pro-title">Product</th>
                                            <th className="pro-price">Price</th>
                                            <th className="pro-quantity">Quantity</th>
                                            <th className="pro-subtotal">Total</th>
                                            <th className="pro-remove">Remove</th>
                                        </tr>
                                    </thead>
                                    {/*--ag grid here */}
                                </table>
                            </div>
                            {/*-- Cart Update Option --*/}
                            <div className="cart-update-option d-block d-md-flex justify-content-between">
                                <div className="apply-coupon-wrapper">
                                    <form action="#" method="post" className=" d-block d-md-flex">
                                        <input type="text" placeholder="Enter Your Coupon Code" />
                                        <button className="btn btn__bg btn__sqr">Apply Coupon</button>
                                    </form>
                                </div>
                                <div className="cart-update">
                                    <a href="#" className="btn btn__bg">Update Cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 ml-auto">
                            {/*-- Cart Calculation Area --*/}
                            <div className="cart-calculator-wrapper">
                                <div className="cart-calculate-items">
                                    <h3>Cart Totals</h3>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody><tr>
                                                <td>Sub Total</td>
                                                <td>$230</td>
                                            </tr>
                                            <tr>
                                                <td>Shipping</td>
                                                <td>$70</td>
                                            </tr>
                                            <tr className="total">
                                                <td>Total</td>
                                                <td className="total-amount">$300</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                </div>
                                <a className="btn btn__bg d-block" onClick={context?.handleCartProceed}>Proceed To Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*-- cart main wrapper end --*/}
    </main>
  );
}

export default CartDetailsPage;
