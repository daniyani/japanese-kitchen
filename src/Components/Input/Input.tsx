import { FC } from "react";
import styles from "./Input.module.css";

type InputType = {
  id: string;
  type: string;
  min?: string;
  step?: string;
  defaultValue?: string;
};
type Props = {
  label: string;
  input: InputType;
};

const Input: FC<Props> = ({ label, input }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
};

export default Input;
