import { CustomCellRendererProps } from "ag-grid-react";
import React, { useCallback, useContext } from "react";
import { rootContext } from "../../../context/root.context";

function RemoveFromCartRenderer(props: CustomCellRendererProps) {
  const context = useContext(rootContext);

  const removeFromCartFn = useCallback(() => {
    context?.removeFromCart(props?.data?.productId);
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
