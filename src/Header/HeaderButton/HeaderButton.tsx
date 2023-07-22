import { FC, useContext, useState, useEffect } from "react";
import CartIcon from "../../Svgs/CartIcon/CartIcon";

import styles from "./HeaderButton.module.css";
import CartContext from "../../store/СartContext/CartContext";

type Props = {
  showCartHandler: () => void;
};

const HeaderButton: FC<Props> = ({ showCartHandler }) => {
  const [isButtonAnimated, setButtonAnimated] = useState<boolean>(false);

  const { items } = useContext(CartContext);

  const itemsAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const buttonClasses = `${styles.button} ${
    isButtonAnimated ? styles.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonAnimated(true);

    const timeout = setTimeout(() => {
      setButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [items]);

  return (
    <>
      <button className={buttonClasses} onClick={showCartHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
        <span className={styles.badge}>{itemsAmount}</span>
      </button>
    </>
  );
};

export default HeaderButton;
