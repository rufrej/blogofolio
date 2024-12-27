import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore";
import { NewBooksList } from "../components/NewBooksList";
import styles from "../styles/home.module.scss";

export function Home() {
  const token = useAppSelector((state) => state.auth.jwt);

  function renderAlert() {
    if (token) return null;

    return (
      <div className={styles.homepage__alert}>
        <span className={styles.homepage__alert__symbol}>!</span>
        <h3>You are not authorized, please log in or register</h3>
        <NavLink className={styles.homepage__alert__link} to={"/auth/signin"}>
          Sing In
        </NavLink>
      </div>
    );
  }

  return (
    <div className={styles.homepage}>
      {renderAlert()}
      <h1 className={styles.homepage__title}>new releases books</h1>
      <NewBooksList />
    </div>
  );
}
