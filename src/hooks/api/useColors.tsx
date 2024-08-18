import { useEffect, useMemo, useState } from "react";
import {
  Configuration,
  ProductColorApi,
  ProductColorEntity,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useColors = () => {
  const [productColors, setProductColors] = useState<ProductColorEntity[]>([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const getAllProductColors = useMemo(
    () => async () => {
      const api: ProductColorApi = new ProductColorApi(await getAxiosConfiguration());
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
    },
    []
  );

  return { productColors, getAllProductColors };
};

export default useColors;
