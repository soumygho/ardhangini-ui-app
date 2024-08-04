import { AgGridReact } from "ag-grid-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import {
  deliveryGridContext,
  DeliveryGridContext,
} from "../../context/delivery-address-grid.context";
interface DeliveryAddressGridProps {
  rows: any[];
  showAction: boolean;
  selectGridFn?: (selectedRow: any) => void | undefined;
}
function DeliveryAddressGrid({
  rows,
  showAction,
  selectGridFn,
}: DeliveryAddressGridProps) {
  const gridRef = useRef<AgGridReact>(null);
  const [rowData, setRowData] = useState<any[]>(rows);
  const [selectedRow, setSelectedRow] = useState<any>(undefined);

  useEffect(() => {
    setRowData(rows);
  }, [rows]);

  const editDeliveryAddress = useCallback((rowData: any) => {
    console.trace("edit delivery address");
    console.trace(rowData);
  }, []);
  const deleteDeliveryAddress = useCallback((rowData: any) => {
    console.trace("delete delivery address");
    console.trace(rowData);
  }, []);

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
    });
    colDefs.push({
      field: "Remove",
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
      ? setSelectedRow(selectedRows[0])
      : setSelectedRow(undefined);
    if (selectGridFn && selectedRow) {
      selectGridFn(selectedRow);
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
