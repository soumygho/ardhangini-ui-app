import { Link } from "react-router-dom";
import useBreadCrumb from "../../hooks/useBreadCrumb";

function BreadCrumb() {
  const [breadCrumbTitle] = useBreadCrumb();
  return (
    <>
      {breadCrumbTitle !== "" && (
        <div className="breadcrumb-area common-bg">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumb-wrap">
                  <nav aria-label="breadcrumb">
                    <h1>{breadCrumbTitle}</h1>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/">
                          <i className="fa fa-home"></i>
                        </Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {breadCrumbTitle}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BreadCrumb;
