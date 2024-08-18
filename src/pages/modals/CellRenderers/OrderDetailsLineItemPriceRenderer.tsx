import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

function OrderDetailsLineItemPriceRenderer(props: CustomCellRendererProps) {
  const { totalFinalPrice } = props?.data;
  return (
    <div className="pro-price">
      <span>&#x20b9;{totalFinalPrice ? totalFinalPrice : 0}</span>
    </div>
  );
}

export default OrderDetailsLineItemPriceRenderer;
