import { useContext, useMemo } from "react";
import {
  RegisterEmailPasswordDto,
  UpdateUserDto,
  UserApi,
} from "../../services/openapi";
import {
  handleApiError,
  rootContext,
  showToast,
} from "../../context/root.context";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useAccountDetailsApi = () => {
  const root = useContext(rootContext);
  const { getAxiosConfiguration } = useAxiosConfiguration();

  const registerUsingEmail = useMemo(
    () => async (data: RegisterEmailPasswordDto) => {
      try {
        const api: UserApi = new UserApi(await getAxiosConfiguration());
        await api.userControllerRegisterUsingEmailAndPassword(data);
        showToast("Registration successful. Please Login.");
      } catch (e) {
        handleApiError(e);
        throw e;
      }
    },
    []
  );

  const getUserDetailsUsingToken = useMemo(
    () => async () => {
      try {
        const api: UserApi = new UserApi(await getAxiosConfiguration());
        const data = (await api.userControllerGetUserDetailsByToken()).data;
        return data;
      } catch (e) {
        handleApiError(e);
      }
    },
    []
  );

  const updateUserDetails = useMemo(
    () => async (dto: UpdateUserDto) => {
      try {
        const api: UserApi = new UserApi(await getAxiosConfiguration());
        if (root?.userId) {
          dto.userid = root.userId;
          const data = (await api.userControllerUpdate(dto)).data;
          showToast("Update user details successful.");
          return data;
        }
      } catch (e) {
        handleApiError(e);
      }
    },
    []
  );
  return { registerUsingEmail, getUserDetailsUsingToken, updateUserDetails };
};
export default useAccountDetailsApi;
