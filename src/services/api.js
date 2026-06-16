import axios from "axios";

const API = axios.create({
  baseURL: "https://dilkacenter-eqagg4ame5dqdfae.canadacentral-01.azurewebsites.net",
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default API; 
