import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});
console.log(import.meta.env.VITE_API_URL, "url");
export default API; 
