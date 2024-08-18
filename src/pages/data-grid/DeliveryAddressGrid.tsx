import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import {
  deliveryGridContext,
  DeliveryGridContext,
} from "../../context/delivery-address-grid.context";
import { DeliveryAddressEntity } from "../../services/openapi";
import EditDeliveryAddressRenderer from "../modals/CellRenderers/EditDeliveryAddressRenderer";
import DeleteDeliveryAddressRenderer from "../modals/CellRenderers/DeleteDeliveryAddressRenderer";
interface DeliveryAddressGridProps {
  rows: DeliveryAddressEntity[];
  showAction: boolean;
  selectGridFn?: ((selectedRow: DeliveryAddressEntity) => void) | undefined;
  deleteCallBack?: ((addressId: string) => void) | undefined;
  editCallBack?: ((row: DeliveryAddressEntity) => void) | undefined;
}
function DeliveryAddressGrid({
  rows,
  showAction,
  selectGridFn,
  deleteCallBack,
  editCallBack,
}: DeliveryAddressGridProps) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<DeliveryAddressEntity[]>(rows);
  const [selectedRow, setSelectedRow] = useState<any>();

  useEffect(() => {
    setRowData(rows);
  }, [rows]);

  const editDeliveryAddress = useCallback((rowData: DeliveryAddressEntity) => {
    console.trace("edit delivery address");
    console.trace(rowData);
    if (editCallBack && rowData) {
      editCallBack(rowData);
    }
  }, []);
  const deleteDeliveryAddress = useCallback(
    (rowData: DeliveryAddressEntity) => {
      console.trace("delete delivery address");
      console.trace(rowData);
      if (deleteCallBack && rowData?.id) {
        deleteCallBack(rowData.id);
      }
    },
    []
  );

  const contextData: DeliveryGridContext = {
    editDeliveryAddressFn: editDeliveryAddress,
    deleteDeliveryAddressFn: deleteDeliveryAddress,
  };
  // Column Definitions: Defines the columns to be displayed.
  const colDefs: ColDef[] = [
    { field: "id", hide: true },
    { field: "userid", hide: true },
    { field: "addressLine1", checkboxSelection: true },
    { field: "addressLine2" },
    { field: "pin" },
    { field: "state" },
    { field: "nickname" },
  ];
  if (showAction) {
    colDefs.push({
      field: "Edit",
      cellRenderer: EditDeliveryAddressRenderer,
    });
    colDefs.push({
      field: "Remove",
      cellRenderer: DeleteDeliveryAddressRenderer,
    });
  }

  const defaultColDef = {
    flex: 1,
  };
  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 140,
    //columnLimits: [],
  };

  const onSelectionChanged = () => {
    const selectedRows = gridRef.current!.api.getSelectedRows();
    console.log(selectedRows);
    selectedRows?.length > 0
      ? setSelectedRow(() => selectedRows[0])
      : setSelectedRow(undefined);
    if (selectGridFn) {
      selectGridFn(selectedRows[0]);
    }
  };

  return (
    <>
      {/* Ag-grid here */}
      <deliveryGridContext.Provider value={contextData}>
        <div
          className="col-12 ag-theme-quartz" // applying the Data Grid theme
          style={{ height: 200 }} // the Data Grid will fill the size of the parent container
        >
          <AgGridReact
            ref={gridRef}
            rowData={rowData}
            columnDefs={colDefs}
            defaultColDef={defaultColDef}
            rowSelection={selectGridFn ? "single" : undefined}
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      </deliveryGridContext.Provider>
    </>
  );
}

export default DeliveryAddressGrid;
