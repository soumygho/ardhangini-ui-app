import React from "react";
import { OrderResponse } from "../../services/openapi";
import OrderDetailsPage from "../../pages/OrderDetailsPage";
interface ThankYouProps {
  data?: OrderResponse;
}
function ThankYou({ data }: ThankYouProps) {
  console.trace(data);
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="jumbotron text-center">
          <h1 className="display-3">Thank You!</h1>
          <p className="lead">
            <strong>Plese note you order number #{data?.orderId}</strong>
          </p>
          <hr />
        </div>
      </div>
      <OrderDetailsPage data={data}></OrderDetailsPage>
    </>
  );
}

export default ThankYou;
