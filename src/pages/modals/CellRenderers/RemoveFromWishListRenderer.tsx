import React, { useCallback, useContext } from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { rootContext } from "../../../context/root.context";
import { wishListContext } from "../../../context/wish-list.context";

function RemoveFromWishListRenderer(props: CustomCellRendererProps) {
  const root = useContext(rootContext);
  const context = useContext(wishListContext);
  const removeFromWishListFn = useCallback(() => {
    root?.removeFromWishList(
      props?.data?.productId,
      props?.data?.productTypeId
    );
    if (root?.userId) {
      context?.getAllWishListData(root.userId);
    }
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
