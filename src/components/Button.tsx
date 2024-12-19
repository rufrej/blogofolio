import React from "react";

import styles from "../styles/button.module.scss";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color: "orange" | "blue" | "red" | "green" | "dark";
}

export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
