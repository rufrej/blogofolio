import React, { useState } from "react";
import styles from "../styles/header.module.scss";
import logo from "../assets/header-icons/logo/brandFirstJanuary.svg";
import userIcon from "../assets/header-icons/userIcon.svg";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore.ts";
import { logOut } from "../redux/auth-slice";

export function UserProfilenavigation() {
  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.jwt);

  if (!token) {
    return (
      <NavLink className={styles.header__userbar__singin} to="auth/signin">
        <img src={userIcon} alt="sing in" />
        Войти
      </NavLink>
    );
  }

  const handleClickButtonLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <NavLink
        className={styles.header__userbar__singin}
        to="auth/signin"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img src={userIcon} alt="Porfile" />
      </NavLink>
      {isShown && (
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={styles.header__userbar__menu}
        >
          <button onClick={handleClickButtonLogOut}>выйти</button>
        </div>
      )}
    </div>
  );
}
