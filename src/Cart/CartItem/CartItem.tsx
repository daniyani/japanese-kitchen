import { FC } from "react";
import classes from "./CartItem.module.css";
import { ICartItems } from "../../types/cartContext";

type Props = {
  id: string;
  price: number;
  name: string;
  amount: number;
  onAddCartItem: (id: string) => void;
  onRemoveCartItem: (id: string) => void;
};

const CartItem: FC<Props> = ({
  id,
  price,
  name,
  amount,
  onAddCartItem,
  onRemoveCartItem,
}) => {
  const totalPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{totalPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => onRemoveCartItem(id)}>−</button>
        <button onClick={() => onAddCartItem(id)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
