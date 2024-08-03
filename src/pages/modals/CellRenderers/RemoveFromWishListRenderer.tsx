import React, { useContext } from "react";
import { headerContext } from "../../../context/header.context";
import { CustomCellRendererProps } from "ag-grid-react";
import { rootContext } from "../../../context/root.context";

function RemoveFromWishListRenderer(props: CustomCellRendererProps) {
  const context = useContext(rootContext);
  return (
    <div className="pro-remove">
      <button onClick={context?.removeFromWishList}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default RemoveFromWishListRenderer;
