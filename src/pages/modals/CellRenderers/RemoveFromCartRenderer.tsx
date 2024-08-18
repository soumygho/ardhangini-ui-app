import { CustomCellRendererProps } from "ag-grid-react";
import React, { useCallback, useContext } from "react";
import { rootContext } from "../../../context/root.context";
import { cartDetailsContext } from "../../../context/cart-details.context";

function RemoveFromCartRenderer(props: CustomCellRendererProps) {
  const root = useContext(rootContext);
  const context = useContext(cartDetailsContext);

  const removeFromCartFn = useCallback(() => {
    root?.removeFromCart(props?.data?.productId, props?.data?.productTypeId);
    if (root?.userId) {
      context?.getAllCartDetailsData(root?.userId);
    }
  }, []);

  return (
    <div className="pro-remove">
      <button onClick={removeFromCartFn}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default RemoveFromCartRenderer;
