import { useContext, useEffect } from "react";
import ProductCard from "../product/ProductCard";
import { Link } from "react-router-dom";
import { config, rootContext } from "../../context/root.context";
import { SareeFilterDto } from "../../services/openapi";
import useSareeDetailsApi from "../../hooks/api/useSareeApi";
interface ProductStripProps {
  title: string;
}

function TrendingProducts({ title }: ProductStripProps) {
  const root = useContext(rootContext);
  const { sarees, getAllSarees } = useSareeDetailsApi();

  const sareeFilterDto: SareeFilterDto = {
    userId: root?.userId,
    filters: [
      {
        filterType: "trending",
      },
    ],
  };

  useEffect(() => {
    getAllSarees(sareeFilterDto);
  }, [config]);

  //show only top 4 trendiing products
  return (
    <section className="our-product section-space">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h2>{title}</h2>
              <p>
                Accumsan vitae pede lacus ut ullamcorper sollicitudin quisque
                libero
              </p>
            </div>
          </div>
        </div>
        <div className="row mtn-40">
          {sarees?.map((value, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <ProductCard productData={value} />
            </div>
          ))}
          <div className="col-12">
            <div className="view-more-btn">
              <Link className="btn-hero btn-load-more" to="/collections">
                view more products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrendingProducts;
