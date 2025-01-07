import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore.ts";
import { SearchForm } from "./SearchForm.tsx";
import { UserProfileNavigation } from "./UserProfileNavigation.tsx";
import cart from "../assets/header-icons/shopping-bag.svg";
import heart from "../assets/header-icons/heart.svg";
import styles from "../styles/header.module.scss";
import { useTheme } from "../hooks/useTheme.ts";
import { Button } from "./Button.tsx";

export function Menu() {
  const { theme, setTheme } = useTheme();
  const token = useAppSelector((state) => state.auth.jwt);

  function renderNavigation() {
    if (!token) return null;
    return (
      <>
        <NavLink className={styles.header__cart} to="/posts/all/1">
          <img src={cart} alt="cart" />
        </NavLink>
        <NavLink className={styles.header__cart} to="/favourites">
          <img src={heart} alt="favourites" />
        </NavLink>
      </>
    );
  }

  const handleClickLightThemeButton = () => {
    setTheme("light");
  };
  const handleClickDarkThemeButton = () => {
    setTheme("dark");
  };

  return (
    <header>
      <div className={styles.header__row}>
        <NavLink className={styles.header__logo} to="/">
          <h1>blogofolio</h1>
        </NavLink>
        <SearchForm />
        <div className={styles.header__nav}>
          <div className={styles.header__userbar}>
            <Button onClick={handleClickDarkThemeButton} color="dark">
              dark theme
            </Button>
            <Button onClick={handleClickLightThemeButton} color="blue">
              light theme
            </Button>
            <UserProfileNavigation />
            {renderNavigation()}
          </div>
        </div>
      </div>
    </header>
  );
}
