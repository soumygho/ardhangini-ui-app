import { CustomCellRendererProps } from "ag-grid-react";
import React, { useCallback, useContext } from "react";
import { rootContext } from "../../../context/root.context";

function AddToCartRenderer(props: CustomCellRendererProps) {
  const context = useContext(rootContext);
  const addToCartFn = useCallback(() => {
    context?.handleAddToCart(props?.data?.productId);
  }, []);
  return (
    <div className="pro-subtotal">
      <button type="button" className="btn btn-success" onClick={addToCartFn}>
        Add to Cart
      </button>
    </div>
  );
}

export default AddToCartRenderer;
