import React from "react";

function Banner({ image }: { image: string }) {
  return (
    <section className="banner-section">
      <div className="container-fluid">
        <div className="row px-0">
          <div className="col-12 px-0">
            <img src={image} alt="Banner" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
