import axiosInstance from "./useAxios.js";

const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      let users = localStorage.getItem("Token")
        ? JSON.parse(localStorage.getItem("Token"))
        : null;
      //console.log("ok", users);
      if (users) {
        config.headers["Authorization"] = "Bearer " + users?.AccessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      let users = localStorage.getItem("Token")
        ? JSON.parse(localStorage.getItem("Token"))
        : null;

      const status = err.response ? err.response.status : null;
      const originalRequest = err.config;

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const response = await axiosInstance.post("/refreshToken", {
            RefeshToken: users?.RefreshToken,
          });
          if (response.status === 200) {
            localStorage.setItem("Token", JSON.stringify(response.data));
            let users = localStorage.getItem("Token")
              ? JSON.parse(localStorage.getItem("Token"))
              : null;
            axiosInstance.defaults.headers.common["Authorization"] =
              "Bearer " + users.AccessToken;
          }
          return axiosInstance(originalRequest);
        } catch (error) {
          return Promise.reject(error);
        }
      }
      return Promise.reject(err);
    }
  );
};

export default setupInterceptors;
