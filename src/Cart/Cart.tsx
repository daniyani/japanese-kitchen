import { FC, useState, useContext, useEffect } from "react";
import styles from "./Cart.module.css";
import Modal from "../Components/Modal/Modal";
import CartContext from "../store/СartContext/CartContext";
import CartItem from "./CartItem/CartItem";
import OrderForm from "./OrderForm/OrderForm";
import { IUserData } from "../types/Cart";
import SendDataResult from "./SendDataResult/SendDataResult";

type Props = {
  hideCartHandler: () => void;
};

const Cart: FC<Props> = ({ hideCartHandler }) => {
  const [isOrderFormAvailable, setOrderFormAvailable] =
    useState<boolean>(false);
  const [isDataSubmitting, setDataSubmitting] = useState(false);
  const [isDataSent, setDataSent] = useState(false);
  const [error, setError] = useState(false);

  const {
    items: cartItems,
    totalAmount,
    addItem,
    removeItem,
    resetItems,
  } = useContext(CartContext);

  const fixedTotalAmount = `$${Math.abs(totalAmount).toFixed(2)}`;
  const hasItems = !!cartItems.length;
  const isCartContentVisible = !isDataSubmitting && !isDataSent && !error;

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

  const submitOrderHandler = async (userData: IUserData): Promise<void> => {
    setDataSubmitting(true);

    try {
      const response = await fetch(
        "https://react-http-e0a06-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: userData,
            orderedMeals: cartItems,
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      setDataSubmitting(false);
      setDataSent(true);
      resetItems();
    } catch (e) {
      setDataSubmitting(false);
      setError(true);
    }
  };

  useEffect(() => {
    if (!hasItems) {
      setOrderFormAvailable(false);
    }
  }, [hasItems]);

  const sendingDataContent = (
    <p className={styles.sendingMessage}>Данные заказа отправляются...</p>
  );

  return (
    <Modal hideCartHandler={hideCartHandler}>
      {isDataSubmitting && sendingDataContent}
      {!isDataSubmitting && isDataSent && (
        <SendDataResult>
          <p className={styles.sendingMessage}>Данные успешно отправлены!</p>
          <div className={styles.actions}>
            <button className={styles["cart-items"]} onClick={hideCartHandler}>
              Close
            </button>
          </div>
        </SendDataResult>
      )}
      {!isDataSubmitting && error && (
        <SendDataResult>
          <p className={styles.sendingMessage}>Что-то пошло не так...</p>
          <div className={styles.actions}>
            <button className={styles["cart-items"]} onClick={hideCartHandler}>
              Close
            </button>
          </div>
        </SendDataResult>
      )}
      {isCartContentVisible && (
        <>
          {" "}
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
            <span>Total</span>
            <span>{fixedTotalAmount}</span>
          </div>
          {isOrderFormAvailable && hasItems && (
            <OrderForm
              hideCartHandler={hideCartHandler}
              onSubmit={submitOrderHandler}
            />
          )}
          {!isOrderFormAvailable && (
            <div className={styles.actions}>
              <button
                className={styles["cart-items"]}
                onClick={hideCartHandler}
              >
                Close
              </button>
              {hasItems && (
                <button className={styles.button} onClick={orderHandler}>
                  Order
                </button>
              )}
            </div>
          )}
        </>
      )}
    </Modal>
  );
};

export default Cart;
