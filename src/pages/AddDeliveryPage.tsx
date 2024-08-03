import React from "react";

function AddDeliveryPage() {
  return (
    <div className="checkout-billing-details-wrap">
      <h2>Billing Details</h2>
      <div className="billing-form-wrap">
        <form action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="single-input-item">
                <label htmlFor="f_name" className="required">
                  First Name
                </label>
                <input type="text" id="f_name" placeholder="First Name" />
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-input-item">
                <label htmlFor="l_name" className="required">
                  Last Name
                </label>
                <input type="text" id="l_name" placeholder="Last Name" />
              </div>
            </div>
          </div>

          <div className="single-input-item">
            <label htmlFor="email" className="required">
              Email Address
            </label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>

          <div className="single-input-item">
            <label htmlFor="com-name">Company Name</label>
            <input type="text" id="com-name" placeholder="Company Name" />
          </div>

          <div className="single-input-item">
            <label htmlFor="country" className="required">
              Country
            </label>
            <select
              name="country nice-select"
              id="country"
              style={{ display: "none" }}
            >
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Armenia">Armenia</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="England">England</option>
              <option value="London">London</option>
              <option value="London">London</option>
              <option value="China">China</option>
            </select>
            <div className="nice-select" tabIndex={0}>
              <span className="current">Afghanistan</span>
              <ul className="list">
                <li data-value="Afghanistan" className="option selected">
                  Afghanistan
                </li>
                <li data-value="Albania" className="option">
                  Albania
                </li>
                <li data-value="Algeria" className="option">
                  Algeria
                </li>
                <li data-value="Armenia" className="option">
                  Armenia
                </li>
                <li data-value="Bangladesh" className="option">
                  Bangladesh
                </li>
                <li data-value="India" className="option">
                  India
                </li>
                <li data-value="Pakistan" className="option">
                  Pakistan
                </li>
                <li data-value="England" className="option">
                  England
                </li>
                <li data-value="London" className="option">
                  London
                </li>
                <li data-value="London" className="option">
                  London
                </li>
                <li data-value="China" className="option">
                  China
                </li>
              </ul>
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
            />
          </div>

          <div className="single-input-item">
            <input type="text" placeholder="Street address Line 2 (Optional)" />
          </div>

          <div className="single-input-item">
            <label htmlFor="town" className="required">
              Town / City
            </label>
            <input type="text" id="town" placeholder="Town / City" />
          </div>

          <div className="single-input-item">
            <label htmlFor="state">State / Division</label>
            <input type="text" id="state" placeholder="State / Division" />
          </div>

          <div className="single-input-item">
            <label htmlFor="postcode" className="required">
              Postcode / ZIP
            </label>
            <input type="text" id="postcode" placeholder="Postcode / ZIP" />
          </div>

          <div className="single-input-item">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" placeholder="Phone" />
          </div>

          <div className="checkout-box-wrap">
            <div className="single-input-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="create_pwd"
                />
                <label className="custom-control-label" htmlFor="create_pwd">
                  Create an account?
                </label>
              </div>
            </div>
            <div className="account-create single-form-row">
              <p>
                Create an account by entering the information below. If you are
                a returning customer please login at the top of the page.
              </p>
              <div className="single-input-item">
                <label htmlFor="pwd" className="required">
                  Account Password
                </label>
                <input
                  type="password"
                  id="pwd"
                  placeholder="Account Password"
                />
              </div>
            </div>
          </div>

          <div className="checkout-box-wrap">
            <div className="single-input-item">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="ship_to_different"
                />
                <label
                  className="custom-control-label"
                  htmlFor="ship_to_different"
                >
                  Ship to a different address?
                </label>
              </div>
            </div>
            <div className="ship-to-different single-form-row">
              <div className="row">
                <div className="col-md-6">
                  <div className="single-input-item">
                    <label htmlFor="f_name_2" className="required">
                      First Name
                    </label>
                    <input type="text" id="f_name_2" placeholder="First Name" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="single-input-item">
                    <label htmlFor="l_name_2" className="required">
                      Last Name
                    </label>
                    <input type="text" id="l_name_2" placeholder="Last Name" />
                  </div>
                </div>
              </div>

              <div className="single-input-item">
                <label htmlFor="email_2" className="required">
                  Email Address
                </label>
                <input type="email" id="email_2" placeholder="Email Address" />
              </div>

              <div className="single-input-item">
                <label htmlFor="com-name_2">Company Name</label>
                <input type="text" id="com-name_2" placeholder="Company Name" />
              </div>

              <div className="single-input-item">
                <label htmlFor="country_2" className="required">
                  Country
                </label>
                <select
                  name="country"
                  id="country_2"
                  style={{ display: "none" }}
                >
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="England">England</option>
                  <option value="London">London</option>
                  <option value="London">London</option>
                  <option value="China">China</option>
                </select>
                <div className="nice-select" tabIndex={0}>
                  <span className="current">Bangladesh</span>
                  <ul className="list">
                    <li data-value="Bangladesh" className="option selected">
                      Bangladesh
                    </li>
                    <li data-value="India" className="option">
                      India
                    </li>
                    <li data-value="Pakistan" className="option">
                      Pakistan
                    </li>
                    <li data-value="England" className="option">
                      England
                    </li>
                    <li data-value="London" className="option">
                      London
                    </li>
                    <li data-value="London" className="option">
                      London
                    </li>
                    <li data-value="China" className="option">
                      China
                    </li>
                  </ul>
                </div>
              </div>

              <div className="single-input-item">
                <label htmlFor="street-address_2" className="required mt-20">
                  Street address
                </label>
                <input
                  type="text"
                  id="street-address_2"
                  placeholder="Street address Line 1"
                />
              </div>

              <div className="single-input-item">
                <input
                  type="text"
                  placeholder="Street address Line 2 (Optional)"
                />
              </div>

              <div className="single-input-item">
                <label htmlFor="town_2" className="required">
                  Town / City
                </label>
                <input type="text" id="town_2" placeholder="Town / City" />
              </div>

              <div className="single-input-item">
                <label htmlFor="state_2">State / Division</label>
                <input
                  type="text"
                  id="state_2"
                  placeholder="State / Division"
                />
              </div>

              <div className="single-input-item">
                <label htmlFor="postcode_2" className="required">
                  Postcode / ZIP
                </label>
                <input
                  type="text"
                  id="postcode_2"
                  placeholder="Postcode / ZIP"
                />
              </div>
            </div>
          </div>

          <div className="single-input-item">
            <label htmlFor="ordernote">Order Note</label>
            <textarea
              name="ordernote"
              id="ordernote"
              cols={30}
              rows={3}
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddDeliveryPage;
