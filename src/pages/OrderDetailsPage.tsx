import { ColDef, SizeColumnsToFitGridStrategy } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { useRef } from "react";
import ProductThumbnailRenderer from "./modals/CellRenderers/ProductThumbnailRenderer";
import ProductNameRenderer from "./modals/CellRenderers/ProductNameRenderer";
import {
  CreateOrderDtoOrderTypeEnum,
  OrderResponse,
} from "../services/openapi";
import DeliveryAddress from "../components/order/DeliveryAddress";
import { Box, Card, CardContent, Chip, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import OrderDetailsLineItemPriceRenderer from "./modals/CellRenderers/OrderDetailsLineItemPriceRenderer";

interface OrderDetailsProps {
  data?: OrderResponse;
}
function OrderDetailsPage({ data }: OrderDetailsProps) {
  const gridRef = useRef<AgGridReact>(null);
  const totalShippingCharge = 0;
  let colDefs: ColDef[] = [
    { field: "productId", hide: true },
    { field: "productTypeId", hide: true },
    { field: "productThumbnail", cellRenderer: ProductThumbnailRenderer },
    { field: "productName", cellRenderer: ProductNameRenderer },
    { field: "quantity", type: "number", editable: false },
    {
      field: "totalFinalPrice",
      cellRenderer: OrderDetailsLineItemPriceRenderer,
    },
  ];
  const defaultColDef = {
    flex: 1,
  };
  const autoSizeStrategy: SizeColumnsToFitGridStrategy = {
    type: "fitGridWidth",
    defaultMinWidth: 140,
    //columnLimits: [],
  };
  return (
    <div className="cart-main-wrapper pb-0">
      <div className="container">
        <div className="section-bg-color">
          <div className="row">
            <div className="col-lg-8">
              {/*-- Cart Table Area --*/}
              <div className="cart-table table-responsive">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="pro-thumbnail">Thumbnail</th>
                      <th className="pro-title">Product</th>
                      <th className="pro-quantity">Quantity</th>
                      <th className="pro-subtotal">Total</th>
                    </tr>
                  </thead>
                  {/*--ag grid here */}
                </table>
                {/* Ag-grid here */}
                <div
                  className="col-lg-12 ag-theme-quartz" // applying the Data Grid theme
                  style={{ height: 300 }} // the Data Grid will fill the size of the parent container
                >
                  <AgGridReact
                    rowHeight={150}
                    autoSizeStrategy={autoSizeStrategy}
                    ref={gridRef}
                    headerHeight={0}
                    rowData={data?.cartLineItems}
                    columnDefs={colDefs}
                    defaultColDef={defaultColDef}
                    rowSelection="single"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 ml-auto">
              {/*-- Cart Calculation Area --*/}
              <div className="cart-calculator-wrapper">
                <div className="cart-calculate-items">
                  <h3>Cart Totals</h3>
                  <div className="table-responsive">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Sub Total</td>
                          <td>&#x20b9;{data?.totalFinalPrice}</td>
                        </tr>
                        <tr>
                          <td>Shipping</td>
                          <td>&#x20b9;{totalShippingCharge}</td>
                        </tr>
                        <tr>
                          <td>CGST</td>
                          <td>&#x20b9;{data?.totalCgst}</td>
                        </tr>
                        <tr>
                          <td>SGST</td>
                          <td>&#x20b9;{data?.totalSgst}</td>
                        </tr>
                        <tr className="total">
                          <td>Total</td>
                          <td className="total-amount">
                            &#x20b9;
                            {data?.totalFinalPrice}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="mt-3">
                <Stack direction="row" spacing={1}>
                  <Chip label={data?.orderType} />
                  <Chip label={data?.OrderStatus} />
                </Stack>
                <div className="mt-2">
                  <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">
                      <h4>Payment Details</h4>
                      <CardContent>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>Payment Status</td>
                                <td>{data?.paymentInfo?.paymentStatus}</td>
                              </tr>
                              <tr>
                                <td>Payment Method</td>
                                <td>{data?.paymentInfo?.paymentMethod}</td>
                              </tr>
                              {data?.orderType !==
                                CreateOrderDtoOrderTypeEnum.Cashondelivery && (
                                <>
                                  <tr>
                                    <td>Gateway Order Id</td>
                                    <td>{data?.paymentInfo?.gatewayOrderId}</td>
                                  </tr>
                                  <tr>
                                    <td>Gateway Payment Id</td>
                                    <td>
                                      {data?.paymentInfo?.gatewayPaymentId}
                                    </td>
                                  </tr>
                                </>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </Box>
                </div>
              </div>
            </div>
            <div className="col-4">
              {data?.orderTimeLine && (
                <Timeline position="alternate">
                  {data?.orderTimeLine?.map((timeline) => (
                    <TimelineItem>
                      <TimelineOppositeContent color="text.secondary">
                        {timeline?.eventDate}
                      </TimelineOppositeContent>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent>{timeline?.eventType}</TimelineContent>
                    </TimelineItem>
                  ))}
                </Timeline>
              )}
            </div>
            <div className="col-4">
              <DeliveryAddress
                header="Delivery Address"
                addressString={data?.shippingAddress}
              ></DeliveryAddress>
              <DeliveryAddress
                header="Billing Address"
                addressString={data?.billingAddress}
              ></DeliveryAddress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPage;
