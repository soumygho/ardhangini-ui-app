import React, { useCallback, useContext } from "react";
import { orderListContext } from "../../../context/order-details.context";
import { CustomCellRendererProps } from "ag-grid-react";

function ViewOrderCellRenderer(props: CustomCellRendererProps) {
  const context = useContext(orderListContext);
  const viewOrderDetailsFn = useCallback(() => {
    context?.viewOrderFn(props?.data);
  }, []);
  return (
    <div>
      <button onClick={viewOrderDetailsFn}>
        <i className="fa fa-eye" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default ViewOrderCellRenderer;
