import axios from "axios";
const api = axios.create({
  baseURL: process.env.NODE_ENV ? "http://localhost:3001" : "https://linkedev-fake-api.vercel.app/",
  timeout: 5000,
});

export default api;
