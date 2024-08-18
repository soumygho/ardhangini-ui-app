import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

function CartTotalPriceRenderer(props: CustomCellRendererProps) {
  const {quantity, finalPricePerItem } = props?.data;
  return (
    <div className="pro-price">
      <span>&#x20b9;{quantity && finalPricePerItem ? quantity * finalPricePerItem : 0}</span>
    </div>
  );
}

export default CartTotalPriceRenderer;
