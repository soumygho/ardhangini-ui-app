import { useEffect, useMemo, useState } from "react";
import {
  FabricDetailsApiApi,
  FabricDetailsEntity,
} from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useFabrics = () => {
  const [productFabrics, setProductFabrics] = useState<FabricDetailsEntity[]>(
    []
  );
  const getAllProductFabrics = useMemo(
    () => () => {
      const api: FabricDetailsApiApi = new FabricDetailsApiApi(config);
      api
        .fabricControllerFindAll()
        .then((resp) => {
          if (resp) {
            setProductFabrics(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { productFabrics, getAllProductFabrics };
};

export default useFabrics;
