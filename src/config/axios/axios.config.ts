import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.0.107:8000",
});

const getAccessToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("persist:root");
    const authToken = token && JSON.parse(token).auth;
    const authToken2 = authToken && JSON.parse(authToken).tokens;
    console.log("storage", authToken2);
    return authToken2;
  } else {
    return "";
  }
};

//chekcing acccess token stored in local storage before making http request
instance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken()?.access_token;
    if (accessToken) {
      config.headers!["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let refreshRetryCount = 0;

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (refreshRetryCount < 3) {
        refreshRetryCount++;

        const refreshToken = getAccessToken()?.refresh_token;
        try {
          const response = await instance.post("/api/auth/new_access_token/", {
            refresh_token: refreshToken,
          });

          if (response.status === 200) {
            //put it in redux
            // localStorage.setItem("access", response.data.access);
            // localStorage.setItem("refresh", response.data.refresh);
            return instance(originalRequest);
          } else {
          }
        } catch (refreshError) {
          // Log or handle the refreshError as needed
          console.error("Error refreshing token:", refreshError);
        }
      } else {
        redirectToLogin();
      }
    }

    if (error?.response?.status === 403) {
      redirectToLogin();
    }

    return Promise.reject(error);
  }
);

const redirectToLogin = () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "/login";
  }, 2000);
};

export default instance;
