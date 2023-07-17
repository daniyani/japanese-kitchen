import { FC } from "react";
import styles from "./Form.module.css";
import Input from "../../../Components/Input/Input";

const Form: FC = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
