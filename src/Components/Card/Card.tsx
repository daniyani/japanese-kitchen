import { FC } from "react";
import styles from "./Card.module.css";

type Props = {
  children: JSX.Element;
};

const Card: FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
