import axios from "axios";
const api = axios.create({
  baseURL: "https://linkedev-fake-api.vercel.app/",
  timeout: 5000,
});

export default api;
