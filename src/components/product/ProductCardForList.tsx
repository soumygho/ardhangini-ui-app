import {
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
} from "../../services/openapi";
import ProductCard from "../product/ProductCard";
interface ProductCardProps {
  productData: ProductSnapshotDto | ProductSnapshotWithUserDto;
}
function ProductCardForList({ productData }: ProductCardProps) {
  return (
    <div className="col-md-4 col-sm-6">
      <ProductCard productData={productData}></ProductCard>
    </div>
  );
}

export default ProductCardForList;
