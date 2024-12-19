import { NavLink } from "react-router-dom";
import { ICategoryCardProps } from "../types/types";
import styles from "../styles/categories.module.scss";

export function CategoryCard(props: ICategoryCardProps) {
  return (
    <div className={styles.category__card}>
      <NavLink to={`/categories/${props.link}`}>
        <h3>{props.title}</h3>
        <p>First published: {props.firstPublished}</p>
        <p>Last published: {props.lastPublished}</p>
        <p>Update: {props.updated}</p>
      </NavLink>
    </div>
  );
}
