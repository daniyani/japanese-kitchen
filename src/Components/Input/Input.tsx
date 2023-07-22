import { FC } from "react";
import styles from "./Input.module.css";
import { InputType } from "../../types/input";

type Props = {
  handler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: InputType;
};

const Input: FC<Props> = ({ handler, input }) => {
  return (
    <div className={styles.input}>
      <input {...input} onChange={handler} />
    </div>
  );
};

export default Input;
