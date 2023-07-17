import { FC } from "react";
import styles from "./Meal.module.css";
import Form from "./Form/Form";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
};

const Meal: FC<Props> = ({ id, name, description, price }) => {
  const formattedPrice = `$${price.toFixed(2)}`;

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <Form id={id} />
      </div>
    </li>
  );
};

export default Meal;
