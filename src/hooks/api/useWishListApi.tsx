import { useContext, useMemo, useState } from "react";
import {
  WishListApi,
  WishListDetailsResponse,
  WishListUpdateDto,
} from "../../services/openapi";
import { rootContext, showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useWishListApi = () => {
  const root = useContext(rootContext);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const [wishListDetails, setWishListDetails] =
    useState<WishListDetailsResponse>();
  const getWishListDetails = useMemo(
    () => async (userId: string) => {
      const api: WishListApi = new WishListApi(await getAxiosConfiguration());
      api
        .wishListControllerGetWishListByUserId(userId)
        .then((resp) => {
          if (resp) {
            setWishListDetails(() => resp?.data);
            return resp?.data;
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  const removeFromWishList = useMemo(
    () => async (dto: WishListUpdateDto) => {
      const api: WishListApi = new WishListApi(await getAxiosConfiguration());
      api
        .wishListControllerRemoveFrom(dto)
        .then((resp) => {
          if (resp) {
            setWishListDetails(() => resp?.data);
            showToast("Added to wishlist.");
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );
  const addToWishList = useMemo(
    () => async (dto: WishListUpdateDto) => {
      const api: WishListApi = new WishListApi(await getAxiosConfiguration());
      api
        .wishListControllerAddToWishList(dto)
        .then((resp) => {
          if (resp) {
            setWishListDetails(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return {
    wishListDetails,
    getWishListDetails,
    addToWishList,
    removeFromWishList,
  };
};

export default useWishListApi;
