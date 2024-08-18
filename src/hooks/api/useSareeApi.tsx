import { useMemo, useState } from "react";
import {
  CustomerSareeDetailsApi,
  ProductSnapshotDto,
  ProductSnapshotWithUserDto,
  SareeFilterDto,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useSareeDetailsApi = () => {
  const [sarees, setSarees] = useState<
    ProductSnapshotWithUserDto[] | ProductSnapshotDto[]
  >([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  

  const getAllSarees = useMemo(
    () => async (filter: SareeFilterDto) => {
      const api: CustomerSareeDetailsApi = new CustomerSareeDetailsApi(
        await getAxiosConfiguration()
      );
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

  const getRelatedSarees = useMemo(
    () => async (sareeId: string) => {
      const api: CustomerSareeDetailsApi = new CustomerSareeDetailsApi(
        await getAxiosConfiguration()
      );
      api
        .sareeControllerGetRelatedSarees(sareeId)
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

  return { sarees, getAllSarees, getRelatedSarees };
};

export default useSareeDetailsApi;
