import React, { useCallback, useEffect, useRef, useState } from "react";
import { OrderResponse } from "../../services/openapi";
import { AgGridReact } from "ag-grid-react";
import {
  OrderListContext,
  orderListContext,
} from "../../context/order-details.context";
import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import ViewOrderCellRenderer from "../modals/CellRenderers/ViewOrderCellRenderer";
import OrderDetailsModal from "../modals/OrderDetailsModal";
interface OrderListGridProps {
  rows?: OrderResponse[];
}
function OrderListGrid({ rows }: OrderListGridProps) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<OrderResponse[] | undefined>(rows);
  const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState<OrderResponse | undefined>(
    undefined
  );

  const viewOrderDetails = useCallback((rowData: OrderResponse) => {
    console.trace("viewOrderDetails");
    console.trace(rowData);
    setOrderDetails(() => rowData);
    setShowOrderDetailsModal(() => true);
  }, []);

  const contextData: OrderListContext = {
    viewOrderFn: viewOrderDetails,
  };
  useEffect(() => {
    setRowData(rows);
  }, [rows]);

  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef[] = [
    { field: "orderId" },
    {
      headerName: "Order Date",
      valueGetter: (p) => {
        const orderDetails = p?.data as OrderResponse;
        return orderDetails?.orderTimeLine &&
          orderDetails?.orderTimeLine.length > 0
          ? orderDetails?.orderTimeLine[0]?.eventDate
          : "";
      },
    },
    { field: "orderType" },
    { field: "OrderStatus" },
    { field: "View Order Details", cellRenderer: ViewOrderCellRenderer },
  ];
  const defaultColDef = {
    flex: 1,
  };
  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 140,
    //columnLimits: [],
  };

  const closeModal = () => {
    setShowOrderDetailsModal(() => false);
  };

  return (
    <>
      {/* Ag-grid here */}
      <orderListContext.Provider value={contextData}>
        <div
          className="col-12 ag-theme-quartz" // applying the Data Grid theme
          style={{ height: 200 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
          />
        </div>
      </orderListContext.Provider>
      <OrderDetailsModal
        handleCloseModal={closeModal}
        orderDetails={orderDetails}
        showModal={showOrderDetailsModal}
      ></OrderDetailsModal>
    </>
  );
}

export default OrderListGrid;
