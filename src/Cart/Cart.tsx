import { FC, useState, useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../Components/Modal/Modal";
import CartContext from "../store/СartContext/CartContext";
import CartItem from "./CartItem/CartItem";
import OrderForm from "./OrderForm/OrderForm";

type Props = {
  hideCartHandler: () => void;
};

const Cart: FC<Props> = ({ hideCartHandler }) => {
  const [isOrderFormAvailable, setOrderFormAvailable] =
    useState<boolean>(false);

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

  const orderHandler = (): void => {
    setOrderFormAvailable(true);
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
      {isOrderFormAvailable && <OrderForm hideCartHandler={hideCartHandler} />}
      {!isOrderFormAvailable && (
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={hideCartHandler}>
            Close
          </button>
          {hasItems && (
            <button className={styles.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </Modal>
  );
};

export default Cart;
