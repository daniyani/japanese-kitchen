import { FC } from "react";
import styles from "./Form.module.css";
import Input from "../../../Components/Input/Input";

type Props = {
  id: string;
};

const Form: FC<Props> = ({ id }) => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id,
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
