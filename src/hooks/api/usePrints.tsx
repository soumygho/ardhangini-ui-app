import { useEffect, useMemo, useState } from "react";
import { ProductPrintsApi, ProductPrintsEntity } from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const usePrints = () => {
  const [productPrints, setProductPrints] = useState<ProductPrintsEntity[]>([]);
  const getAllProductPrints = useMemo(
    () => () => {
      const api: ProductPrintsApi = new ProductPrintsApi(config);
      api
        .productPrintsControllerGetAll()
        .then((resp) => {
          if (resp) {
            setProductPrints(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { productPrints, getAllProductPrints };
};

export default usePrints;
