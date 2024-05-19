import React from "react";
import blogdetails from "../../images/blog-details-1.jpg";

function Blog() {
  return (
    <>
      <div className="blog-post-item">
        <div className="blog-post-thumb">
          <a href="#">
            <img src={blogdetails} alt="" />
          </a>
          <div className="post-date">
            <p className="date">25</p>
            <p className="month">Apr</p>
          </div>
        </div>
        <div className="post-info-wrapper">
          <div className="entry-header">
            <h2 className="entry-title">
              <a href="#">Flowers daisy pink stick</a>
            </h2>
            <div className="post-meta">
              <div className="post-author">
                Written by: <a href="#">Admin</a>
              </div>
            </div>
          </div>
          <div className="entry-summary">
            <p>
              Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium
              arcu ex. Aenean posuere libero eu augue.
            </p>
          </div>
          <a href="#" className="btn-read">
            read more...
          </a>
        </div>
      </div>
    </>
  );
}

export default Blog;
