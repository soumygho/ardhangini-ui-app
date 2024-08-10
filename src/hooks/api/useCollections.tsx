import { useEffect, useMemo, useState } from "react";
import { ProductCollectionApi, ProductCollectionEntity } from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useCollections = () => {
  const [collections, setCollections] = useState<ProductCollectionEntity[]>([]);
  const getAllCollections = useMemo(() => () => {
    const api: ProductCollectionApi = new ProductCollectionApi(config);
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
  }, []);

  return { collections, getAllCollections };
};

export default useCollections;
