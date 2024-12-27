import { IBook } from "../types/types";
import { NavLink } from "react-router-dom";
export function sectionAuthors(book: IBook) {
  const arr = book?.authors.split(",");
  console.warn(arr);
  return arr?.map((autor) => {
    return (
      <NavLink to={`/search/${autor}/1`}>
        <strong>{autor}</strong>
      </NavLink>
    );
  });
}
