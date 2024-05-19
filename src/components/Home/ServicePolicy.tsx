import React from "react";
import freeShipping from "../../images/logo-1.jpg";
import cashondelivery from "../../images/logo-2.jpg";
import easyreturn from "../../images/logo-3.jpg";
import makeinindia from "../../images/logo-4.jpg";

function ServicePolicy() {
  return (
    <section className="service-policy-area section-space pb-0 text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Ardhangini COMMITMENT</h1>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img src={freeShipping} alt="" />
            <h2>FREE SHIPPING</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img src={cashondelivery} alt="" />
            <h2>CASH ON DELIVERY</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img src={easyreturn} alt="" />
            <h2>EASY RETURNS AND EXCHANGES</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <img src={makeinindia} alt="" />
            <h2>MAKE IN INDIA</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicePolicy;
