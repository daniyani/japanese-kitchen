import { FC, useState } from "react";
import useInput from "../../hooks/useInput";

import styles from "./OrderForm.module.css";
import { isTrimmedStringNotEmpty } from "./helper";
import { IUserData } from "../../types/Cart";

type Props = {
  hideCartHandler: () => void;
  onSubmit: (userData: IUserData) => void;
};

const OrderForm: FC<Props> = ({ hideCartHandler, onSubmit }) => {
  const [isFormTouched, setFormTouched] = useState(false);

  const {
    inputValue: inputName,
    isInputValid: isInputNameValid,
    onChangeHandler: onInputNameHandler,
  } = useInput("", isTrimmedStringNotEmpty);
  const {
    inputValue: inputCity,
    isInputValid: isInputCityValid,
    onChangeHandler: onInputCityHandler,
  } = useInput("", isTrimmedStringNotEmpty);
  const {
    inputValue: inputAddress,
    isInputValid: isInputAddressValid,
    onChangeHandler: onInputAddressHandler,
  } = useInput("", isTrimmedStringNotEmpty);

  const isFormValid =
    isInputNameValid && isInputCityValid && isInputAddressValid;

  const confirmOrderHandler = (event: React.SyntheticEvent): void => {
    event.preventDefault();

    setFormTouched(true);

    if (!isFormValid) {
      return;
    }

    const sendData = {
      name: inputName,
      city: inputCity,
      address: inputAddress,
    };

    onSubmit(sendData);
  };

  return (
    <form className={styles.form} onSubmit={confirmOrderHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Введите имя</label>
        <input
          type="text"
          id="name"
          value={inputName}
          onChange={onInputNameHandler}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="city">Введите город</label>
        <input
          type="text"
          id="city"
          value={inputCity}
          onChange={onInputCityHandler}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="address">Введите адрес</label>
        <input
          type="text"
          id="address"
          value={inputAddress}
          onChange={onInputAddressHandler}
        />
      </div>
      {!isFormValid && isFormTouched && (
        <p className={styles.invalidText}>Пожалуйста, заполните все поля</p>
      )}
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
