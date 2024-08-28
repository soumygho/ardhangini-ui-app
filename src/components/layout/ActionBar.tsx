import React, { useCallback, useContext } from "react";
import { rootContext } from "../../context/root.context";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { headerContext } from "../../context/header.context";
import useAuthApi from "../../hooks/api/useAuthApi";

function ActionBar() {
  const root = useContext(rootContext);
  const context = useContext(headerContext);
  const { handleLogout } = useAuthApi();
  const logOutHandler = useCallback(() => {
    handleLogout();
  }, []);
  return (
    <section className="brandlogo-sec py-2 d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <Link to="/">
              <img src={logo} alt="Logo" className="img-fluid" />
            </Link>
          </div>
          <div className="col-md-4">
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
                <a className="text-dark">
                  <i className="fa-solid fa-headset"></i> Help
                </a>
              </li>
              <>
                <li>
                  <a
                    className="text-dark"
                    onClick={context?.handleShowWishListModal}
                  >
                    <i className="fa-regular fa-heart"></i> Wishlist
                  </a>
                </li>
                <li>
                  <a
                    className="text-dark"
                    onClick={context?.handleShowCartModal}
                  >
                    <i className="fa-solid fa-basket-shopping"></i> Bag
                  </a>
                </li>
                <li>
                  <a className="text-dark" onClick={context?.showAccountModal}>
                    <i className="fa-regular fa-user"></i> Account
                  </a>
                </li>{" "}
              </>
              {!root?.userId && (
                <li>
                  <a className="text-dark" onClick={root?.handleShowLoginModal}>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </a>
                </li>
              )}
              {root?.userId && (
                <li>
                  <a className="text-dark" onClick={logOutHandler}>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                      <path
                        d="M8.5 16.5C6.37827 16.5 4.34344 15.6571 2.84315 14.1569C1.34285 12.6566 0.5 10.6217 0.5 8.5C0.497758 7.41363 0.718474 6.33837 1.14849 5.34073C1.57851 4.34309 2.20867 3.44431 3 2.7C3.074 2.65056 3.161 2.62417 3.25 2.62417C3.339 2.62417 3.426 2.65056 3.5 2.7C3.54944 2.774 3.57583 2.861 3.57583 2.95C3.57583 3.039 3.54944 3.126 3.5 3.2C2.80884 3.86217 2.25524 4.6543 1.87097 5.53094C1.4867 6.40758 1.27933 7.35148 1.26074 8.30846C1.24216 9.26545 1.41274 10.2167 1.76269 11.1076C2.11264 11.9985 2.63507 12.8115 3.3 13.5C3.95283 14.1893 4.73621 14.7419 5.60458 15.1256C6.47295 15.5093 7.40895 15.7165 8.35814 15.7351C9.30732 15.7537 10.2507 15.5834 11.1335 15.234C12.0162 14.8846 12.8207 14.3632 13.5 13.7C14.1954 13.0241 14.7484 12.2157 15.1262 11.3226C15.5041 10.4295 15.6992 9.46976 15.7 8.5C15.7073 7.55289 15.5253 6.61387 15.1647 5.73808C14.8041 4.86228 14.2721 4.06736 13.6 3.4C13.5543 3.36447 13.5173 3.31898 13.4919 3.26699C13.4665 3.215 13.4532 3.15788 13.4532 3.1C13.4532 3.04212 13.4665 2.985 13.4919 2.93301C13.5173 2.88102 13.5543 2.83553 13.6 2.8C13.6355 2.75431 13.681 2.71733 13.733 2.69189C13.785 2.66646 13.8421 2.65324 13.9 2.65324C13.9579 2.65324 14.015 2.66646 14.067 2.69189C14.119 2.71733 14.1645 2.75431 14.2 2.8C15.6705 4.33395 16.4941 6.37507 16.5 8.5C16.5 10.6217 15.6571 12.6566 14.1569 14.1569C12.6566 15.6571 10.6217 16.5 8.5 16.5ZM8.8 8.3V0.9C8.8 0.7 8.7 0.5 8.5 0.5C8.39622 0.50702 8.29851 0.551416 8.22496 0.624964C8.15142 0.698511 8.10702 0.796225 8.1 0.9V8.3C8.10702 8.40378 8.15142 8.50149 8.22496 8.57504C8.29851 8.64858 8.39622 8.69298 8.5 8.7C8.7 8.7 8.8 8.5 8.8 8.3Z"
                        fill="#6B6B6B"
                        stroke="#6B6B6B"
                      ></path>
                    </svg>
                    Logout
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActionBar;
