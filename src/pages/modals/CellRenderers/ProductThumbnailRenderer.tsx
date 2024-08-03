import { CustomCellRendererProps } from "ag-grid-react";
import React from "react";

function ProductThumbnailRenderer(props: CustomCellRendererProps) {
  return (
    <div className="pro-thumbnail">
      <a href="#">
        <img className="img-fluid" src={props?.value} alt="Product" style={{height: '140px'}}/>
      </a>
    </div>
  );
}

export default ProductThumbnailRenderer;
