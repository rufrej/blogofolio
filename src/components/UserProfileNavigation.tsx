import { useState } from "react";
import styles from "../styles/header.module.scss";
import userIcon from "../assets/header-icons/userIcon.svg";
import { useNavigate } from "react-router-dom";
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
          SingIn
        </Button>
      );
    }

    return (
      <>
        <Button color="dark" onClick={() => navigate("/profile")}>
          Profile
        </Button>
        <Button color="dark" onClick={handleClickButtonLogOut}>
          Log Out
        </Button>
      </>
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
          {renderAuthButton()}
        </div>
      )}
    </div>
  );
}
