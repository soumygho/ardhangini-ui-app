import React, { useContext, useEffect } from "react";
import DeliveryAddressGrid from "./data-grid/DeliveryAddressGrid";
import { deliveryMock } from "../mock/product.mock";
import { headerContext } from "../context/header.context";
import useAddDeliveryModal from "../hooks/useAddDeliveryModal";
import AddDeliveryAddressModal from "./modals/AddDeliveryAddressModal";
import useDeliveryAddressApi from "../hooks/api/useDeliveryAddressApi";
import { Button } from "react-bootstrap";

function SelectDeliveryAddress() {
  //fetch all delivery addresses for the user
  const context = useContext(headerContext);
  const {
    shouldShowAddDeliveryModal,
    closeAddDeliveryModal,
    showAddDeliveryModal,
  } = useAddDeliveryModal();
  const {
    deliveryAddresses,
    isDeliveryAddressUpdated,
    addOrUpdateDeliveryAddress,
    removeDeliveryAddressesForCurrentUser,
    getDeliveryAddressesForCurrentUser,
  } = useDeliveryAddressApi();

  useEffect(() => {
    getDeliveryAddressesForCurrentUser();
  }, [isDeliveryAddressUpdated]);
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
          <div className="col-8">Select Delivery address</div>
          <div className="col-4">
            <a
              className="btn btn__bg d-block"
              style={{ marginBottom: "10px" }}
              onClick={showAddDeliveryModal}
            >
              +Add New Address
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <DeliveryAddressGrid
              rows={deliveryAddresses}
              showAction={false}
              selectGridFn={context?.setDeliveryAddress}
            ></DeliveryAddressGrid>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <span>Select Billing Address</span>
            <DeliveryAddressGrid
              rows={deliveryAddresses}
              showAction={false}
              selectGridFn={context?.setBillingAddress}
            ></DeliveryAddressGrid>
          </div>
        </div>
      </div>
      <Button
        className="btn btn__bg d-block"
        onClick={context?.handleDeliveryAddressProceed}
        disabled={
          !context?.selectedBillingAddress || !context?.selectedDeliveryAddress
        }
      >
        Proceed To Checkout
      </Button>
      <AddDeliveryAddressModal
        shouldShowModal={shouldShowAddDeliveryModal}
        closeCb={closeAddDeliveryModal}
        submitCallBack={addOrUpdateDeliveryAddress}
      ></AddDeliveryAddressModal>
    </main>
  );
}

export default SelectDeliveryAddress;
