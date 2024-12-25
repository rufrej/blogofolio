import styles from "../styles/footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <span>©2022 Bookstore</span>
        <span>All rights reserved</span>
      </div>
    </footer>
  );
}
