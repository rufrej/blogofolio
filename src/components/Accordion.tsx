import styles from "../styles/accordion.module.scss";

interface IAccordioProps {
  title: string;
  children: React.ReactNode;
}

export function Accordion(props: IAccordioProps) {
  return (
    <div className={styles.accordion}>
      <details className={styles.accordion__details} name="faq">
        <summary className={styles.accordion__summary}>
          <span
            className={styles.accordion__title}
            role="term"
            aria-details="faq-3"
          >
            {props.title}
          </span>
        </summary>
      </details>

      <div className={styles.accordion__content} id="faq-3" role="definition">
        <div className={styles.accordion__content__body}>{props.children}</div>
      </div>
    </div>
  );
}
