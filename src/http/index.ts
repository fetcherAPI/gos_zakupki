import axios from "axios";
import { tokenAvailability } from "../utils/tokenAvailability";
const api = axios.create({
  withCredentials: false,
  /*baseURL: process.env.REACT_APP_BASE_URL,*/
  baseURL: `http://10.200.24.103/api/`,
  // headers: {
  //   Authorization: `Bearer ${window.localStorage.getItem("authentication")}`,
  // },
});

// api.interceptors.request.use((config: any) => {
//   if (tokenAvailability()) {
//     config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   }
//   return config;
// });

// api.interceptors.request.use((config) => {
//   (config.headers ??= {}).Authorization = `Bearer ${window.localStorage.getItem(
//     "authentication"
//   )}`;
//   return config;
// });

export default api;
