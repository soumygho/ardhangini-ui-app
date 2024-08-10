import { useMemo, useState } from "react";
import {
  CustomerSareeDetailsApi,
  ProductSnapshotDto,
  SareeFilterDto,
} from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useSareeDetailsApi = () => {
  const [sarees, setSarees] = useState<ProductSnapshotDto[]>([]);
  const getAllSarees = useMemo(
    () => (filter: SareeFilterDto) => {
      const api: CustomerSareeDetailsApi = new CustomerSareeDetailsApi(config);
      api
        .sareeControllerGetAll(filter)
        .then((resp) => {
          if (resp) {
            setSarees(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { sarees, getAllSarees };
};

export default useSareeDetailsApi;
