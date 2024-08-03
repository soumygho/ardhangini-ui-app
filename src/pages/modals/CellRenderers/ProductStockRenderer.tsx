import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

function ProductStockRenderer(props: CustomCellRendererProps) {
  return (
    <div className="pro-quantity">
      {props?.value > 0 ? (
        <span className="text-success">In Stock</span>
      ) : (
        <span className="text-danger">Stock Out</span>
      )}
    </div>
  );
}

export default ProductStockRenderer;
