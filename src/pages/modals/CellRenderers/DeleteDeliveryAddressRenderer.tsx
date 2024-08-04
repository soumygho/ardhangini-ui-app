import React, { useCallback, useContext } from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { deliveryGridContext } from "../../../context/delivery-address-grid.context";

function DelteDeliveryAddressRenderer(props: CustomCellRendererProps) {
  const context = useContext(deliveryGridContext);
  const removeFromDeliveryAddressListFn = useCallback(() => {
    context?.deleteDeliveryAddressFn(props?.data);
  }, []);
  return (
    <div className="pro-remove">
      <button onClick={removeFromDeliveryAddressListFn}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default DelteDeliveryAddressRenderer;
