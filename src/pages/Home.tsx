import { NavLink } from "react-router-dom";
import { NewBooksList } from "../components/NewBooksList";

export function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <NewBooksList />
    </div>
  );
}
