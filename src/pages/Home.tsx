import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";

export function Home() {
  const token = useAppSelector((state) => state.auth.jwt);

  function renderAlert() {
    if (token) return null;

    return (
      <div className="homepage__alert">
        <span className="homepage__alert__symbol">!</span>
        <h3>You are not authorized, please log in or register</h3>
        <NavLink className="homepage__alert__link" to={"/auth/signin"}>
          Sing In
        </NavLink>
      </div>
    );
  }

  return (
    <div className="homepage">
      {renderAlert()}
      <h1 className="homepage__title">Home page</h1>
    </div>
  );
}
