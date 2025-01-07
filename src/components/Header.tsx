import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore.ts";
import { SearchForm } from "./SearchForm.tsx";
import { UserProfileNavigation } from "./UserProfileNavigation.tsx";
import cart from "../assets/header-icons/shopping-bag.svg";
import heart from "../assets/header-icons/heart.svg";
import { useTheme } from "../hooks/useTheme.ts";
import { Button } from "./UI/Button.tsx";

export function Header() {
  // const token = useAppSelector((state) => state.auth.jwt);
  // const purchaseСounter = useAppSelector((state) => state.cart.list.length);

  // function renderPurchaseСounter() {
  //   if (purchaseСounter == 0) return null;
  //   return <span className="header__cart__counter">{purchaseСounter}</span>;
  // }

  // function renderNavigation() {
  //   if (!token) return null;
  //   return (
  //     <>
  //       <NavLink className={styles.header__cart} to="/posts/all/1">
  //         <img src={cart} alt="cart" />
  //       </NavLink>
  //       <NavLink className={styles.header__cart} to="/favourites">
  //         <img src={heart} alt="favourites" />
  //       </NavLink>
  //     </>
  //   );
  // }

  return (
    <header>
      <div className="header__row">
        <NavLink className="header__logo" to="/">
          <h1>blogofolio</h1>
        </NavLink>
        <SearchForm />
        <div className="header__nav">
          <div className="header__userbar">
            <UserProfileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
