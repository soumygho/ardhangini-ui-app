import React, { useCallback, useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { SareeFilter, SareeFilterFilterTypeEnum } from "../../services/openapi";
import { rootContext } from "../../context/root.context";

function MenuBar() {
  const root = useContext(rootContext);
  const buildFilter = useMemo(
    () =>
      (
        filterType: SareeFilterFilterTypeEnum,
        filterValue?: string
      ): SareeFilter => {
        const filter = filterValue
          ? { filterType: filterType, values: [filterValue] }
          : { filterType: filterType, values: [] };
        return filter;
      },
    []
  );

  const handleClick = useCallback(
    (filterType: SareeFilterFilterTypeEnum, filterValue?: string) => {
      root?.setPrimaryFilter(buildFilter(filterType, filterValue));
    },
    []
  );
  return (
    <nav className="navbar navbar-expand-lg shadow-sm bg-light navbar-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-block d-sm-none" to="/">
          <img src={logo} alt="Logo" className="img-fluid" width="250" />
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
                onClick={() => handleClick(SareeFilterFilterTypeEnum.New)}
              >
                Newcomers
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link
                className="nav-link dropdown-toggle"
                aria-current="page"
                to="/sarees"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => handleClick(SareeFilterFilterTypeEnum.None)}
              >
                Collections
              </Link>
              <div className="dropdown-menu px-3 rounded-3 border-0 shadow">
                <div className="nav-mega-section row row-cols-md-5 row-cols-1 full-flex-row">
                  <div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Collections</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.collections?.map((value, indexF) => (
                        <li key={value?.id}>
                          <Link
                            to="/collections"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Collection,
                                value?.id
                              )
                            }
                          >
                            {value?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown mega-dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/sarees"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Saree-Quest
              </Link>
              <div className="dropdown-menu px-3 rounded-3 border-0 shadow w-100">
                <div className="nav-mega-section row row-cols-md-5 row-cols-1 full-flex-row ">
                  <div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Shop by Fabric</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.subCategories?.map((value, index) => (
                        <li key={value?.id}>
                          <Link
                            to="/sarees"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Subcategory,
                                value?.id
                              )
                            }
                          >
                            {value?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Shop by Colour</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.fabrics?.map((value, index) => (
                        <li key={value?.id}>
                          <Link
                            to="/sarees"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Fabric,
                                value?.id
                              )
                            }
                          >
                            {value?.fabricName}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Shop by Print</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.prints?.map((value, index) => (
                        <li key={value?.id}>
                          <Link
                            to="/sarees"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Print,
                                value?.id
                              )
                            }
                          >
                            {value?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Shop by Occasion</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.colors?.map((value, index) => (
                        <li key={value?.id}>
                          <Link
                            to="/sarees"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Color,
                                value?.id
                              )
                            }
                          >
                            {value?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Shop by Style</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.occassions?.map((value, index) => (
                        <li key={value?.id}>
                          <Link
                            to="/sarees"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Occassion,
                                value?.id
                              )
                            }
                          >
                            {value?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {<div className="col mega-menu-column child-links-column mb-4 mb-sm-0">
                    <h5 className="nav-mega-section-title">
                      <span>Style</span>
                    </h5>
                    <ul className="nav-mega-section-list">
                      {root?.syles?.map((value, index) => (
                        <li key={value?.id}>
                          <Link
                            to="/sarees"
                            onClick={() =>
                              handleClick(
                                SareeFilterFilterTypeEnum.Style,
                                value?.id
                              )
                            }
                          >
                            {value?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to="/readytoship"
                onClick={() => handleClick(SareeFilterFilterTypeEnum.Shippable)}
              >
                Shippable
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                aria-current="page"
                to={{ pathname: "/sarees", search: "filter=exclusive" }}
                onClick={() => handleClick(SareeFilterFilterTypeEnum.Exclusive)}
              >
                Ardhangini Exclusive
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
