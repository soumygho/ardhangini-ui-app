import { useContext, useMemo, useState } from "react";
import {
  CartApi,
  CartDetailsResponse,
  CartUpdateDto,
} from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useCartApi = () => {
  const [cartDetails, setCartDetails] = useState<CartDetailsResponse>();
  const getCartDetails = useMemo(
    () => (userId: string) => {
      const api: CartApi = new CartApi(config);
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
    () => (dto: CartUpdateDto) => {
      const api: CartApi = new CartApi(config);
      api
        .cartControllerRemoveFromCart(dto)
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
  const addToCart = useMemo(
    () => (dto: CartUpdateDto) => {
      const api: CartApi = new CartApi(config);
      api
        .cartControllerAddToCart(dto)
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

  return { cartDetails, getCartDetails, addToCart, removeFromCart };
};

export default useCartApi;
