import { useEffect, useMemo, useState } from "react";
import { ProductStyleApi, ProductStyleEntity } from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useStyles = () => {
  const [productStyles, setProductStyles] = useState<ProductStyleEntity[]>([]);
  const getAllProductStyles = useMemo(
    () => () => {
      const api: ProductStyleApi = new ProductStyleApi(config);
      api
        .productStyleControllerGetAll()
        .then((resp) => {
          if (resp) {
            setProductStyles(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { productStyles, getAllProductStyles };
};

export default useStyles;
