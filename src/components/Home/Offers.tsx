import React from "react";
import banner1 from "../../images/img1-top-floda1.jpg";
import banner2 from "../../images/img1-top-floda2.jpg";
import banner3 from "../../images/img1-top-floda3.jpg";

function Offers() {
  return (
    <section className="banner-statistics">
      <div className="container">
        <div className="row mbn-30">
          <div className="col-md-4">
            <div className="banner-item mb-30">
              <figure className="banner-thumb">
                <a href="#">
                  <img src={banner1} alt="" />
                </a>
                <figcaption className="banner-content">
                  <h2 className="text1">Top friday</h2>
                  <h2 className="text2">Yellow Wedding Sarees</h2>
                  <a className="store-link" href="#">
                    buy it now
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-4">
            <div className="banner-item mb-30">
              <figure className="banner-thumb">
                <a href="#">
                  <img src={banner2} alt="" />
                </a>
                <figcaption className="banner-content text-center">
                  <h2 className="text1">Black friday</h2>
                  <h2 className="text2">Red Wedding Sarees</h2>
                  <a className="store-link" href="#">
                    buy it now
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="col-md-4">
            <div className="banner-item mb-30">
              <figure className="banner-thumb">
                <a href="#">
                  <img src={banner3} alt="" />
                </a>
                <figcaption className="banner-content">
                  <h2 className="text1">10% off</h2>
                  <h2 className="text2">Wedding Sarees</h2>
                  <a className="store-link" href="#">
                    buy it now
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
