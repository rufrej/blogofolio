import { childrenPropsType } from "../types/types";

export function Container({ children }: childrenPropsType) {
  return <div className="container">{children}</div>;
}
