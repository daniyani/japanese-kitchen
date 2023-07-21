import { FC, useContext } from "react";
import styles from "./Meal.module.css";
import Form from "./Form/Form";
import CartContext from "../../store/СartContext/CartContext";
import { IMeals } from "../../types/Meals";

type Props = IMeals;

const Meal: FC<Props> = ({ id, name, description, price }) => {
  const context = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCart = (amount: number) => {
    context.addItem({ id, name, amount, price });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <Form id={id} addToCart={addToCart} />
      </div>
    </li>
  );
};

export default Meal;
