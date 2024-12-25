// import { Button } from "./Button";
// import { useCount } from "../hooks/useCount";
// import styles from "../styles/button.module.scss";
// import { childrenPropsType } from "../types/types";

// export function ButtonsGroup() {
//   const { count, increment, decrement } = useCount();

//   return (
//     <div className={styles.button_group}>
//       <Button onClick={handleClickDecrement} color="transparent">
//         -
//       </Button>
//       <span className={styles.button_group__counter}></span>
//       <Button onClick={handleClickIncrement} color="transparent">
//         +
//       </Button>
//     </div>
//   );
// }
// export function ButtonsGroup() {
//   const { count, increment, decrement } = useCount();

//   const handleClickIncrement = () => increment();
//   const handleClickDecrement = () => decrement();

//   return (
//     <div className={styles.button_group}>
//       <Button onClick={handleClickDecrement} color="transparent">
//         -
//       </Button>
//       <span className={styles.button_group__counter}>{count}</span>
//       <Button onClick={handleClickIncrement} color="transparent">
//         +
//       </Button>
//     </div>
//   );
// }
