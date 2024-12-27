// import { searchEndPoint } from "../config/bookApi";
// import { get, post } from "../utils/book";

// type parameters = {
//     query: string | undefined;
//     page: string | undefined;
//   };

// export const requestBooksList = async (params:parameters) => {
//   try {
//     const response = await get(searchEndPoint, { params.query, params.page});
//     console.warn(response);
//     return response.data;
//   } catch (error) {
//     return {
//       hasError: true,
//     };
//   }
// };
