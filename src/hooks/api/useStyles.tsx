import { useMemo, useState } from "react";
import { ProductStyleApi, ProductStyleEntity } from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useStyles = () => {
  const [productStyles, setProductStyles] = useState<ProductStyleEntity[]>([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const getAllProductStyles = useMemo(
    () => async () => {
      const api: ProductStyleApi = new ProductStyleApi(await getAxiosConfiguration());
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
