import React, { useContext, useEffect, useRef, useState } from "react";
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
import useWishListApi from "../hooks/api/useWishListApi";
import { rootContext } from "../context/root.context";
import { WishListLineItemDto } from "../services/openapi";
import { WishlistContext, wishListContext } from "../context/wish-list.context";
function WishList() {
  const root = useContext(rootContext);
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<WishListLineItemDto[]>([]);
  const { wishListDetails, getWishListDetails } = useWishListApi();

  useEffect(() => {
    console.trace(root?.userId);
    if (root?.userId) {
      getWishListDetails(root?.userId);
    }
  }, []);

  useEffect(() => {
    setRowData(() =>
      wishListDetails?.lineItems ? wishListDetails?.lineItems : []
    );
  }, [wishListDetails]);

  const contextData: WishlistContext = {
    getAllWishListData: function (userId: string): void {
      getWishListDetails(userId);
    },
  };

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef[] = [
    { field: "productId", hide: true },
    { field: "productTypeId", hide: true },
    { field: "productThumbnail", cellRenderer: ProductThumbnailRenderer },
    { field: "productName", cellRenderer: ProductNameRenderer },
    { field: "finalPricePerItem", cellRenderer: ProductPriceRenderer },
    { field: "availableQuantity", cellRenderer: ProductStockRenderer },
    { field: "AddToCart", cellRenderer: AddToCartRenderer },
    { field: "RemoveFromWishList", cellRenderer: RemoveFromWishListRenderer },
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
    <wishListContext.Provider value={contextData}>
      <main>
        {/*-- breadcrumb area start --*/}

        <div className="breadcrumb-area common-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <h1>wishlist</h1>
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
                        wishlist
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*-- breadcrumb area end --*/}

        {/*-- wishlist main wrapper start --*/}
        <div className="wishlist-main-wrapper pb-0">
          <div className="container">
            {/*-- Wishlist Page Content Start --*/}
            <div className="section-bg-color">
              <div className="row">
                <div className="col-lg-12">
                  {/*-- Wishlist Table Area --*/}
                  <div className="cart-table table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th className="pro-thumbnail">Thumbnail</th>
                          <th className="pro-title">Product</th>
                          <th className="pro-price">Price</th>
                          <th className="pro-quantity">Stock Status</th>
                          <th className="pro-subtotal">Add to Cart</th>
                          <th className="pro-remove">Remove</th>
                        </tr>
                      </thead>
                    </table>
                    {/* Ag-grid here */}
                    <div
                      className="col-12 ag-theme-quartz" // applying the Data Grid theme
                      style={{ height: 500 }} // the Data Grid will fill the size of the parent container
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-- Wishlist Page Content End --*/}
          </div>
        </div>
        {/*-- wishlist main wrapper end --*/}
      </main>
    </wishListContext.Provider>
  );
}

export default WishList;
