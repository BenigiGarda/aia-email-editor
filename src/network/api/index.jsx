import axios from "axios";
import Cookies from "js-cookie";
const apiClient = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: `Bearer ${Cookies.get("userToken")}`,
  },
});

export default apiClient;
