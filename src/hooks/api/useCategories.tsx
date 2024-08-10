import { useMemo, useState } from "react";
import { CategoryApi, CategoryEntity } from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryEntity[]>([]);
  const getAllCategories = useMemo(() => () => {
    const api: CategoryApi = new CategoryApi(config);
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
  },[]);

  return { categories, getAllCategories };
};

export default useCategories;
