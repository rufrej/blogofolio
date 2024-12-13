import { jwtDecode } from "jwt-decode";

export const jwt = {
  _jwtKey: "jwt",

  setToLocalStorage(tokens: any) {
    const json = JSON.stringify(tokens);
    localStorage.setItem(this._jwtKey, json);
  },

  getFromLocalStorage() {
    const tokens = localStorage.getItem(this._jwtKey);
    if (!tokens) return null;
    return JSON.parse(tokens);
  },

  isAccessTokenExpired(accessToken: any) {
    const decodedJwt = jwtDecode(accessToken);
    const { exp }: any = decodedJwt;
    const now = Date.now() / 1000;
    return now >= exp;
  },

  clearLocalStorage() {
    localStorage.removeItem(this._jwtKey);
  },
};
