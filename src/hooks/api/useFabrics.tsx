import { useEffect, useMemo, useState } from "react";
import {
  Configuration,
  FabricDetailsApiApi,
  FabricDetailsEntity,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useFabrics = () => {
  const [productFabrics, setProductFabrics] = useState<FabricDetailsEntity[]>(
    []
  );
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const getAllProductFabrics = useMemo(
    () => async () => {
      const api: FabricDetailsApiApi = new FabricDetailsApiApi(
        await getAxiosConfiguration()
      );
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
