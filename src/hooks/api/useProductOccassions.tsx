import { useEffect, useMemo, useState } from "react";
import {
  ProductOccassionApi,
  ProductOccassionEntity,
} from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useProductOccassions = () => {
  const [productOccassions, setProductOccassions] = useState<
    ProductOccassionEntity[]
  >([]);
  const getAllProductOccassions = useMemo(
    () => () => {
      const api: ProductOccassionApi = new ProductOccassionApi(config);
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
