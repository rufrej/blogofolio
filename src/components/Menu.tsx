import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useStore.ts";
import { SearchForm } from "./SearchForm.tsx";
import { UserProfileNavigation } from "./UserProfileNavigation.tsx";
import cart from "../assets/header-icons/shopping-bag.svg";
import heart from "../assets/header-icons/heart.svg";
import { useTheme } from "../hooks/useTheme.ts";
import { Button } from "./Button.tsx";
import styles from "../styles/menu.module.scss";

export function Menu() {
  const { theme, setTheme } = useTheme();
  const token = useAppSelector((state) => state.auth.jwt);

  function renderNavigation() {
    if (!token) return null;
    return (
      <>
        <NavLink to="/posts/all/1">
          <img src={cart} alt="cart" />
        </NavLink>
        <NavLink to="/favourites">
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
    <div className={styles.menu}>
      <ul className={styles.menu__}>
        <li></li>
        <li></li>
        <li></li>
        <li>
          {" "}
          <Button onClick={handleClickDarkThemeButton} color="dark">
            dark theme
          </Button>
        </li>
        <li>
          {" "}
          <Button onClick={handleClickLightThemeButton} color="blue">
            light theme
          </Button>
        </li>
      </ul>
    </div>
  );
}
