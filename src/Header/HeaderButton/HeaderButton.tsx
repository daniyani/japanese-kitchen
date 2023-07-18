import { FC, useContext } from "react";
import CartIcon from "../../Svgs/CartIcon/CartIcon";

import styles from "./HeaderButton.module.css";
import CartContext from "../../store/СartContext/CartContext";

type Props = {
  showCartHandler: () => void;
};

const HeaderButton: FC<Props> = ({ showCartHandler }) => {
  const { items } = useContext(CartContext);

  const itemsAmount = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <>
      <button className={styles.button} onClick={showCartHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Корзина</span>
        <span className={styles.badge}>{itemsAmount}</span>
      </button>
    </>
  );
};

export default HeaderButton;
