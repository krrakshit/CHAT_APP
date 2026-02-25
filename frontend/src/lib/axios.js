import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://stratum.rakshit.online/chat/api",
  withCredentials: true,
});
