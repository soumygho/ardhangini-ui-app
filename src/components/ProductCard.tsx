import React from "react";
import product1 from "../images/product-1.jpg";
import product2 from "../images/product-2.jpg";

function ProductCard() {
  return (
    <div className="product-item mt-40">
      <figure className="product-thumb">
        <a href="#">
          <img className="pri-img" src={product1} alt="product" />
          <img className="sec-img" src={product2} alt="product" />
        </a>
        <div className="product-badge">
          <div className="product-label new">
            <span>new</span>
          </div>
          <div className="product-label discount">
            <span>10%</span>
          </div>
        </div>
        <div className="button-group">
          <a
            href="wishlist.html"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Add to wishlist"
            data-bs-original-title="Add to wishlist"
          >
            <i className="fa-regular fa-heart"></i>
          </a>

          <a
            href="cart.html"
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Add to Cart"
            data-bs-original-title="Add to Cart"
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </figure>
      <div className="product-caption">
        <p className="product-name">
          <a href="#">Pink Sarees</a>
        </p>
        <div className="price-box">
          <span className="price-regular">$60.00</span>
          <span className="price-old">
            <del>$70.00</del>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
