import { CustomCellRendererProps } from "ag-grid-react";
import React, { useContext } from "react";
import { rootContext } from "../../../context/root.context";

function AddToCartRenderer(props: CustomCellRendererProps) {
  const context = useContext(rootContext);
  return (
    <div className="pro-subtotal">
      <button type="button" className="btn btn-success" onClick={context?.handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default AddToCartRenderer;
