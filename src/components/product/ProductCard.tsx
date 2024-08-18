import { Link } from "react-router-dom";
import {
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
} from "../../services/openapi/api";
import { useContext } from "react";
import productImage from "../../images/product-1.jpg";
import { rootContext } from "../../context/root.context";

interface ProductCardProps {
  productData: ProductSnapshotDto | ProductSnapshotWithUserDto;
}

function ProductCard({ productData }: ProductCardProps) {
  const root = useContext(rootContext);
  return (
    <div className="product-item mt-40">
      <figure className="product-thumb">
        <Link to="/product-details" state={productData}>
          <img
            className="pri-img"
            src={
              productData?.productDetails?.sareeImages[0]
                ? productData?.productDetails?.sareeImages[0]
                : productImage
            }
            alt="product"
          />
          <img
            className="sec-img"
            src={
              productData?.productDetails?.sareeImages[0]
                ? productData?.productDetails?.sareeImages[0]
                : productImage
            }
            alt="product"
          />
        </Link>
        <div className="product-badge">
          {/* New product label */}
          {productData?.isNew && (
            <div className="product-label new">
              <span>new</span>
            </div>
          )}
          {/* Offer discount product label */}
          {productData?.actualprice && productData?.offerprice && (
            <div className="product-label discount">
              <span>
                {(productData?.actualprice - productData?.offerprice)}% off
              </span>
            </div>
          )}
        </div>
        <div className="button-group">
          <a
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Add to wishlist"
            data-bs-original-title="Add to wishlist"
            onClick={() =>
              root?.handleAddToWishList(
                productData?.productid,
                productData?.productTypeId
              )
            }
          >
            <i className="fa-regular fa-heart"></i>
          </a>

          <a
            data-bs-toggle="tooltip"
            data-bs-placement="left"
            aria-label="Add to Cart"
            data-bs-original-title="Add to Cart"
            onClick={() =>
              root?.handleAddToCart([
                {
                  productId: productData?.productid,
                  quantity: 1,
                  typeId: productData?.productTypeId,
                },
              ])
            }
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </a>
        </div>
      </figure>
      <div className="product-caption">
        <p className="product-name">
          <Link to="/product-details" state={productData}>
            {productData?.productname}
          </Link>
        </p>
        <div className="price-box">
          <span className="price-regular">
            &#8377;{productData?.offerprice}
          </span>
          <span className="price-old">
            <del>&#8377;{productData?.actualprice}</del>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
