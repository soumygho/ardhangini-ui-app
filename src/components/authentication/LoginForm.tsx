import React, { useContext } from "react";
import { EmailAuthDto, UserAuthApi } from "../../services/openapi";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuthApi from "../../hooks/api/useAuthApi";
import { rootContext } from "../../context/root.context";

function LoginForm() {
  const root = useContext(rootContext);
  const { handleLoginUsingEmail } = useAuthApi();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<EmailAuthDto>();
  const onSubmit: SubmitHandler<EmailAuthDto> = (data) => {
    console.trace(data);
    handleLoginUsingEmail(data).then(() => {
      root?.handleLoginCloseModal();
      console.trace(root?.userId);
    });
  };
  return (
    <div className="col-lg-6">
      <div className="login-reg-form-wrap">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="single-input-item">
            <input
              type="email"
              placeholder="Email or Username"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <span>This field is required</span>}
          </div>
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
          <div className="single-input-item">
            <div className="login-reg-form-meta d-flex align-items-center justify-content-between">
              <div className="remember-meta">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="rememberMe"
                  />
                  <label className="custom-control-label" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>
              </div>
              <a className="forget-pwd">Forgot Password?</a>
            </div>
          </div>
          <div className="single-input-item">
            <button className="btn btn__bg">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
