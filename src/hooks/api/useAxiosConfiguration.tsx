import { Configuration } from "../../services/openapi";

const useAxiosConfiguration = () => {
  const config: Configuration = new Configuration();
  config.basePath = process.env.REACT_APP_BACKEND_URL;
  //access the accesstoken / refreshtoken here
  const getAxiosConfiguration = () => {
    const accessToken = localStorage.getItem("token");
    console.trace(accessToken);
    if (accessToken) {
      config.accessToken = accessToken;
    }
    return config;
  };
  return { getAxiosConfiguration };
};
export default useAxiosConfiguration;
