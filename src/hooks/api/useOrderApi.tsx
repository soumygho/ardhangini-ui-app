import { useMemo, useState } from "react";
import {
  CreateOrderDto,
  OrderApiApi,
  OrderResponse,
} from "../../services/openapi";
import { config, showToast } from "../../context/root.context";

const useOrdersApi = () => {
  const [allOrderDetails, setAllOrderDetails] = useState<OrderResponse[]>();
  const [placedOrderDetails, setPlacedOrderDetails] = useState<OrderResponse>();

  const getAllOrderDetails = useMemo(
    () => (userId: string) => {
      const api: OrderApiApi = new OrderApiApi(config);
      api
        .orderControllerFindAllByUser(userId)
        .then((resp) => {
          if (resp) {
            setAllOrderDetails(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );

  const placeOrder = useMemo(
    () => (dto: CreateOrderDto) => {
      const api: OrderApiApi = new OrderApiApi(config);
      api
        .orderControllerCreate(dto)
        .then((resp) => {
          if (resp) {
            setPlacedOrderDetails(resp?.data);
          }
        })
        .catch((e) => {
          console.log(e);
          showToast("Could not reach out to backend.");
        });
    },
    []
  );
  const returnOrder = useMemo(
    () => (userId: string, orderId: string) => {
      const api: OrderApiApi = new OrderApiApi(config);
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
    () => (userId: string, orderId: string) => {
      const api: OrderApiApi = new OrderApiApi(config);
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
    placedOrderDetails,
    getAllOrderDetails,
    placeOrder,
    cancelOrder,
    returnOrder,
  };
};

export default useOrdersApi;
