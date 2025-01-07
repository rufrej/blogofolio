import { childrenPropsType } from "../types/types";

export function Main({ children }: childrenPropsType) {
  return <main className="main">{children}</main>;
}
