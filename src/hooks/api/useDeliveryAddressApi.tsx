import { useContext, useEffect, useMemo, useState } from "react";
import {
  Configuration,
  DeliveryAddressApi,
  DeliveryAddressEntity,
  UpdateDeliveryAddressDto,
} from "../../services/openapi";
import {
  handleApiError,
  rootContext,
  showToast,
} from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useDeliveryAddressApi = () => {
  const [deliveryAddresses, setDeliveryAddresses] = useState<
    DeliveryAddressEntity[]
  >([]);
  const [isDeliveryAddressUpdated, setIsDeliveryAddressUpdated] =
    useState<Boolean>(false);
  const { getAxiosConfiguration } = useAxiosConfiguration();
  const root = useContext(rootContext);

  

  const addOrUpdateDeliveryAddress = useMemo(
    () => async (data: UpdateDeliveryAddressDto) => {
      const api: DeliveryAddressApi = new DeliveryAddressApi(
        await getAxiosConfiguration()
      );
      if (root?.userId) {
        data.userId = root.userId;
        api
          .deliveryAddressControllerCreateOrUpdate(data)
          .then((resp) => {
            if (resp?.data) {
              setIsDeliveryAddressUpdated(() => true);
              showToast('Added new delivery address.');
            }
          })
          .catch(handleApiError);
      }
    },
    []
  );

  const getDeliveryAddressesForCurrentUser = useMemo(
    () => async () => {
      const api: DeliveryAddressApi = new DeliveryAddressApi(
        await getAxiosConfiguration()
      );
      if (root?.userId) {
        api
          .deliveryAddressControllerGetAllByUserIdForUser(root.userId)
          .then((resp) => {
            if (resp?.data) {
              setDeliveryAddresses(() => resp.data);
              setIsDeliveryAddressUpdated(false);
            }
          })
          .catch(handleApiError);
      }
    },
    []
  );

  const removeDeliveryAddressesForCurrentUser = useMemo(
    () => async (addressId: string) => {
      const api: DeliveryAddressApi = new DeliveryAddressApi(
        await getAxiosConfiguration()
      );
      if (root?.userId) {
        api
          .deliveryAddressControllerRemove(addressId)
          .then(() => {
            setIsDeliveryAddressUpdated(() => true);
          })
          .catch(handleApiError);
      }
    },
    []
  );
  //this should update the state of the hook
  useEffect(() => {
    if (isDeliveryAddressUpdated) {
      getDeliveryAddressesForCurrentUser();
    }
  }, [isDeliveryAddressUpdated]);

  return {
    deliveryAddresses,
    isDeliveryAddressUpdated,
    addOrUpdateDeliveryAddress,
    removeDeliveryAddressesForCurrentUser,
    getDeliveryAddressesForCurrentUser,
  };
};

export default useDeliveryAddressApi;
