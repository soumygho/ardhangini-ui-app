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
            <ul className="navbar-nav position-relative">
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
                <div className="dropdown-menu px-3 rounded-3 border-0 shadow w-100">
                  <div className="nav-mega-section row  full-flex-row ">
                    <div className="col-md-3 mega-menu-column child-links-column mb-4 mb-sm-0">
                      <h5 className="nav-mega-section-title"><a href="#">WEAVES</a></h5>
                      <ul className="nav-mega-section-list">

                        <li><a href="#">Banarasi Saree</a>
                        </li>

                        <li><a href="#">Paithani Saree</a>
                        </li>

                        <li><a href="#">Kanjivaram Saree</a>
                        </li>

                        <li><a href="#">Patola Sarees</a>
                        </li>

                        <li><a href="#">Organza Saree</a>
                        </li>

                        <li><a href="#">South Silk Saree</a>
                        </li>

                        <li><a href="#">Maheshwari Silk Saree</a>
                        </li>

                        <li><a href="#">Luxe Collection</a>
                        </li>

                      </ul>
                    </div>



                    <div className="col-md-3 mega-menu-column child-links-column mb-4 mb-sm-0">
                      <h5 className="nav-mega-section-title"><a href="#">FABRIC</a></h5>
                      <ul className="nav-mega-section-list">

                        <li><a href="#">Silk Sarees</a>
                        </li>

                        <li><a href="#">Cotton Saree</a>
                        </li>

                        <li><a href="#">Linen Sarees</a>
                        </li>

                        <li><a href="#">Chiffon Saree</a>
                        </li>

                        <li><a href="#">Satin Silk Saree</a>
                        </li>

                        <li><a href="#">Georgette Saree</a>
                        </li>

                        <li><a href="#">Dola Silk Saree</a>
                        </li>

                        <li><a href="#">Brasso Saree</a>
                        </li>

                      </ul>
                    </div>



                    <div className="col-md-3 mega-menu-column child-links-column mb-4 mb-sm-0">
                      <h5 className="nav-mega-section-title"><a href="#">PRINTS</a></h5>
                      <ul className="nav-mega-section-list">

                        <li><a href="#">Printed Sarees</a>
                        </li>

                        <li><a href="#">Kalamkari Sarees</a>
                        </li>

                        <li><a href="#">Ajrakh Sarees</a>
                        </li>

                      </ul>
                    </div>



                    <div className="col-md-3 mega-menu-column child-links-column mb-4 mb-sm-0">
                      <h5 className="nav-mega-section-title"><a href="#">COLOUR</a></h5>
                      <ul className="nav-mega-section-list">

                        <li><a href="#">Black Saree</a>
                        </li>

                        <li><a href="#">Red Saree</a>
                        </li>

                        <li><a href="#">Pink Saree</a>
                        </li>

                        <li><a href="#">Blue Saree</a>
                        </li>

                        <li><a href="#">Golden Saree</a>
                        </li>

                        <li><a href="#">Purple Sarees</a>
                        </li>

                        <li><a href="#">Green Sarees</a>
                        </li>

                        <li><a href="#">Grey Sarees</a>
                        </li>

                        <li><a href="#">Magenta Sarees</a>
                        </li>

                        <li><a href="#">Maroon Sarees</a>
                        </li>

                        <li><a href="#">Orange sarees</a>
                        </li>

                        <li><a href="#">Yellow Sarees</a>
                        </li>

                        <li><a href="#">Multicolor Sarees</a>
                        </li>

                        <li><a href="#">Brown Sarees</a>
                        </li>

                        <li><a href="#">Turquoise Sarees</a>
                        </li>

                      </ul>
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
