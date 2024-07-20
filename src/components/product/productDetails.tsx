import React from "react";
import ProductImageCarousel from "./ProductImageCarousel";
import couponSvg from "../../images/cupon.svg";

function productDetails() {
  return (
    <div className="product-details-inner">
      <div className="row">
        <div className="col-lg-6">
          <ProductImageCarousel></ProductImageCarousel>
        </div>
        <div className="col-lg-6">
          <div className="product-details-des">
            <h3 className="product-name">Flowers daisy pink stick</h3>
            <div className="ratings d-flex">
              <span>
                <i className="lnr lnr-star"></i>
              </span>
              <span>
                <i className="lnr lnr-star"></i>
              </span>
              <span>
                <i className="lnr lnr-star"></i>
              </span>
              <span>
                <i className="lnr lnr-star"></i>
              </span>
              <span>
                <i className="lnr lnr-star"></i>
              </span>
              <div className="pro-review">
                <span>1 Reviews</span>
              </div>
            </div>
            <div className="price-box">
              <span className="price-regular">$70.00</span>
              <span className="price-old">
                <del>$90.00</del>
              </span>
            </div>
            <div className="availability">
              <i className="fa fa-check-circle"></i>
              <span>200 in stock</span>
            </div>
            <p className="pro-desc">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. Phasellus id nisi quis justo tempus
              mollis sed et dui. In hac habitasse platea dictumst.
            </p>
            <div className="quantity-cart-box d-flex align-items-center">
              <h5>qty:</h5>
              <div className="quantity">
                <div className="pro-qty">
                  <input type="text" value="1" />
                </div>
              </div>
              <div className="action_link">
                <a className="btn btn-cart2" href="#">
                  Add to cart
                </a>
              </div>
            </div>

            <hr />

            <a href="#" className="coupon">
              <img src={couponSvg} alt="" />
              <span className="discount--title">Best Coupon For You</span>
            </a>

            <div className="discount-code-snippet full_width_discount ">
              <div className="discount-code-main">
                <div className="discount-code-desc-inner">
                  <div className="discount-code-text-wrapper">
                    <div className="discount-code-desc">
                      <p>
                        <strong>FLAT 10% off above&nbsp;₹4,999/-</strong>
                      </p>
                    </div>
                    <div className="discount-code-subtext">
                      <p>Discount applies at checkout</p>
                    </div>
                  </div>

                  <div className="success-msg-main">
                    <div
                      data-discount-price="0"
                      className="discount-code "
                      data-id="MOTHERSDAY"
                    >
                      <span className="before-apply">MOTHERSDAY</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 115.77 122.88"
                        className="offer-svg"
                        xmlSpace="preserve"
                      >
                        <g>
                          <path
                            className="st0"
                            d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="delivery-estimation">
              <form action="/" method="post">
                <label htmlFor="postal_code" className="label-title">
                  Check Delivery
                </label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="Enter your pincode"
                    name="postal_code"
                    id="postal_code"
                  />
                  <button type="submit" data-check-eta="">
                    Check
                  </button>
                </div>
              </form>
            </div>

            <div className="pdp-discount-wrapepr">
              <div className="discount-bagde">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z"
                    fill="black"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.25 8.96924C8.80841 8.96924 8.5 9.30047 8.5 9.64963C8.5 9.99879 8.80841 10.33 9.25 10.33C9.69159 10.33 10 9.99879 10 9.64963C10 9.30047 9.69159 8.96924 9.25 8.96924ZM7.5 9.64963C7.5 8.69497 8.31088 7.96924 9.25 7.96924C10.1891 7.96924 11 8.69497 11 9.64963C11 10.6043 10.1891 11.33 9.25 11.33C8.31088 11.33 7.5 10.6043 7.5 9.64963ZM15.8635 8.59812C16.0531 8.79889 16.0441 9.11534 15.8433 9.30493L8.84329 15.9152C8.64252 16.1048 8.32607 16.0958 8.13647 15.895C7.94688 15.6942 7.95594 15.3778 8.15671 15.1882L15.1567 8.57788C15.3575 8.38828 15.6739 8.39735 15.8635 8.59812ZM14 14.8434C14 14.4942 14.3084 14.163 14.75 14.163C15.1916 14.163 15.5 14.4942 15.5 14.8434C15.5 15.1926 15.1916 15.5238 14.75 15.5238C14.3084 15.5238 14 15.1926 14 14.8434ZM14.75 13.163C13.8109 13.163 13 13.8887 13 14.8434C13 15.798 13.8109 16.5238 14.75 16.5238C15.6891 16.5238 16.5 15.798 16.5 14.8434C16.5 13.8887 15.6891 13.163 14.75 13.163Z"
                    fill="white"
                  ></path>
                </svg>

                <div className="rte">
                  <p>
                    Also Get{" "}
                    <strong>EXTRA INSTANT ₹200 OFF on Prepaid orders</strong>.
                  </p>
                </div>
              </div>

              <small className="t_and_c">
                <p>Prices mentioned are inclusive of all Taxes*</p>
              </small>
            </div>

            <div className="trust-badge-section">
              <h4 className="badge-heading">Your safety is our priority</h4>
              <div className="badge-wrapper">
                <div className="badge-item">
                  <img
                    alt="Easy Returns"
                    className="hs-id-93e82e20 hs-lazyload lazyautosizes lazyloaded"
                    src="static/images/easy_returns_1_120x.jpg"
                    sizes="90px"
                  />
                  <span>Easy Returns</span>
                </div>
                <div className="badge-item">
                  <img
                    alt="Easy Returns"
                    className="hs-id-54419a08 hs-lazyload lazyautosizes lazyloaded"
                    src="static/images/no_contact_delivery_120x.jpg"
                    sizes="90px"
                  />
                  <span>No Contact Delivery</span>
                </div>
                <div className="badge-item">
                  <img
                    alt="Safe &amp; Clean Packaging"
                    className="hs-id-6247af7e hs-lazyload lazyautosizes lazyloaded"
                    src="static/images/safe-and-clean-packaging_120x.jpg"
                    sizes="90px"
                  />
                  <span>Safe &amp; Clean Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetails;
