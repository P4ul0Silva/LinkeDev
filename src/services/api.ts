import axios from "axios";
const PROD_ENV = process.env.VERCEL_ENV === "production" || process.env.VERCEL_ENV === "development";
const api = axios.create({
  baseURL: PROD_ENV ? "https://linkedev-fake-api.vercel.app/" : "http://localhost:3001",
  timeout: 5000,
});

export default api;
