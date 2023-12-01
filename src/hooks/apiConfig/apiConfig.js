// apiConfig.js

import axios from "axios";
import { Base64,encode } from 'js-base64';

const api = axios.create({
  baseURL: "", // Dynamic API base URL (initially empty)
  headers: {
    "User-Agent": "com.imonggo.stockroom",
    "Content-Type": "application/json",
    Accept: "application/json",
    
  },
});

// Function to set the dynamic API token
export const setAuthToken = (token) => {
  let encoded = encode(token);
  if (token) {
    api.defaults.headers.common["Authorization"] = `Basic ${encoded}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};



// Function to set the dynamic API base URL
export const setApiBaseUrl = (baseUrl) => {
  api.defaults.baseURL = baseUrl;
};

export default api;
