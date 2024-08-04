import React from "react";
import CartDetailsPage from "./CartDetailsPage";
import { cartMock } from "../mock/product.mock";

function CheckoutPage() {
  return (
    <>
      {/*-- breadcrumb area start --*/}
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
                    <li className="breadcrumb-item active" aria-current="page">
                      checkout
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*-- breadcrumb area end --*/}

      {/*-- checkout main wrapper start --*/}
      <div className="checkout-page-wrapper pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/*-- Checkout Login Coupon Accordion Start --*/}
              {/*-- Checkout Login Coupon Accordion End --*/}
            </div>
          </div>
          <div className="row">
            {/*-- Order Summary Details --*/}
            <div className="col-lg-12">
              <div className="order-summary-details">
                <h2>Your Order Summary</h2>
                <div className="order-summary-content">
                  {/*-- Order Summary Table --*/}
                  <CartDetailsPage
                    cart={cartMock}
                    isOrderDetails={true}
                  ></CartDetailsPage>
                  {/* order summary end here */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/*-- Checkout Billing Details --*/}
            <div className="col-lg-6">
              {/*-- Order Payment Method --*/}
              <div className="order-payment-method">
                <div className="single-payment-method show">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="cashon"
                        name="paymentmethod"
                        value="cash"
                        className="custom-control-input"
                        checked={true}
                      />
                      <label className="custom-control-label" htmlFor="cashon">
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
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="directbank"
                      >
                        Online Payment via payment gateway
                      </label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="bank">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account..
                    </p>
                  </div>
                </div>
                {/*
                <div className="single-payment-method">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="checkpayment"
                        name="paymentmethod"
                        value="check"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="checkpayment"
                      >
                        Pay with Check
                      </label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="check">
                    <p>
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                </div>
                <div className="single-payment-method">
                  <div className="payment-method-name">
                    <div className="custom-control custom-radio">
                      <input
                        type="radio"
                        id="paypalpayment"
                        name="paymentmethod"
                        value="paypal"
                        className="custom-control-input"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="paypalpayment"
                      >
                        Paypal{" "}
                        <img
                          src="static/images/paypal-card.jpg"
                          className="img-fluid paypal-card"
                          alt="Paypal"
                        />
                      </label>
                    </div>
                  </div>
                  <div className="payment-method-details" data-method="paypal">
                    <p>
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have a PayPal account.
                    </p>
                  </div>
                </div> */}
                <div className="summary-footer-area">
                  <div className="custom-control custom-checkbox mb-20">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="terms"
                      required={true}
                    />
                    <label className="custom-control-label" htmlFor="terms">
                      I have read and agree to the website{" "}
                      <a href="index.html">terms and conditions.</a>
                    </label>
                  </div>
                  <button type="submit" className="btn btn__bg">
                    Place Order
                  </button>
                </div>
              </div>
              {/*order checkout end*/}
              {/*-- Checkout Billing Details end --*/}
            </div>
          </div>
        </div>
      </div>
      {/*-- checkout main wrapper end --*/}
    </>
  );
}

export default CheckoutPage;
