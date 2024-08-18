import { useMemo, useState } from "react";
import {
  ProductCollectionApi,
  ProductCollectionEntity,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useCollections = () => {
  const [collections, setCollections] = useState<ProductCollectionEntity[]>([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  

  const getAllCollections = useMemo(
    () => async () => {
      const api: ProductCollectionApi = new ProductCollectionApi(
        await getAxiosConfiguration()
      );
      api
        .productColelctionControllerGetAll()
        .then((resp) => {
          if (resp) {
            setCollections(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { collections, getAllCollections };
};

export default useCollections;
