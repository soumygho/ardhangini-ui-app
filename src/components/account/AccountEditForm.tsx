import React, { useEffect, useState } from "react";
import useAccountDetailsApi from "../../hooks/api/useAccountApi";
import { config } from "../../context/root.context";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  UpdateUserDto,
  UpdateUserDtoSexEnum,
  UserEntity,
} from "../../services/openapi";

function AccountEditForm() {
  const { getUserDetailsUsingToken, updateUserDetails } =
    useAccountDetailsApi();
  const [accountDetails, setAccountDetails] = useState<UserEntity | undefined>(
    undefined
  );
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UpdateUserDto>();
  const onSubmit: SubmitHandler<UpdateUserDto> = (data) => {
    console.trace(data);
    updateUserDetails(data).then((resp) => {
      console.trace(resp);
      if (resp) {
        setAccountDetails(() => resp);
      }
    });
  };
  useEffect(() => {
    getUserDetailsUsingToken().then((data) => {
      if (data) {
        setAccountDetails(() => data);
      }
    });
  }, []);
  return (
    <>
      <div className="col-12 pt-4">
        <h2>Welcome! {accountDetails?.firstName}</h2>
      </div>
      <div className="col-8 mt-5 border p-4">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="col-6 mb-3">
              <label htmlFor="first-name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="First Name"
                {...register("firstName", {
                  required: true,
                  value: accountDetails?.firstName
                    ? accountDetails.firstName
                    : "",
                })}
              />
              {errors.firstName && <span>This field is required</span>}
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="last-name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Last Name"
                {...register("lastName", {
                  required: true,
                  value: accountDetails?.lastName
                    ? accountDetails.lastName
                    : "",
                })}
              />
              {errors.lastName && <span>This field is required</span>}
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  value: accountDetails?.email ? accountDetails.email : "",
                })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="phone" className="form-label">
                Contact Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Contact Number"
                {...register("mobile", {
                  required: true,
                  value: accountDetails?.mobile ? accountDetails.mobile : "",
                })}
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="birthdate" className="form-label">
                Birthdate
              </label>
              <input
                type="date"
                className="form-control"
                id="birthdate"
                placeholder="Birthdate"
                {...register("dob", {
                  required: true,
                  value: accountDetails?.dob
                    ? accountDetails.dob
                    : "30/08/1993",
                })}
              />
              {errors.dob && <span>This field is required</span>}
            </div>
            <div className="col-6 mb-3">
              <label htmlFor="birthdate" className="form-label">
                Gender
              </label>
              <div className="d-flex">
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="male"
                    value={UpdateUserDtoSexEnum.Male}
                    {...register("sex")}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check me-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="female"
                    value={UpdateUserDtoSexEnum.Female}
                    {...register("sex")}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="other"
                    value={UpdateUserDtoSexEnum.Other}
                    {...register("sex")}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="col-6">
              <button className="btn btn__bg btn__sqr">Edit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccountEditForm;
