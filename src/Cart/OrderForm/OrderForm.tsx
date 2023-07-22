import { FC } from "react";
import styles from "./OrderForm.module.css";

type Props = {
  hideCartHandler: () => void;
};

const OrderForm: FC<Props> = ({ hideCartHandler }) => {
  const confirmOrderHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Введите имя</label>
        <input type="text" id="name" />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Введите город</label>
        <input type="text" />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Введите адрес</label>
        <input type="text" id="address" />
      </div>
      <div className={styles.actions}>
        <button className={styles.submit} type="submit">
          Подтвердить заказ
        </button>
        <button type="button" onClick={hideCartHandler}>
          Отменить заказ
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
