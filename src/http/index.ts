import axios from "axios";
const api = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem(
    "Authorization"
  )}`;
  return config;
});

export default api;
