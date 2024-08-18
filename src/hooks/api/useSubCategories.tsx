import { useMemo, useState } from "react";
import { SubcategoryApi, SubcategoryEntity } from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useSubCategories = () => {
  const [subcategories, setSubCategories] = useState<SubcategoryEntity[]>([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  const getAllSubCategories = useMemo(
    () => async () => {
      const api: SubcategoryApi = new SubcategoryApi(await getAxiosConfiguration());
      api
        .subcategoryControllerFindAll()
        .then((resp) => {
          if (resp) {
            setSubCategories(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { subcategories, getAllSubCategories };
};

export default useSubCategories;
