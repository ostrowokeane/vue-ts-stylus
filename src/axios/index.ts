import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: 'https://external-api.com',
});

axiosInstance.interceptors.response.use(
  response => Promise.resolve(response),
  error => Promise.reject(error),
);

export default axiosInstance;
