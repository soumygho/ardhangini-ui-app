import { useContext } from "react";
import {
  handleApiError,
  rootContext,
  showToast,
} from "../../context/root.context";
import {
  EmailAuthDto,
  TokenResponse,
  UserAuthApi,
} from "../../services/openapi";
import { decodeToken, isExpired } from "react-jwt";
import useAxiosConfiguration from "./useAxiosConfiguration";

const useUserAuthApi = () => {
  const root = useContext(rootContext);
  const { getAxiosConfiguration } = useAxiosConfiguration();

  const setAuthentication = async () => {
    const token = localStorage.getItem("token");
    const refreshToken = localStorage.getItem("refresh-token");
    if (token && !isExpired(token)) {
      const decodedToken: any = decodeToken(token);
      //need to check if valid token
      console.trace(decodeToken);
      return decodedToken.sub;
    } else if (refreshToken && !isExpired(refreshToken)) {
      console.trace('access token expired refreshing token.');
      await handleRefreshToken();
      const accesstoken = localStorage.getItem("token");
      if (accesstoken) {
        const decodedToken: any = decodeToken(accesstoken);
        //need to check if valid token
        console.trace(decodeToken);
        return decodedToken.sub;
      }
    } else {
      return '';
    }
  };

  const setTokenResponse = async (tokenResponse: TokenResponse) => {
    const api = new UserAuthApi(await getAxiosConfiguration());
    localStorage.setItem("token", tokenResponse.accessToken);
    localStorage.setItem("refresh-token", tokenResponse.refreshToken);
    console.trace(tokenResponse);
    if (root && tokenResponse.accessToken) {
      const decodedToken: any = decodeToken(tokenResponse.accessToken);
      console.trace(decodeToken);
      root.setUserId(decodedToken.sub);
    }
  };

  const clearTokens = () => {
    localStorage.clear();
    if (root) {
      root.setUserId("");
    }
  };

  const handleLoginUsingEmail = async (data: EmailAuthDto) => {
    try {
      const api = new UserAuthApi(await getAxiosConfiguration());
      const resp = (
        await api.userAuthControllerSigninUsingEmailAndPassword(data)
      ).data;
      setTokenResponse(resp);
      showToast("Login Successful");
      return resp;
    } catch (e) {
      if (root) {
        root.setUserId("");
      }
      handleApiError(e);
    }
  };

  const handleLogout = async () => {
    try {
      const config = getAxiosConfiguration();
      const authApi = new UserAuthApi(await config);
      const resp = (await authApi.userAuthControllerLogoutUser()).data;
      clearTokens();
      showToast("Logout Successfully.");
    } catch (e) {
      handleApiError(e);
    }
  };

  const handleRefreshToken = async () => {
    try {
      const config = await getAxiosConfiguration();
      const refreshToken = localStorage.getItem("refresh-token");
      if (refreshToken && !isExpired(refreshToken)) {
        config.accessToken = refreshToken;
        const authApi = new UserAuthApi(await config);
        const resp = (await authApi.userAuthControllerRefreshToken()).data;
        setTokenResponse(resp);
        showToast("token refreshed Successfully.");
        return resp;
      } else {
        console.trace("Refresh token is expired.");
        if (root) {
          root.setUserId("");
          root.setIsAccessTokenExpired(false);
        }
      }
    } catch (e) {
      if (root) {
        root.setUserId("");
      }
      handleApiError(e);
    }
  };

  return {
    handleLoginUsingEmail,
    handleLogout,
    setAuthentication,
    handleRefreshToken,
  };
};

export default useUserAuthApi;
