import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://stratum.rexit.live/chat/api",
  withCredentials: true,
});
