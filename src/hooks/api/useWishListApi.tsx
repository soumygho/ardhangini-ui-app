import { useMemo, useState } from "react";
import {
  WishListApi,
  WishListDetailsResponse,
  WishListUpdateDto,
} from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useCartApi = () => {
  const [wishListDetails, setWishListDetails] = useState<WishListDetailsResponse>();
  const getWishListDetails = useMemo(
    () => (userId: string) => {
      const api: WishListApi = new WishListApi(config);
        api
          .wishListControllerGetWishListByUserId(userId)
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

  const removeFromWishList = useMemo(
    () => (dto: WishListUpdateDto) => {
      const api: WishListApi = new WishListApi(config);
        api
          .wishListControllerRemoveFrom(dto)
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
  const addToWishList = useMemo(
    () => (dto: WishListUpdateDto) => {
      const api: WishListApi = new WishListApi(config);
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

  return { wishListDetails, getWishListDetails, addToWishList, removeFromWishList };
};

export default useCartApi;
