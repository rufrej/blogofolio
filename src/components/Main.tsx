import { childrenPropsType } from "../types/types";

export function Main({children}: childrenPropsType) {
  return <main className="d-flex m-auto flex-column">{children}</main>;
}


