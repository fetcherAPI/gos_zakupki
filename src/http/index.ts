import axios from "axios";
const api = axios.create({
  withCredentials: true,
  /*baseURL: process.env.REACT_APP_BASE_URL,*/
  baseURL: `http://10.200.24.103/api/`,
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
