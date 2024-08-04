import React, { useContext } from "react";
import DeliveryAddressGrid from "./data-grid/DeliveryAddressGrid";
import { deliveryMock } from "../mock/product.mock";
import { headerContext } from "../context/header.context";

function SelectDeliveryAddress() {
  //fetch all delivery addresses for the user
  const context = useContext(headerContext);
  return (
    <main>
      {/*-- breadcrumb area end --*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/*-- breadcrumb area start --*/}
            <div className="breadcrumb-area">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="breadcrumb-wrap">
                      <nav aria-label="breadcrumb">
                        <h1>Select Address</h1>
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
                            Select Address
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-- breadcrumb area end --*/}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <span>Select Delivery Address</span>
            <DeliveryAddressGrid
              rows={deliveryMock}
              showAction={false}
              selectGridFn={context?.setDeliveryAddress}
            ></DeliveryAddressGrid>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <span>Select Billing Address</span>
            <DeliveryAddressGrid
              rows={deliveryMock}
              showAction={false}
              selectGridFn={context?.setBillingAddress}
            ></DeliveryAddressGrid>
          </div>
        </div>
      </div>
      <a
        className="btn btn__bg d-block"
        onClick={context?.handleDeliveryAddressProceed}
      >
        Proceed To Checkout
      </a>
    </main>
  );
}

export default SelectDeliveryAddress;
