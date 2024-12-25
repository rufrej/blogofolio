import axios from "axios";
import { baseURL } from "../config/bookApi";

const client = axios.create({
  baseURL,
  timeout: 1000,
  // withCredentials: false,
});

export const book = {
  _bookKey: "book",

  setToCart(data: any) {
    localStorage.setItem("cart", JSON.stringify(data));
  },

  getCart() {
    const items = localStorage.getItem("cart");
    return items ? JSON.parse(items) : [];
  },

  setToFavirites(data: any) {
    localStorage.setItem("favourites", JSON.stringify(data));
  },

  getFavirites() {
    const items = localStorage.getItem("favourites");
    return items ? JSON.parse(items) : [];
  },
};

const get = client.get;
const post = client.post;
const put = client.put;
const patch = client.patch;
const del = client.delete;

export { get, post, put, patch, del };
