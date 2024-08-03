import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

function ProductNameRenderer(props: CustomCellRendererProps) {
  return (
    <div className="pro-title">
      {props?.value}
    </div>
  );
}

export default ProductNameRenderer;
