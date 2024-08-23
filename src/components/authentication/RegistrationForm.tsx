import React, { useContext } from "react";
import { rootContext } from "../../context/root.context";
import useAccountApi from "../../hooks/api/useAccountApi";
import { RegisterEmailPasswordDto } from "../../services/openapi";
import { SubmitHandler, useForm } from "react-hook-form";
import AlertSection from "../alert/AlertSection";
import { useAlert } from "../../hooks/useAlert";

function RegistrationForm() {
  const root = useContext(rootContext);
  const { registerUsingEmail } = useAccountApi();
  const { shouldShowAlert, alertContent, severity, showAlert, hideAlert } =
    useAlert();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterEmailPasswordDto>();
  const onSubmit: SubmitHandler<RegisterEmailPasswordDto> = (
    data: RegisterEmailPasswordDto
  ) => {
    console.trace(data);
    hideAlert();
    if (data?.password !== data?.repeatPassword) {
      showAlert("Password and retype password should be same.", "error");
    } else {
      registerUsingEmail(data)
        .then(() => {
          console.trace(data);
          console.trace(root?.userId);
          showAlert("Registration successful please login.", "success");
        })
        .catch((e) => {
          showAlert("Something went wrong.", "error");
        });
    }
  };
  return (
    <div className="col-lg-6">
      <div className="login-reg-form-wrap sign-up-form">
        <h2>Sign Up</h2>
        {shouldShowAlert && (
          <AlertSection
            message={alertContent}
            severity={severity}
          ></AlertSection>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="single-input-item">
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: true,
              })}
            />
            {errors.firstName && <span>This field is required</span>}
          </div>
          <div className="single-input-item">
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: true,
              })}
            />
            {errors.lastName && <span>This field is required</span>}
          </div>
          <div className="single-input-item">
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="single-input-item">
                <input
                  type="password"
                  placeholder="Enter your Password"
                  {...register("password", {
                    required: true,
                  })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-input-item">
                <input
                  type="password"
                  placeholder="Repeat your Password"
                  {...register("repeatPassword", {
                    required: true,
                  })}
                />
                {errors.repeatPassword && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className="single-input-item">
            <div className="login-reg-form-meta">
              <div className="remember-meta">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="subnewsletter"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="subnewsletter"
                  >
                    Subscribe Our Newsletter
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="single-input-item">
            <button className="btn btn__bg">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
