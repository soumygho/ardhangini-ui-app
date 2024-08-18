import { useMemo, useState } from "react";
import {
  CategoryApi,
  CategoryEntity,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  

  const getAllCategories = useMemo(
    () => () => {
      const api: CategoryApi = new CategoryApi( getAxiosConfiguration());
      api
        .categoryControllerFindAll()
        .then((resp) => {
          if (resp) {
            setCategories(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { categories, getAllCategories };
};

export default useCategories;
