// apiService.js
import api, { setAuthToken, setApiBaseUrl } from "../apiConfig/apiConfig";
// import { SIGNUP_URL, SIGNUP_TOKEN } from "react-dotenv";

const SIGNUP_TOKEN = "c7c13ee11696c2ea96c458a380ca406889b58e5e:x";
const SIGNUP_URL = "https://ipadpos.imonggo.net";
const API_URL = "https://www.imonggo.net"


// Function to update the dynamic API token
export const updateAuthToken = (token, login) => {
  if (login) {
    setAuthToken(token);
  } else {
    setAuthToken(SIGNUP_TOKEN);
  }
};

// Function to update the dynamic API base URL
export const updateApiBaseUrl = (baseUrl, login) => {
  if (login) {
    setApiBaseUrl(baseUrl);
  } else {
    setApiBaseUrl(SIGNUP_URL);
  }
};

// GET request
export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};

// POST request
export const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

// PUT request
export const put = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response;
  } catch (error) {
    throw error;
  }
};

// DELETE request
export const del = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response;
  } catch (error) {
    throw error;
  }
};
