import React, { useState } from "react";
import styles from "../styles/header.module.scss";
import userIcon from "../assets/header-icons/userIcon.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useStore.ts";
import { logOut } from "../redux/auth-slice";
import { Button } from "./Button.tsx";

export function UserProfileNavigation() {
  const navigate = useNavigate();

  const [isShown, setIsShown] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.jwt);

  function renderAuthButton() {
    if (!token) {
      return (
        <Button color="dark" onClick={() => navigate("auth/signin")}>
          Sing In
        </Button>

        // <NavLink className={styles.header__userbar__singin} to="auth/signin">
        //   <img src={userIcon} alt="sing in" />
        //   Войти
        // </NavLink>
      );
    }

    return (
      <Button color="dark" onClick={handleClickButtonLogOut}>
        Log Out
      </Button>
    );
  }

  const handleClickButtonLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div>
      <div
        className={styles.header__userbar__singin}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <img src={userIcon} alt="Porfile" />
      </div>
      {isShown && (
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={styles.header__userbar__menu}
        >
          <Button color="dark" onClick={() => navigate("/profile")}>
            Profile
          </Button>
          {renderAuthButton()}
        </div>
      )}
    </div>
  );
}
