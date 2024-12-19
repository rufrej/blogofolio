export const book = {
  _bookKey: "book",

  //   setToBacket(item: any) {
  //     if (!backet) {
  //         localStorage.setItem('backet', this.backetList )
  //     }
  //     const backet = localStorage.getItem("backet");

  //     // const backet = [];
  //     backet.push(item);
  //     const json = JSON.stringify(backet);
  //     localStorage.setItem("backet", json);
  //   },

  setToBacket(data: any) {
    localStorage.setItem("backet", JSON.stringify(data));
  },

  getBacket() {
    const items = localStorage.getItem("backet");
    return items ? JSON.parse(items) : [];
  },

  //   isAccessTokenExpired(accessToken: any) {
  //     const decodedJwt = jwtDecode(accessToken);
  //     const { exp }: any = decodedJwt;
  //     const now = Date.now() / 1000;
  //     return now >= exp;
  //   },

  // clearBacket() {
  //   localStorage.removeItem(this._bookKey);
  // },
};
