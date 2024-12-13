import axios from "axios";
import { baseURL, refreshAccessTokenEndPoint } from "../config/api";
import { jwt } from "./jwt";
import { requestRefreshAccessToken } from "../servises/auth";

const client = axios.create({
  baseURL,
  timeout: 1000,
  // withCredentials: false,
});

client.interceptors.request.use(async (config) => {
  if (config.url === refreshAccessTokenEndPoint) return config;

  let tokens = jwt.getFromLocalStorage();

  if (!tokens) return config;

  if (jwt.isAccessTokenExpired(tokens.access)) {
    const newAccessToken = await requestRefreshAccessToken(tokens.refresh);
    tokens = { ...tokens, access: newAccessToken };
    jwt.setToLocalStorage(tokens);
  }

  config.headers.Authorization = `Bearer ${tokens.access}`;
  return config;
});

const get = client.get;
const post = client.post;
const put = client.put;
const patch = client.patch;
const del = client.delete;

export { get, post, put, patch, del };
