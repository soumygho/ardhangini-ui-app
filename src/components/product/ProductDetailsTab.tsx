import React from "react";
import avatar from "../../images/avatar.jpg";

function ProductDetailsTab() {
  return (
    <div className="product-details-reviews section-space pb-0">
      <div className="row">
        <div className="col-lg-12">
          <div className="product-review-info">
            <ul className="nav review-tab">
              <li>
                <a className="active" data-bs-toggle="tab" href="#tab_one">
                  description
                </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab_two">
                  information
                </a>
              </li>
              <li>
                <a data-bs-toggle="tab" href="#tab_three">
                  reviews (1)
                </a>
              </li>
            </ul>
            <div className="tab-content reviews-tab">
              <div className="tab-pane fade show active" id="tab_one">
                <div className="tab-one">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Ipsum metus
                    feugiat sem, quis fermentum turpis eros eget velit. Donec ac
                    tempus ante. Fusce ultricies massa massa. Fusce aliquam,
                    purus eget sagittis vulputate, sapien libero hendrerit est,
                    sed commodo augue nisi non neque.Cras neque metus, consequat
                    et blandit et, luctus a nunc. Etiam gravida vehicula tellus,
                    in imperdiet ligula euismod eget. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_two">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>color</td>
                      <td>black, blue, red</td>
                    </tr>
                    <tr>
                      <td>size</td>
                      <td>L, M, S</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tab-pane fade" id="tab_three">
                <form action="#" className="review-form">
                  <h5>
                    1 review for <span>Chaz Kangeroo</span>
                  </h5>
                  <div className="total-reviews">
                    <div className="rev-avatar">
                      <img src={avatar} alt="" />
                    </div>
                    <div className="review-box">
                      <div className="ratings">
                        <span className="good">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="good">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="good">
                          <i className="fa fa-star"></i>
                        </span>
                        <span className="good">
                          <i className="fa fa-star"></i>
                        </span>
                        <span>
                          <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <div className="post-author">
                        <p>
                          <span>admin -</span> 30 Mar, 2023
                        </p>
                      </div>
                      <p>
                        Aliquam fringilla euismod risus ac bibendum. Sed sit
                        amet sem varius ante feugiat lacinia. Nunc ipsum nulla,
                        vulputate ut venenatis vitae, malesuada ut mi. Quisque
                        iaculis, dui congue placerat pretium, augue erat
                        accumsan lacus
                      </p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label">
                        <span className="text-danger">*</span>
                        Your Name
                      </label>
                      <input type="text" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label">
                        <span className="text-danger">*</span>
                        Your Email
                      </label>
                      <input type="email" className="form-control" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label">
                        <span className="text-danger">*</span>
                        Your Review
                      </label>
                      <textarea className="form-control" required></textarea>
                      <div className="help-block pt-10">
                        <span className="text-danger">Note:</span>
                        HTML is not translated!
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col">
                      <label className="col-form-label">
                        <span className="text-danger">*</span>
                        Rating
                      </label>
                      &nbsp;&nbsp;&nbsp; Bad&nbsp;
                      <input type="radio" value="1" name="rating" />
                      &nbsp;
                      <input type="radio" value="2" name="rating" />
                      &nbsp;
                      <input type="radio" value="3" name="rating" />
                      &nbsp;
                      <input type="radio" value="4" name="rating" />
                      &nbsp;
                      <input type="radio" value="5" name="rating" checked />
                      &nbsp;Good
                    </div>
                  </div>
                  <div className="buttons">
                    <button className="sqr-btn" type="submit">
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsTab;
