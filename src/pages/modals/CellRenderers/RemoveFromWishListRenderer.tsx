import React, { useCallback, useContext } from "react";
import { headerContext } from "../../../context/header.context";
import { CustomCellRendererProps } from "ag-grid-react";
import { rootContext } from "../../../context/root.context";

function RemoveFromWishListRenderer(props: CustomCellRendererProps) {
  const context = useContext(rootContext);
  const removeFromWishListFn = useCallback(() => {
    context?.removeFromWishList(props?.data?.productId);
  }, []);
  return (
    <div className="pro-remove">
      <button onClick={removeFromWishListFn}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default RemoveFromWishListRenderer;
