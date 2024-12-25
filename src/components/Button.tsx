import React from "react";

import styles from "../styles/button.module.scss";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color:
    | "orange"
    | "orange-full"
    | "blue"
    | "red"
    | "green"
    | "dark"
    | "transparent";
}

export const Button: React.FC<ButtonProps> = ({ color, children, onClick }) => {
  const className = `${styles.button} ${styles[`button_${color}`]}
  }`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
