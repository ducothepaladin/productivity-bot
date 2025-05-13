import useAuthStore, { getAccessToken } from "@/store/authStore";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const { setAccessToken, logout } = useAuthStore.getState();

const API = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log("Request Headers:", config.headers);
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const res = await axios.post(
          `${BASE_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        const newAccessToken = res.data.accessToken;
        setAccessToken(newAccessToken);
        API.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      } catch (err) {
        logout();
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;
