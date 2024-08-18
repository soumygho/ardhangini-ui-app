import { useEffect, useMemo, useState } from "react";
import {
  ProductOccassionApi,
  ProductOccassionEntity,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useProductOccassions = () => {
  const [productOccassions, setProductOccassions] = useState<
    ProductOccassionEntity[]
  >([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const getAllProductOccassions = useMemo(
    () => async () => {
      const api: ProductOccassionApi = new ProductOccassionApi(
        await getAxiosConfiguration()
      );
      api
        .productOccassionControllerGetAll()
        .then((resp) => {
          if (resp) {
            setProductOccassions(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { productOccassions, getAllProductOccassions };
};

export default useProductOccassions;
