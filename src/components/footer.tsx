import React from "react";
import paymentpic from "../images/payment-pic.png";

function Footer() {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-widget-area">
          <div className="container">
            <div className="footer-widget-inner section-space">
              <div className="row mbn-30">
                <div className="col-lg-5 col-md-6 col-sm-8">
                  <div className="footer-widget-item mb-30">
                    <div className="footer-widget-title">
                      <h5>My account</h5>
                    </div>
                    <ul className="footer-widget-body accout-widget">
                      <li className="address">
                        <em>
                          <i className="lnr lnr-map-marker"></i>
                        </em>
                        184 Main Rd E, St Albans VIC 3021, Australia
                      </li>
                      <li className="email">
                        <em>
                          <i className="lnr lnr-envelope"></i>Mail us:{" "}
                        </em>
                        <a href="mailto:test@yourdomain.com">
                          yourmail@gmail.com
                        </a>
                      </li>
                      <li className="phone">
                        <em>
                          <i className="lnr lnr-phone-handset"></i> Phones:{" "}
                        </em>
                        <a href="tel:(012)800456789-987">
                          (123) 456 456 789-987
                        </a>
                      </li>
                    </ul>
                    <div className="payment-method">
                      <img src={paymentpic} alt="payment method" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-4">
                  <div className="footer-widget-item mb-30">
                    <div className="footer-widget-title">
                      <h5>categories</h5>
                    </div>
                    <ul className="footer-widget-body">
                      <li>
                        <a href="#">Ecommerce</a>
                      </li>
                      <li>
                        <a href="#">shopify</a>
                      </li>
                      <li>
                        <a href="#">Prestashop</a>
                      </li>
                      <li>
                        <a href="#">Opencart</a>
                      </li>
                      <li>
                        <a href="#">Magento</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="footer-widget-item mb-30">
                    <div className="footer-widget-title">
                      <h5>information</h5>
                    </div>
                    <ul className="footer-widget-body">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Exchanges</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-2 offset-lg-1 col-md-6 col-sm-6">
                  <div className="footer-widget-item mb-30">
                    <div className="footer-widget-title">
                      <h5>Quick Links</h5>
                    </div>
                    <ul className="footer-widget-body">
                      <li>
                        <a href="#">Store Location</a>
                      </li>
                      <li>
                        <a href="#">My Account</a>
                      </li>
                      <li>
                        <a href="#">Orders Tracking</a>
                      </li>
                      <li>
                        <a href="#">Size Guide</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-2 order-md-1">
                <div className="copyright-text">
                  <p>
                    © 2022 <b>Floda</b> Made with{" "}
                    <i className="fa fa-heart text-danger"></i> by{" "}
                    <a href="#">
                      <b>Ardhangini</b>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 order-1 order-md-2">
                <div className="footer-social-link">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
