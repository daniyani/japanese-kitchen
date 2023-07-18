import { FC, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../Components/Modal/Modal";
import CartContext from "../store/СartContext/CartContext";
import CartItem from "./CartItem/CartItem";
import { ICartItems } from "../types/cartContext";

type Props = {
  hideCartHandler: () => void;
};

const Cart: FC<Props> = ({ hideCartHandler }) => {
  const {
    items: cartItems,
    totalAmount,
    addItem,
    removeItem,
  } = useContext(CartContext);

  const fixedTotalAmount = `$${Math.abs(totalAmount).toFixed(2)}`;
  const hasItems = !!cartItems.length;

  const onAddCartItem = (id: string): void => {
    const currentItem = cartItems.find((item) => item.id === id);
    addItem({ ...currentItem, amount: 1 });
  };

  const onRemoveCartItem = (id: string): void => {
    removeItem(id);
  };

  return (
    <Modal hideCartHandler={hideCartHandler}>
      <ul className={styles["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            price={item.price}
            name={item.name}
            amount={item.amount}
            onAddCartItem={onAddCartItem}
            onRemoveCartItem={onRemoveCartItem}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Итого</span>
        <span>{fixedTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={hideCartHandler}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
