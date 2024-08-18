import { useEffect, useMemo, useState } from "react";
import { ProductPrintsApi, ProductPrintsEntity } from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const usePrints = () => {
  const [productPrints, setProductPrints] = useState<ProductPrintsEntity[]>([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  const getAllProductPrints = useMemo(
    () => async () => {
      const api: ProductPrintsApi = new ProductPrintsApi(await getAxiosConfiguration());
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
