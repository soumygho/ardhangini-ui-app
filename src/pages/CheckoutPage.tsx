import React, { useCallback, useContext, useEffect, useState } from "react";
import CartDetailsPage from "./CartDetailsPage";
import DeliveryAddress from "../components/order/DeliveryAddress";
import { headerContext } from "../context/header.context";
import {
  CreateOrderDto,
  CreateOrderDtoOrderTypeEnum,
  CreateOrderDtoPaymentMethodEnum,
  OrderResponse,
} from "../services/openapi";
import { rootContext } from "../context/root.context";
import useOrdersApi from "../hooks/api/useOrderApi";
import { formatAddress } from "../util/address-formatter.util";
import ThankYou from "../components/order/ThankYou";

function CheckoutPage() {
  const root = useContext(rootContext);
  const context = useContext(headerContext);
  const [shouldDisableCheckout, setShouldDisableCheckout] =
    useState<boolean>(true);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<CreateOrderDtoPaymentMethodEnum>(
      CreateOrderDtoPaymentMethodEnum.Cod
    );
  const { placeOrder } = useOrdersApi();
  const [shouldShowThankYou, setShouldShowThankYou] = useState(false);
  const [placedOrderDetails, setOrderDetails] = useState<
    OrderResponse | undefined
  >(undefined);
  const handleTermsAgree = useCallback((e: any) => {
    if (e?.target?.checked) {
      setShouldDisableCheckout(() => false);
    } else {
      setShouldDisableCheckout(() => true);
    }
  }, []);

  const handlePaymentMethodSelection = useCallback((e: any) => {
    console.trace(e.target.value);
    if (e?.target?.value) {
      if (e.target.value === "cash") {
        setSelectedPaymentMethod(() => CreateOrderDtoPaymentMethodEnum.Cod);
      } else if (e.target.value === "onlinepayment") {
        setSelectedPaymentMethod(
          () => CreateOrderDtoPaymentMethodEnum.OnlinePayment
        );
      }
    }
  }, []);

  const handlePlaceOrder = useCallback(async () => {
    if (
      root?.userId &&
      context?.selectedDeliveryAddress &&
      context?.selectedBillingAddress
    ) {
      const createOrderDto: CreateOrderDto = {
        userId: root?.userId,
        orderType:
          selectedPaymentMethod === CreateOrderDtoPaymentMethodEnum.Cod
            ? CreateOrderDtoOrderTypeEnum.Cashondelivery
            : CreateOrderDtoOrderTypeEnum.Onlinepayment,
        deliveryAddress: formatAddress(context.selectedDeliveryAddress),
        billingAddress: formatAddress(context.selectedBillingAddress),
        paymentMethod: selectedPaymentMethod,
      };
      placeOrder(createOrderDto).then((data) => {
        setShouldShowThankYou(() => true);
        setOrderDetails(data);
      });
    }
  }, []);
  return (
    <>
      {!shouldShowThankYou && (
        <>
          <div className="breadcrumb-area common-bg">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="breadcrumb-wrap">
                    <nav aria-label="breadcrumb">
                      <h1>checkout</h1>
                      <ul className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="index.html">
                            <i className="fa fa-home"></i>
                          </a>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          checkout
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-page-wrapper pb-0">
            <div className="container">
              <div className="row">
                <div className="col-12"></div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="order-summary-details">
                    <h2>Your Order Summary</h2>
                    <div className="order-summary-content">
                      <CartDetailsPage isOrderDetails={true}></CartDetailsPage>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="order-payment-method mt-3">
                    <div className="single-payment-method show">
                      <div className="payment-method-name">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="cashon"
                            name="paymentmethod"
                            value="cash"
                            className="custom-control-input"
                            checked={
                              selectedPaymentMethod ===
                              CreateOrderDtoPaymentMethodEnum.Cod
                            }
                            onChange={handlePaymentMethodSelection}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="cashon"
                          >
                            Pay with cash upon delivery
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="single-payment-method">
                      <div className="payment-method-name">
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            id="directbank"
                            name="paymentmethod"
                            value="onlinepayment"
                            className="custom-control-input"
                            checked={
                              selectedPaymentMethod ===
                              CreateOrderDtoPaymentMethodEnum.OnlinePayment
                            }
                            onChange={handlePaymentMethodSelection}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="directbank"
                          >
                            Online Payment via payment gateway
                          </label>
                        </div>
                      </div>
                      <div
                        className="payment-method-details"
                        data-method="bank"
                      >
                        <p>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account..
                        </p>
                      </div>
                    </div>
                    <div className="summary-footer-area">
                      <div className="custom-control custom-checkbox mb-20">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="terms"
                          required={true}
                          onChange={handleTermsAgree}
                        />
                        <label className="custom-control-label" htmlFor="terms">
                          I have read and agree to the website{" "}
                          <a href="index.html">terms and conditions.</a>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn__bg"
                        disabled={shouldDisableCheckout}
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <DeliveryAddress
                    header="Delivery Address"
                    addressEntity={context?.selectedDeliveryAddress}
                  ></DeliveryAddress>
                  <DeliveryAddress
                    header="Billing Address"
                    addressEntity={context?.selectedBillingAddress}
                  ></DeliveryAddress>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {shouldShowThankYou && <ThankYou data={placedOrderDetails}></ThankYou>}
    </>
  );
}

export default CheckoutPage;
