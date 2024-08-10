import { useMemo, useState } from "react";
import { SubcategoryApi, SubcategoryEntity } from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useSubCategories = () => {
  const [subcategories, setSubCategories] = useState<SubcategoryEntity[]>([]);
  const getAllSubCategories = useMemo(
    () => () => {
      const api: SubcategoryApi = new SubcategoryApi(config);
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
