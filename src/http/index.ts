import axios from "axios";
const api = axios.create({
  withCredentials: true,
  /*baseURL: process.env.REACT_APP_BASE_URL,*/
  baseURL: `http://10.100.4.164:8088/`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  (config.headers ??= {}).Authorization = `Bearer ${window.localStorage.getItem(
    "authentication"
  )}`;
  return config;
});

export default api;
