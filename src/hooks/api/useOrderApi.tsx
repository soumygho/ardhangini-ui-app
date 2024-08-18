import { useContext, useMemo, useState } from "react";
import {
  CreateOrderDto,
  OrderApiApi,
  OrderResponse,
} from "../../services/openapi";
import { rootContext, showToast } from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useOrdersApi = () => {
  const [allOrderDetails, setAllOrderDetails] = useState<OrderResponse[]>();
  const { getAxiosConfiguration } = useAxiosConfiguration();
  
  const root = useContext(rootContext);

  const getAllOrderDetails = useMemo(
    () => async () => {
      const api: OrderApiApi = new OrderApiApi(await getAxiosConfiguration());
      if (root?.userId) {
        api
          .orderControllerFindAllByUser(root?.userId)
          .then((resp) => {
            if (resp) {
              setAllOrderDetails(() => resp?.data);
            }
          })
          .catch((e) => {
            console.log(e);
            showToast("Could not reach out to backend.");
          });
      }
    },
    []
  );

  const placeOrder = useMemo(
    () => async (dto: CreateOrderDto) => {
      const api: OrderApiApi = new OrderApiApi(await getAxiosConfiguration());
      if (root?.userId) {
        dto.userId = root.userId;
        try {
          const data = (await api.orderControllerCreate(dto))?.data;
          showToast("Order placed successfully.");
          return data;
        } catch (e) {
          console.log(e);
          showToast("Could not reach out to backend.");
        }
      }
    },
    []
  );
  const returnOrder = useMemo(
    () => async (userId: string, orderId: string) => {
      const api: OrderApiApi = new OrderApiApi(await getAxiosConfiguration());
      api
        .orderControllerReturnOrder(userId, orderId)
        .then((resp) => {
          if (resp) {
            showToast("Order has been requested for return.");
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  const cancelOrder = useMemo(
    () => async (userId: string, orderId: string) => {
      const api: OrderApiApi = new OrderApiApi(await getAxiosConfiguration());
      api
        .orderControllerCancelOrder(userId, orderId)
        .then((resp) => {
          if (resp) {
            showToast("Order has been requested for cancellation.");
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
    allOrderDetails,
    getAllOrderDetails,
    placeOrder,
    cancelOrder,
    returnOrder,
  };
};

export default useOrdersApi;
