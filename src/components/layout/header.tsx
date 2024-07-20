import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="top-bar py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="text-light">
                FLAT 10% OFF on orders above ₹4,999 | Code: MOTHERSDAY
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="brandlogo-sec py-2 d-none d-md-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <Link to="/">
                <img src={logo} alt="Logo" className="img-fluid" width="130" />
              </Link>
            </div>
            <div className="col-md-6">
              <div className="main-search-bar">
                <input
                  type="text"
                  className="searchTerm"
                  placeholder="What are you looking for?"
                />
                <button type="submit" className="searchButton">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="d-flex align-items-center justify-content-end user-section">
                <li>
                  <a href="#" className="text-dark">
                    <i className="fa-solid fa-headset"></i> Help
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    <i className="fa-regular fa-heart"></i> Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    <i className="fa-solid fa-basket-shopping"></i> Bag
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    <i className="fa-regular fa-user"></i> Account
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <nav className="navbar navbar-expand-lg shadow-sm bg-light navbar-light sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand d-block d-sm-none" to="/">
            <img src={logo} alt="Logo" className="img-fluid" width="130" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/newarrivals"
                >
                  New Arrivals
                </Link>
              </li>
              <li className="nav-item dropdown mega-dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/collections"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collections
                </Link>
                <div className="dropdown-menu px-3 rounded-3 border-0 shadow">
                  <div className="row">
                    <div className="col-sm-6">
                      <Link to="/collections">
                        <div className="d-flex align-items-center py-3 px-1 rounded-3">
                          <div className="icon px-3 bg-warning-subtle rounded-3 fs-1">
                            <i className="fa-solid fa-shirt"></i>
                          </div>
                          <div className="text ps-3">
                            <h5>Television</h5>
                            <div>
                              Irure incididunt eu irure quis ipsum occaecat
                              dolor quis.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/collections">
                        <div className="d-flex align-items-center py-3 px-1 rounded-3">
                          <div className="icon px-3 bg-danger-subtle rounded-3 fs-1">
                            <i className="fa-solid fa-shirt"></i>
                          </div>
                          <div className="text ps-3">
                            <h5>Headphones</h5>
                            <div>
                              Irure incididunt eu irure quis ipsum occaecat
                              dolor quis.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                    <Link to="/collections">
                        <div className="d-flex align-items-center py-3 px-1 rounded-3">
                          <div className="icon px-3 bg-success-subtle rounded-3 fs-1">
                            <i className="fa-solid fa-shirt"></i>
                          </div>
                          <div className="text ps-3">
                            <h5>Smartphone</h5>
                            <div>
                              Irure incididunt eu irure quis ipsum occaecat
                              dolor quis.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/collections">
                        <div className="d-flex align-items-center py-3 px-1 rounded-3">
                          <div className="icon px-3 bg-secondary-subtle rounded-3 fs-1">
                            <i className="fa-solid fa-shirt"></i>
                          </div>
                          <div className="text ps-3">
                            <h5>Laptop</h5>
                            <div>
                              Irure incididunt eu irure quis ipsum occaecat
                              dolor quis.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/collections">
                        <div className="d-flex align-items-center py-3 px-1 rounded-3">
                          <div className="icon px-3 bg-body-tertiary rounded-3 fs-1">
                            <i className="fa-solid fa-shirt"></i>
                          </div>
                          <div className="text ps-3">
                            <h5>Smartwatch</h5>
                            <div>
                              Irure incididunt eu irure quis ipsum occaecat
                              dolor quis.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                    <div className="col-sm-6">
                      <Link to="/collections">
                        <div className="d-flex align-items-center py-3 px-1 rounded-3">
                          <div className="icon px-3 bg-info-subtle rounded-3 fs-1">
                            <i className="fa-solid fa-shirt"></i>
                          </div>
                          <div className="text ps-3">
                            <h5>Earbuds</h5>
                            <div>
                              Irure incididunt eu irure quis ipsum occaecat
                              dolor quis.
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sarees">
                  Sarees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/giftcards">
                  Gift Card
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/offers">
                  Offer/Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/readytoship"
                >
                  Ready to Ship
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
