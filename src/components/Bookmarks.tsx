import { useState } from "react";
import styles from "../styles/header.module.scss";
import mark from "../assets/header-icons/bookmark-square-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import { categoriesList } from "../config/constants.ts";

export function BookMarks() {
  const [isShown, setIsShown] = useState<boolean>(false);

  function renderCategories() {
    return categoriesList.map((item, index) => {
      return (
        <NavLink
          key={index}
          className={styles.header__category}
          to={`/search/${item}/1`}
        >
          {item}
        </NavLink>
      );
    });
  }

  return (
    <div>
      <div
        className={styles.header__userbar__singin}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img src={mark} alt="Porfile" />
      </div>
      {isShown && (
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={styles.header__userbar__menu__categories}
        >
          {renderCategories()}
        </div>
      )}
    </div>
  );
}
