import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore.ts";
import { SearchForm } from "./SearchForm.tsx";
import { UserProfilenavigation } from "./UserProfileNavigation.tsx";
import cart from "../assets/header-icons/shopping-bag.svg";
import heart from "../assets/header-icons/heart.svg";
import styles from "../styles/header.module.scss";

export function Header() {
  function renderPurchaseСounter() {
    const purchaseСounter = useAppSelector((state) => state.cart.list.length);
    if (purchaseСounter == 0) return null;

    return (
      <span className={styles.header__cart__counter}>{purchaseСounter}</span>
    );
  }
  return (
    <header>
      <div className={styles.header__row}>
        <NavLink className={styles.header__logo} to="/">
          Bookstore
        </NavLink>
        <SearchForm />
        {/* <NavLink className={styles.header__categories} to="/categories">
          Categories
        </NavLink> */}
        <div className={styles.header__nav}>
          <div className={styles.header__userbar}>
            <UserProfilenavigation />
            <NavLink className={styles.header__cart} to="/cart">
              <img src={cart} alt="cart" />
              {renderPurchaseСounter()}
            </NavLink>
            <NavLink className={styles.header__cart} to="/favourites">
              <img src={heart} alt="favourites" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
