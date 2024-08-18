import { useMemo, useState } from "react";
import {
  CartApi,
  CartDetailsResponse,
  CartUpdateDto,
} from "../../services/openapi";
import { showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useCartApi = () => {
  const [cartDetails, setCartDetails] = useState<CartDetailsResponse>();
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const getCartDetails = useMemo(
    () => async (userId: string) => {
      const api: CartApi = new CartApi(await getAxiosConfiguration());
      api
        .cartControllerGetCartByUserId(userId)
        .then((resp) => {
          if (resp) {
            setCartDetails(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  const removeFromCart = useMemo(
    () => async (dto: CartUpdateDto) => {
      const api: CartApi = new CartApi(await getAxiosConfiguration());
      api
        .cartControllerRemoveFromCart(dto)
        .then((resp) => {
          if (resp) {
            setCartDetails(resp?.data);
            showToast("Removed from cart.");
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );
  const addToCart = useMemo(
    () => async (dto: CartUpdateDto) => {
      const api: CartApi = new CartApi(await getAxiosConfiguration());
      api
        .cartControllerAddToCart(dto)
        .then((resp) => {
          if (resp) {
            setCartDetails(resp?.data);
            showToast("Added to cart.");
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  return { cartDetails, getCartDetails, addToCart, removeFromCart };
};

export default useCartApi;
