import React from "react";
import LoginForm from "../components/authentication/LoginForm";
import RegistrationForm from "../components/authentication/RegistrationForm";

function LoginPage() {
  return (
    <section>
      {/*!-- breadcrumb area start --*/}
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <h1>login / register</h1>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">
                        <i className="fa fa-home"></i>
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      login / register
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*!-- breadcrumb area end --*/}
      <div className="login-register-wrapper pb-0">
        <div className="container">
          <div className="member-area-from-wrap">
            <div className="row">
              {/*-- Login Content End --*/}
              <LoginForm></LoginForm>
              {/*-- Register Content Start --*/}
              <RegistrationForm></RegistrationForm>
              {/*-- Register Content End --*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
