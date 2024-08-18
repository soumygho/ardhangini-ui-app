import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridReact } from "ag-grid-react";
import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import ProductThumbnailRenderer from "./modals/CellRenderers/ProductThumbnailRenderer";
import ProductNameRenderer from "./modals/CellRenderers/ProductNameRenderer";
import ProductPriceRenderer from "./modals/CellRenderers/ProductPriceRenderer";
import RemoveFromCartRenderer from "./modals/CellRenderers/RemoveFromCartRenderer";
import { rootContext } from "../context/root.context";
import { headerContext } from "../context/header.context";
import CartTotalPriceRenderer from "./modals/CellRenderers/CartTotalPriceRenderer";
import {
  CartLineItemDto,
  CartLineItemResponse,
  CartUpdateDto,
} from "../services/openapi";
import useCartApi from "../hooks/api/useCartApi";
import {
  CartDetailsContext,
  cartDetailsContext,
} from "../context/cart-details.context";

interface CartDetailsPageProps {
  isOrderDetails: boolean;
}
function CartDetailsPage({ isOrderDetails }: CartDetailsPageProps) {
  const root = useContext(rootContext);
  const context = useContext(headerContext);
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<CartLineItemResponse[]>([]);
  const { cartDetails, getCartDetails, addToCart } = useCartApi();

  const updateCart = useCallback(async () => {
    if (root?.userId) {
      const data: CartLineItemDto[] = [];
      gridRef?.current?.api?.forEachNode((node) => {
        const lineItem: CartLineItemDto = {
          productId: node.data.productId,
          typeId: node.data.productTypeId,
          quantity: node.data.quantity,
        };
        data.push(lineItem);
      });
      console.trace(data);
      const cartUpdateDto: CartUpdateDto = {
        userId: root.userId,
        lineItems: data,
      };
      await addToCart(cartUpdateDto);
    }
  }, []);

  useEffect(() => {
    context?.setCartDetails(() => cartDetails);
  }, [cartDetails]);

  useEffect(() => {
    console.trace(root?.userId);
    if (root?.userId) {
      getCartDetails(root?.userId);
    }
  }, []);

  useEffect(() => {
    if (cartDetails?.cartLineItems) {
      setRowData(cartDetails?.cartLineItems);
    }
  }, [cartDetails]);

  // Column Definitions: Defines the columns to be displayed.
  let colDefs: ColDef[] = [
    { field: "productId", hide: true },
    { field: "productTypeId", hide: true },
    { field: "productThumbnail", cellRenderer: ProductThumbnailRenderer },
    { field: "productName", cellRenderer: ProductNameRenderer },
  ];
  if (!isOrderDetails) {
    colDefs.push({
      field: "finalPricePerItem",
      cellRenderer: ProductPriceRenderer,
    });
  }
  colDefs = [
    ...colDefs,
    { field: "quantity", type: "number", editable: !isOrderDetails },
    { field: "finalTotalPrice", cellRenderer: CartTotalPriceRenderer },
  ];
  if (!isOrderDetails) {
    colDefs.push({
      field: "RemoveFromCart",
      cellRenderer: RemoveFromCartRenderer,
    });
  }
  const [totalFinalPrice, setTotalFinalPrice] = useState<number>(0);
  const [totalShippingCharge, setTotalShippingCharge] = useState<number>(0);

  const defaultColDef = {
    flex: 1,
  };
  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 140,
    //columnLimits: [],
  };

  const contextData: CartDetailsContext = {
    getAllCartDetailsData: function (userId: string): void {
      getCartDetails(userId);
    },
  };

  const onSelectionChanged = () => {};

  useEffect(() => {
    let totalCartvalue = 0;
    console.log("calculate cart value");
    console.trace(rowData);
    rowData?.forEach((row) => {
      totalCartvalue += row?.finalTotalPrice;
    });
    setTotalFinalPrice(totalCartvalue);
  }, [rowData]);

  const onCellValueChanged = useCallback((e: any) => {
    console.log(e);
    const rowNode = e?.node;
    const data = e?.data;
    data.finalTotalPrice = data?.finalPricePerItem * data?.quantity;
    rowNode.setData(data);
    //calculate total subtotal for the whole cart
    let totalCartvalue = 0;
    const datas: any[] = [];
    gridRef?.current?.api?.forEachNode((node) => {
      datas.push(node?.data);
      totalCartvalue += node?.data?.finalTotalPrice;
    });
    setRowData(() => datas);
    setTotalFinalPrice(() => totalCartvalue);
  }, []);

  return (
    <cartDetailsContext.Provider value={contextData}>
      <main>
        {/*-- breadcrumb area start --*/}
        {!isOrderDetails && (
          <div className="breadcrumb-area">
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
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          Cart
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*-- breadcrumb area end --*/}
        <div className="cart-main-wrapper pb-0">
          <div className="container">
            <div className="section-bg-color">
              <div className="row">
                <div className={!isOrderDetails ? "col-lg-12" : "col-lg-8"}>
                  {/*-- Cart Table Area --*/}
                  <div className="cart-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Thumbnail</th>
                          <th className="pro-title">Product</th>
                          {!isOrderDetails && (
                            <th className="pro-price">Price</th>
                          )}
                          <th className="pro-quantity">Quantity</th>
                          <th className="pro-subtotal">Total</th>
                          {!isOrderDetails && (
                            <th className="pro-remove">Remove</th>
                          )}
                        </tr>
                      </thead>
                      {/*--ag grid here */}
                    </table>
                    {/* Ag-grid here */}
                    <div
                      className="col-12 ag-theme-quartz" // applying the Data Grid theme
                      style={{ height: isOrderDetails ? 300 : 500 }} // the Data Grid will fill the size of the parent container
                    >
                      <AgGridReact
                        rowHeight={150}
                        autoSizeStrategy={autoSizeStrategy}
                        ref={gridRef}
                        headerHeight={0}
                        rowData={rowData}
                        columnDefs={colDefs}
                        defaultColDef={defaultColDef}
                        rowSelection="single"
                        onSelectionChanged={onSelectionChanged}
                        onCellValueChanged={onCellValueChanged}
                      />
                    </div>
                  </div>
                  {/*-- Cart Update Option --*/}
                  {!isOrderDetails && (
                    <div className="cart-update-option d-block d-md-flex justify-content-between">
                      {/*
                  <div className="apply-coupon-wrapper">
                    <form
                      action="#"
                      method="post"
                      className=" d-block d-md-flex"
                    >
                      <input type="text" placeholder="Enter Your Coupon Code" />
                      <button className="btn btn__bg btn__sqr">
                        Apply Coupon
                      </button>
                    </form>
                  </div> */}

                      <div className="cart-update">
                        <a className="btn btn__bg" onClick={updateCart}>
                          Update Cart
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                {isOrderDetails && (
                  <div className="col-lg-4 ml-auto">
                    {/*-- Cart Calculation Area --*/}
                    <div className="cart-calculator-wrapper">
                      <div className="cart-calculate-items">
                        <h3>Cart Totals</h3>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Sub Total</td>
                                <td>&#x20b9;{totalFinalPrice}</td>
                              </tr>
                              <tr>
                                <td>Shipping</td>
                                <td>&#x20b9;{totalShippingCharge}</td>
                              </tr>
                              <tr className="total">
                                <td>Total</td>
                                <td className="total-amount">
                                  &#x20b9;
                                  {totalFinalPrice + totalShippingCharge}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {!isOrderDetails && (
                <div className="row">
                  <div className="col-lg-5 ml-auto">
                    {/*-- Cart Calculation Area --*/}
                    <div className="cart-calculator-wrapper">
                      <div className="cart-calculate-items">
                        <h3>Cart Totals</h3>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Sub Total</td>
                                <td>&#x20b9;{totalFinalPrice}</td>
                              </tr>
                              <tr>
                                <td>Shipping</td>
                                <td>&#x20b9;{totalShippingCharge}</td>
                              </tr>
                              <tr className="total">
                                <td>Total</td>
                                <td className="total-amount">
                                  &#x20b9;
                                  {totalFinalPrice + totalShippingCharge}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <a
                        className="btn btn__bg d-block"
                        onClick={context?.handleCartProceed}
                      >
                        Proceed To Delivery Address Selection
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/*-- cart main wrapper end --*/}
      </main>
    </cartDetailsContext.Provider>
  );
}

export default CartDetailsPage;
