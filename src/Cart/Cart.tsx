import { FC } from "react";
import styles from "./Cart.module.css";
import Modal from "../Components/Modal/Modal";

type Props = {
  hideCartHandler: () => void;
};

const Cart: FC<Props> = ({ hideCartHandler }) => {
  const fakeItems = [{ id: "m1", name: "Sushi", amount: 4, price: 10.99 }];

  return (
    <Modal hideCartHandler={hideCartHandler}>
      <ul className={styles["cart-items"]}>
        {fakeItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={styles.total}>
        <span>Итого</span>
        <span>10</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={hideCartHandler}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
