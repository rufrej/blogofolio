import styles from '../styles/container.module.scss';
import { childrenPropsType } from '../types/types';

export function Container({children}: childrenPropsType) {
  return <div className={styles.container}>{children}</div>;
}
