import axios from "axios";
const api = axios.create({
  baseURL: "https://linkedev-fakeapi.glitch.me/",
  timeout: 5000,
});

export default api;
