import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore.ts";
import { SearchForm } from "./SearchForm.tsx";
import { UserProfileNavigation } from "./UserProfileNavigation.tsx";
import cart from "../assets/header-icons/shopping-bag.svg";
import heart from "../assets/header-icons/heart.svg";
import styles from "../styles/header.module.scss";

import { BookMarks } from "./Bookmarks.tsx";

export function Header() {
  const token = useAppSelector((state) => state.auth.jwt);
  const purchaseСounter = useAppSelector((state) => state.cart.list.length);

  function renderPurchaseСounter() {
    if (purchaseСounter == 0) return null;
    return (
      <span className={styles.header__cart__counter}>{purchaseСounter}</span>
    );
  }

  function renderNavigation() {
    if (!token) return null;
    return (
      <>
        <NavLink className={styles.header__cart} to="/cart">
          <img src={cart} alt="cart" />
          {renderPurchaseСounter()}
        </NavLink>
        <NavLink className={styles.header__cart} to="/favourites">
          <img src={heart} alt="favourites" />
        </NavLink>
        <BookMarks />
      </>
    );
  }

  return (
    <header>
      <div className={styles.header__row}>
        <NavLink className={styles.header__logo} to="/">
          <h1>Bookstore</h1>
        </NavLink>
        <SearchForm />
        <div className={styles.header__nav}>
          <div className={styles.header__userbar}>
            <UserProfileNavigation />
            {renderNavigation()}
          </div>
        </div>
      </div>
    </header>
  );
}
