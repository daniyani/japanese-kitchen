import { FC, useState } from "react";
import styles from "./Form.module.css";
import Input from "../../../Components/Input/Input";

type Props = {
  id: string;
  addToCart: (value: number) => void;
};

const Form: FC<Props> = ({ id, addToCart }) => {
  const [amount, setAmount] = useState<number>(0);

  const submitHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    if (amount > 0) {
      addToCart(amount);

      return;
    }

    return;
  };

  const onAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        handler={onAmountHandler}
        input={{
          id,
          type: "number",
          value: amount,
          min: "1",
          step: "1",
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
