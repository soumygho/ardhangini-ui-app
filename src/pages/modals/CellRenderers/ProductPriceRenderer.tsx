import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

function ProductPriceRenderer(props: CustomCellRendererProps) {
  return (
    <div className="pro-price">
      <span>&#x20b9;{props?.value}</span>
    </div>
  );
}

export default ProductPriceRenderer;
