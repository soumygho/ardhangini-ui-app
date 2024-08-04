import React, { useCallback, useContext } from "react";
import { CustomCellRendererProps } from "ag-grid-react";
import { deliveryGridContext } from "../../../context/delivery-address-grid.context";

function EditDeliveryAddressRenderer(props: CustomCellRendererProps) {
  const context = useContext(deliveryGridContext);
  const cb = useCallback(() => {
    context?.editDeliveryAddressFn(props?.data);
  }, []);
  return (
    <div className="pro-remove">
      <button onClick={cb}>
        <i className="fas fa-edit"></i>
      </button>
    </div>
  );
}

export default EditDeliveryAddressRenderer;
