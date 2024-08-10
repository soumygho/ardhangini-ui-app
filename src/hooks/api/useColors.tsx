import { useEffect, useMemo, useState } from "react";
import { ProductColorApi, ProductColorEntity } from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useColors = () => {
  
  const [productColors, setProductColors] = useState<ProductColorEntity[]>([]);
  const getAllProductColors = useMemo(() => () => {
    const api: ProductColorApi = new ProductColorApi(config);
    api
      .productColorControllerGetAll()
      .then((resp) => {
        if (resp) {
          setProductColors(resp?.data);
        }
      })
      .catch((e) => {
        console.log(e);
        showToast("Could not reach out to backend.");
      });
  }, []);

  return { productColors, getAllProductColors };
};

export default useColors;
