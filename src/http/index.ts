import axios from "axios";
const REACT_APP_BASE_URL = "http://10.200.24.103:8088/api";
const api = axios.create({
  withCredentials: true,
  baseURL: REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${localStorage.getItem(
    "Authorization"
  )}`;
  return config;
});

export default api;
