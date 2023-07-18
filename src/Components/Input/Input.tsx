import { FC } from "react";
import styles from "./Input.module.css";
import { InputType } from "../../types/input";

type Props = {
  onAmountHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  input: InputType;
};

const Input: FC<Props> = ({ onAmountHandler, label, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} onChange={onAmountHandler} />
    </div>
  );
};

export default Input;
