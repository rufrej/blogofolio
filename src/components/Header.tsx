import styles from "../styles/header.module.scss";
import { NavLink } from "react-router-dom";
import { SearchForm } from "./SearchForm.tsx";
import { UserProfilenavigation } from "./UserProfileNavigation.tsx";

export function Header() {
  return (
    <header>
      <div className={styles.header__row}>
        <NavLink className={styles.header__logo} to="/">
          Bookstore
        </NavLink>
        <SearchForm />
        <NavLink className={styles.header__categories} to="/categories">
          Categories
        </NavLink>
        <div className={styles.header__userbar}>
          <UserProfilenavigation />
          <NavLink className={styles.header__categories} to="/backet">
            backet
          </NavLink>
        </div>
      </div>
    </header>
  );
}
