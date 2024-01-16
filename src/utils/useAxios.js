import axios from "axios";

const BASE_URL = "http://127.0.0.1:5000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Credentials": true,
  },
});

export default axiosInstance;
