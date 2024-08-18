import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  DeliveryAddressEntity,
  UpdateDeliveryAddressDto,
} from "../services/openapi";

interface AddDeliveryAddressPageProps {
  submitCallBack: (data: UpdateDeliveryAddressDto) => void;
  deliveryAddress?: DeliveryAddressEntity;
}
function AddDeliveryPage({
  submitCallBack,
  deliveryAddress,
}: AddDeliveryAddressPageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateDeliveryAddressDto>();
  const onSubmit: SubmitHandler<UpdateDeliveryAddressDto> = (data) => {
    console.trace(data);
    submitCallBack(data);
  };
  return (
    <div className="checkout-billing-details-wrap">
      <h2>Address Details</h2>
      <div className="billing-form-wrap">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <div className="single-input-item">
                <label htmlFor="f_name" className="required">
                  First Name
                </label>
                <input
                  type="text"
                  id="f_name"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: true,
                    value: deliveryAddress ? deliveryAddress?.firstName : "",
                  })}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-input-item">
                <label htmlFor="l_name" className="required">
                  Last Name
                </label>
                <input
                  type="text"
                  id="l_name"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: true,
                    value: deliveryAddress ? deliveryAddress?.lastName : "",
                  })}
                />
              </div>
            </div>
          </div>

          <div className="single-input-item">
            <label htmlFor="street-address" className="required mt-20">
              Street address
            </label>
            <input
              type="text"
              id="street-address"
              placeholder="Street address Line 1"
              {...register("addressLine1", {
                required: true,
                value: deliveryAddress ? deliveryAddress?.addressLine1 : "",
              })}
            />
          </div>

          <div className="single-input-item">
            <input
              type="text"
              placeholder="Street address Line 2 (Optional)"
              {...register("addressLine2", {
                required: true,
                value: deliveryAddress ? deliveryAddress?.addressLine2 : "",
              })}
            />
          </div>

          <div className="single-input-item">
            <label htmlFor="town" className="required">
              Town / City
            </label>
            <input
              type="text"
              id="town"
              placeholder="Town / City"
              {...register("town", {
                required: true,
                value: deliveryAddress ? deliveryAddress?.town : "",
              })}
            />
          </div>

          <div className="single-input-item">
            <label htmlFor="state">State / Division</label>
            <input
              type="text"
              id="state"
              placeholder="State / Division"
              {...register("state", {
                required: true,
                value: deliveryAddress ? deliveryAddress?.state : "",
              })}
            />
          </div>

          <div className="single-input-item">
            <label htmlFor="postcode" className="required">
              Postcode / ZIP
            </label>
            <input
              type="number"
              id="postcode"
              placeholder="Postcode / ZIP"
              {...register("pin", {
                required: true,
                value: deliveryAddress ? deliveryAddress?.pin : 0,
              })}
            />
          </div>

          <div className="single-input-item">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              placeholder="Phone"
              {...register("mobileNumber", {
                required: true,
                value: deliveryAddress ? deliveryAddress?.mobileNumber : "",
              })}
            />
          </div>
          <button type="submit" className="btn btn__bg d-block">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDeliveryPage;
